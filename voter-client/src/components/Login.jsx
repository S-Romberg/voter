import React from 'react'

class Login extends React.Component {

    handleSubmit(e) {
        e.preventDefault()
        const email = this.refs.email.value
        const password = this.refs.password.value
        this.props.login(email, password)
    }

    render() {
        return (
            <div className='loginForm'>
                <form className="ui form" ref="login-form" onSubmit={this.handleSubmit.bind(this)} >
                    <div className="field">
                        <label>Enter email</label>
                        <input ref="email" placeholder="email" type="text" className="email" />
                    </div>
                    <div className="field">
                        <label>Enter Password</label>
                        <input ref="password" placeholder="password" type="password" className="password" />
                    </div>
                    <button type="submit" className="ui button">Submit</button>
                </ form >
                <br /><hr /><br />
                <a href="/signup"><button className="ui button">Sign Up</button></a>
            </div>
        )
    }

}

export default Login
