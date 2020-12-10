import React, { useState } from "react";
import axios from "axios";
import {Redirect} from "react-router";



export default function LoginForm({logIn}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [successfulLogin, setSuccessFulLogin] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setUsername(event.target.value);
    }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const checkValidLogin = (name) => {
    if (name) {
        logIn(name);
    } else {
      alert("not ok");
    }
  };

    const clickOnLogIn = () => {
        var bodyFormData = new FormData();
        bodyFormData.append('username', username);
        bodyFormData.append('password', password);

        const user = {
            email: email,
            password: password
        };
        axios({
            method: 'post',
            url: 'http://localhost:8080/login',
            data: bodyFormData,
            user: user,
            headers: {'Content-Type': 'multipart/form-data' },
            withCredentials: true,
            })
            .then(res => {
                checkValidLogin(res.config.user.email);
                setSuccessFulLogin(true);

                // window.location.href = 'http://localhost:3000';

              })
              .catch(er => {
                console.log("no data sorry ", er);
              });
    }

    if(successfulLogin) {
        return <Redirect to="/"/>
    } else {
        return (
            <React.Fragment>
                <h2>Log in</h2>
                <div className="ui inverted segment">
                    <div className="centered-form">
                        <div className="ui inverted form right-align-form">
                            <div className="inline field">
                                <label>E-mail</label>
                                <input type="text" placeholder="E-mail" value={email} name="username" onChange={handleEmailChange}/>
                            </div>
                            <div className="inline field">
                                <label>Password</label>
                                <input type="password" placeholder="Password" value={password} name="password" onChange={handlePasswordChange}/>
                            </div>
                            <div className="ui submit button" onClick={clickOnLogIn}>Log in</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}
