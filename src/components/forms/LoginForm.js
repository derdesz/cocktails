import React, { useState } from "react";
import axios from "axios";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setUsername(event.target.value);
    }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const checkValidLogin = (response) => {
    if (response.data.name) {
      logIn(response.data.name);
      console.log(response.data.name);
    } else {
      alert("not ok");
    }
  };

    const clickOnLogIn = () => {
        var bodyFormData = new FormData();
        bodyFormData.append('username', username);
        bodyFormData.append('password', password);

        axios({
            method: 'post',
            url: 'http://localhost:8080/login',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' },
            withCredentials: true,
            })
            .then(res => {
                console.log("yeh we have succeeded");
                window.location.href = 'http://localhost:3000';
              })
              .catch(er => {
                console.log("no data sorry ", er);
              });
    }

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
