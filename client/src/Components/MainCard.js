import React from 'react';
import { Card } from 'semantic-ui-react';

const MainCard = props => (
  <Card>
    <Card.Content>
      <Card.Header>{props.player.name}</Card.Header>
      <Card.Meta>
        <span>{props.player.country}</span>
      </Card.Meta>
      <Card.Description>
        Google Searches: {props.player.searches}
      </Card.Description>
    </Card.Content>
  </Card>
);

export default MainCard;
