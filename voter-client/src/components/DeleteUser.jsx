import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'

class DeleteUser extends Component {
    render() {
        return (
            <div>
                 <Button negative>Delete My Account</Button>
            </div>
        );
    }
}

export default DeleteUser;