import { useRef, useState } from "react";
import { getUser } from "../../slices/UserSlice";
import { Button, Modal, ModalOpenLink, ModalRef, ModalToggleButton } from "@trussworks/react-uswds";
import W2Form from "./W2Form";

interface DeleteW2Props {
    indexOfW2ToUpdate: any
    existingForm: any
    handleUpdateW2: (event: any) => void
}

export default function DeleteW2(props: DeleteW2Props) {
    const [user, setUser] = useState(getUser())
    const [existingW2, setExistingW2] = useState(getUser())

    const modalRef = useRef<ModalRef>(null)

    const toggleModal = () => {
        modalRef.current?.toggleModal();
    };

    function handleUpdateButtonClick(event: any) {
        // setUser((prev) => ({...prev, formW2s: formW2s[props.indexOfW2ToUpdate]}))
        // fetch('http://localhost:8080/users/' + user.id, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(user)
        // }).then(() => {
        //     props.handleUpdateW2(event)
        //     toggleModal()
        // })
        //     .catch((err) => {
        //         console.log(err.message);
        //     });
    }

    return (
        <>
            <img
                src={"/PencilIcon.png"}
                alt={"alt"}
                style={{ cursor: 'pointer', marginTop: "5px" }}
                onClick={toggleModal}
            />
            <Modal ref={modalRef} id={"delete"} title={""} isInitiallyOpen={false} style={{ textAlign: "center", fontWeight: "bold", minWidth: "600px"}}>
                <W2Form existingForm={props.existingForm} isNewForm={false} isTaxFiling={false} handleSubmit={handleUpdateButtonClick} handleCancel={toggleModal}></W2Form>
            </Modal>
        </>
    )
}