import Button from "../UI/Button"
import Card from "../UI/Card"
import { useState } from "react"
import classes from './AddUser.module.css';

const AddUser=(props)=>{

    const [enteredUser,setEnteredUser] = useState ('');
    const [enteredAge,setEnteredAge] = useState ('');
// returns an array [0]=element, [1] = function only which can update value of [0].

    const userChangeHandler = (event) => {
        setEnteredUser(event.target.value);
    }
    
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const addDataHandler = (event) => {
        event.preventDefault();
        if(enteredUser.trim().length === 0 || enteredAge.trim().length === 0){
            alert("Please enter valid input") ;
            return;
        }
        if(+enteredAge < 0 || +enteredAge>110){
            alert("Please enter valid age");
            return;

        }
        props.onAddUser(enteredUser,enteredAge)
        setEnteredAge('');
        setEnteredUser('');
   }

    return (
        <Card>    
            <form onSubmit={addDataHandler} className = {classes.form}>
                <label className={classes.title} htmlFor="username">Username</label>
                <input className={classes.input} id="username" type="text" onChange={userChangeHandler} value={enteredUser}></input>
                <label className={classes.title} htmlFor="age">Age</label>
                <input className={classes.input} id ="age" type="number" onChange={ageChangeHandler} value={enteredAge}></input>
                <Button  type="submit">Submit</Button>
            </form>
        </Card>
    )  
}
export default AddUser;
 