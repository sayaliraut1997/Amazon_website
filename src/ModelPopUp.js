import React, { useState, useCallback } from "react";

import Modal from "@netojose/react-modal";

import ReactDOM from "react-dom";

import "./ModelPopUp.css";



function App() {

const [isOpen, setIsOpen] = useState(false);

const openModal = useCallback(() => setIsOpen(true), []);

const closeModal = useCallback(() => setIsOpen(false), []);

return (

<div>

<input type="button" value="Open modal" onClick={openModal} />

<Modal isOpen={isOpen} onRequestClose={closeModal}>

<p>This is the modal content</p>

<input type="button" value="Close modal" onClick={closeModal} />

</Modal>

</div>

);

}



const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);