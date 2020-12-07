import React from 'react'

export default function RegistrationForm() {
    return (
        <React.Fragment>
            <h2>Registration</h2>
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
                        <div className="inline field">
                            <label>Name</label>
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="ui submit button">Register</div>
                    </div>
                </div>
            </div>
            </React.Fragment>
    )
}
