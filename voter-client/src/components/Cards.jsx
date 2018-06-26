import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

class Cards extends Component {

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  render() {
    return (
      <div className="card">
          <Card>
            <Image src={this.props.candidate.img} />
            <Card.Content>
              <Card.Header>{this.props.candidate.name}</Card.Header>
              <Card.Meta>
                <span className='party'>{this.capitalizeFirstLetter(this.props.candidate.party)}</span>
              </Card.Meta>
              <Card.Description>
                <ul>
                  <li>
                    {this.props.candidate.p1}
                  </li>
                  <li>
                    {this.props.candidate.p2}
                  </li>
                  <li>
                    {this.props.candidate.p3}
                  </li>
                </ul>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='linkify' />
                <a href={this.props.candidate.src}>Learn More</a>
              </a>
            </Card.Content>
          </Card>
      </div>
    );
  }
}

export default Cards;