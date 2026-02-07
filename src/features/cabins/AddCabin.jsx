import React, { useState } from "react";
import Button from "../../ui/Button.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";
import Modal from "../../ui/Modal.jsx";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal(!isOpenModal)}>
        Add new Cabin
      </Button>
      {isOpenModal && (
        <Modal>
          <CreateCabinForm />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
