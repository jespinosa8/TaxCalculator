import { useRef, useState } from "react";
import { getUser } from "../../slices/UserSlice";
import { Modal, ModalRef } from "@trussworks/react-uswds";
import Form1099 from "./Form1099";

interface Delete1099Props {
    indexOf1099ToUpdate: any
    existingForm: any
    handleUpdate1099: (event: any) => void
}

export default function Delete1099(props: Delete1099Props) {
    const [user, setUser] = useState(getUser())

    const modalRef = useRef<ModalRef>(null)

    const toggleModal = () => {
        modalRef.current?.toggleModal();
    };

    function handleUpdateButtonClick(event: any) {

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
                <Form1099 existingForm={props.existingForm} isNewForm={false} isTaxFiling={false} indexOf1099ToUpdate={props.indexOf1099ToUpdate} handleSubmit={handleUpdateButtonClick} handleCancel={toggleModal}></Form1099>
            </Modal>
        </>
    )
}