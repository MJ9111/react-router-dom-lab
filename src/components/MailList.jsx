
import React from "react";
import { Link } from "react-router-dom";

const MailList = (props) => {
    return (
        <>
            <h2>Mailbox List</h2>
            <ul>
                {props.mail.map((currentMail) => {
                    return (
                        <li key={currentMail.id}>
                            <Link to={`/mail/${currentMail.id}`}>{currentMail.name}</Link>
                        </li>
                    )
                })}
            </ul>
            </>

    );
}

export default MailList;