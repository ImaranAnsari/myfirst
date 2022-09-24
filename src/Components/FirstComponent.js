


function FirstComponent(props) {
    
    return <div className = "modal">
        <h1>{props.owner} Aplication</h1>
        <p> Its Aplication{props.reason} </p>
        <button onClick={props.closeModal}>  Close </button>
    </div>

}
export default FirstComponent;