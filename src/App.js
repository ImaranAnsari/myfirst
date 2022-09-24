import FirstComponent from "./Components/FirstComponent";
import BackDrop from "./BackDrop/BackDrop";
import { useState } from "react";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  
  const modalCloseHandler = ()=>{
    setModalOpen(false);
  }
  const openModalHandler = ()=>{
    setModalOpen(true);
  }

  return ( 
    <div>
      
      <h1> Its My Application</h1>
      {modalOpen?<FirstComponent owner="Imran" reason=" for Quiz" closeModal={modalCloseHandler} />:null}
      {modalOpen?<BackDrop/>:null}
      <button onClick={openModalHandler}> Open </button>
    </div>
  );
}

export default App;
