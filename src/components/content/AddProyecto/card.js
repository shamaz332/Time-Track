import React, { Component } from 'react';
import { Card, Image, Button, Input } from 'semantic-ui-react'

class Cardd extends Component {
  render() {
    const cardOne = this.props.data.map(data => {
      return (
        <div key={data.id}>
          <Card>
            <Card.Content>
              <Button floated='left' icon='chevron left' size='mini' onClick={this.props.handleMove.bind(this, data.id)}>
              </Button>
              <Image
                floated='right'
                size='mini'
                src={data.image}
              />
              <Card.Header>{data.name}</Card.Header>
              <Card.Meta>{data.metaname}</Card.Meta>

            </Card.Content>

          </Card>
        </div>
      )
    })

    return (
      <div >
        <div style={{ width: '100%', borderRadius: "30%", paddingBottom: '5%', paddingTop: '10%' }} >
          <Input
            icon={{ name: 'search', circular: true, link: true }} />
        </div>
        {cardOne}


      </div>

    );
  }
}

export default Cardd;