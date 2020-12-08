import React, {useState} from 'react'
import axios from "axios";

export default function RegistrationForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const clickOnRegistration = (event) => {
        const user = {
            email: email,
            password: password,
            name: name,
            roles: ["user"]
        };
        axios.post("http://localhost:8080/registration", user, {
            headers: {
              "Access-Control-Allow-Origin": "*"
            }});
        console.log(user)
        setEmail("");
        setPassword("");
        setName("");

        alert("Registration data has been sent!");
    }

    return (
        <React.Fragment>
            <h2>Registration</h2>
            <div className="ui inverted segment">
                <div className="centered-form">
                    <div className="ui inverted form right-align-form">
                        <div className="inline field">
                            <label>E-mail</label>
                            <input type="text" placeholder="E-mail" value={email} onChange={handleEmailChange}/>
                        </div>
                        <div className="inline field">
                            <label>Password</label>
                            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                        </div>
                        <div className="inline field">
                            <label>Name</label>
                            <input type="text" placeholder="Name" value={name} onChange={handleNameChange}/>
                        </div>
                        <div className="ui inverted red basic button" onClick={clickOnRegistration}>Register</div>
                    </div>
                </div>
            </div>
            </React.Fragment>
    )
}
