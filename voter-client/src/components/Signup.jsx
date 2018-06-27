import React from 'react'

class Signup extends React.Component {

    handleSubmit(e) {
        e.preventDefault()
        const email = this.refs.email.value
        const password = this.refs.password.value
        this.props.signUp(email, password)
    }

    render() {
        return (
            <div>
                <h3>Please Sign Up!</h3>
                <form className="ui form" ref="login-form" onSubmit={this.handleSubmit.bind(this)} >
                    <div className="field">
                        <label>Enter email</label>
                        <input ref="email" placeholder="email" type="email" className="email" />
                    </div>
                    <div className="field">
                        <label>Enter Password</label>
                        <input ref="password" placeholder="password" type="password" className="password" />
                    </div>
                    <button type="submit" className="ui button">Submit</button>
                </ form >
            </div>
        )
    }
}

export default Signup
