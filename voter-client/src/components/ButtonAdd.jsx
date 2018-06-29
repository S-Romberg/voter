import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { Fragment } from 'react';

class ButtonAdd extends Component {
  state = {}



  render() {
    return (
    <Fragment>
      <Button color='blue' onClick={this.props.addToBallot}>
        <span id={this.props.candId} name={this.props.office}>Add</span>
      </Button>
    </Fragment>
    )
  }
}



export default ButtonAdd