import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { Fragment } from 'react';

class ButtonAdd extends Component {
  state = {}



  render() {
    return (
    <Fragment>
      <Button color='blue' >
        <span>Add</span>
        <Icon name='checkmark' size='big' className='icon'></Icon>
      </Button>
    </Fragment>
    )
  }
}



export default ButtonAdd