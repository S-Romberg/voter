import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { Fragment } from 'react';

class ButtonRemove extends Component {
  state = {}



  render() {
    return (
    <Fragment>
      <Button color='red'>
        <span>Remove</span>
        <Icon name='close' size='big' className='icon'></Icon>
      </Button>
    </Fragment>
    )
  }
}



export default ButtonRemove