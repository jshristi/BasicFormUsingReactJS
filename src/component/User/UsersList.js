import React from"react";
import Card from "../UI/Card";
import classes from './UsersList.module.css';

const UsersList = (props) => {
    return (
            <Card>
                <ul className={classes.form}>
                    {props.list.map((user) => (
                        <li className={classes.output} key={user.id}>
                            {user.name} ({user.age} years old)
                        </li>
                    ))}
                </ul>
            </Card>
    );
}
export default UsersList;
