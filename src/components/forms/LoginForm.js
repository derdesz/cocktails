import React, {useState} from 'react'
import * as axios from "axios";

export default function LoginForm( {logIn} ) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const checkValidLogin = (response) => {
        if (response.data.name) {
            logIn(response.data.name);
            console.log(response.data.name);
        } else {
            alert("not ok");
        }

    }

    const clickOnLogIn = () => {
        const user = {
            email: email,
            password: password
        };

        axios.post("http://localhost:8080/login", user).then(response => {
            checkValidLogin(response);
        });
        setEmail("");
        setPassword("");
    }

    return (
        <React.Fragment>
            <h2>Log in</h2>
            <div className="ui inverted segment">
                <div className="centered-form">
                    <div className="ui inverted form right-align-form">
                        <div className="inline field">
                            <label>E-mail</label>
                            <input type="text" placeholder="E-mail" value={email} onChange={handleEmailChange}/>
                        </div>
                        <div className="inline field">
                            <label>Password</label>
                            <input type="password" placeholder="Password" value={password}
                                   onChange={handlePasswordChange}/>
                        </div>
                        <div className="ui submit button" onClick={clickOnLogIn}>Log in</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
