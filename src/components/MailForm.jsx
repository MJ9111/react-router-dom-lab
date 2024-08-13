import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailForm = (props) => {
    const [name, setName] = useState("");
    const [unread, setUnread] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addMail({ name, unread });
        navigate("/mail");
    };

    return (
        <div>
            <h2>Mailbox Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="unread">Unread:</label>
                    <input
                        type="text"
                        id="unread"
                        value={unread}
                        onChange={(e) => setUnread(e.target.value)}
                    />
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default MailForm;