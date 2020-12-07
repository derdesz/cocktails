import React from 'react'

export default function LoginForm() {
    return (
        <React.Fragment>
        <h2>Log in</h2>
        <div className="ui inverted segment">
            <div className="centered-form">
                <div className="ui inverted form right-align-form">
                    <div className="inline field">
                        <label>E-mail</label>
                        <input type="text" placeholder="E-mail"/>
                    </div>
                    <div className="inline field">
                        <label>Password</label>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="ui submit button">Log in</div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
