import { useState } from "react";
import { EntryForm } from "../components/Form";
import { apiUser } from "../api/client";

export const CreateEntry = () =>{

  const [message,setMessage] = useState('')

const handleEntry =async(formData) =>{
  try {
    const data = await apiUser("/entries/create", {
      method: "POST",
      body: formData,
    });

    console.log("Entrada creada:", data); 
    setMessage('Datos enviados correctamente')
    return true
  } catch (error) {
    console.error(error.message);
    return false
  }
};

return(

  <div>
      <h1>Nueva entrada</h1>
      <EntryForm onSubmit={handleEntry} />  
      {message && <p>{message}</p>}
  </div>
  );


}