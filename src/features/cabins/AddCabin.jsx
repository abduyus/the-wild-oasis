import React, { useState } from "react";
import Button from "../../ui/Button.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";

function AddCabin() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowForm(!showForm)}>Add new Cabin</Button>
      {showForm && <CreateCabinForm />}
    </div>
  );
}

export default AddCabin;
