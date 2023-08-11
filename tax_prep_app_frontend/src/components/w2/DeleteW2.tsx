import { useRef, useState } from "react";
import { getUser } from "../../slices/UserSlice";
import { Button, Modal, ModalRef } from "@trussworks/react-uswds";

interface DeleteW2Props {
    indexOfW2ToDelete: any
    handleDeleteW2: (event: any) => void
}

export default function DeleteW2(props: DeleteW2Props) {
    const [user, setUser] = useState(getUser())

    const modalRef = useRef<ModalRef>(null)

    const toggleModal = () => {
        modalRef.current?.toggleModal();
    };

    function handleDeleteButtonClick(event: any) {
        setUser((prev) => ({ ...prev, formW2s: user.formW2s.splice(props.indexOfW2ToDelete, 1) }))
        fetch('http://localhost:8080/users/' + user.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then(() => {
            props.handleDeleteW2(event)
            toggleModal()
        })
            .catch((err) => {
                console.log(err.message);
            });
    }

    return (
        <>
            <img
                src={"/Red_X_Icon_Small.png"}
                alt={"alt"}
                style={{ cursor: 'pointer', marginTop: "5px" }}
                onClick={toggleModal}
            />
            <Modal ref={modalRef} id={"delete"} title={"delete"} isInitiallyOpen={false} style={{ textAlign: "center", fontWeight: "bold" }}>
                <div>Are you sure you want to delete this W2?<br></br> This action cannot be undone.</div>
                <Button type="button" onClick={toggleModal} style={{ marginTop: "50px", marginRight: "50px" }}>
                    Cancel
                </Button>
                <Button type="submit" style={{ backgroundColor: "descruction" }} onClick={handleDeleteButtonClick}>
                    Confirm
                </Button>
            </Modal>
        </>
    )
}