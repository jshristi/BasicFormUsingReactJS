//import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModal.module.css'

const ErrorModal =(props)=>{

    return (
        <>
            <div className= {classes.ErrorModal}>
                <div onClick = {props.onCon}/>
                <header>
                    <h2>{props.title} </h2>
                </header>
                <div>
                    <p>
                        {props.message}
                    </p>
                </div>
                <footer>
                    <Button onClick={props.onCon}>Okay</Button>
                </footer>
            </div>
        </>
    )
}

export default ErrorModal;
