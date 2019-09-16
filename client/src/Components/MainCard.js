import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const MainCard = props => (
  <Card>
    <Card.Content>
      <Card.Header>{props.playerState.name}</Card.Header>
      <Card.Meta>
        <span>{props.playerState.country}</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="www.github.com">
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);

export default MainCard;
