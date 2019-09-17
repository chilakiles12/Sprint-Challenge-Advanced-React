import React from 'react';
import MainCard from './MainCard';

const CardList = props => {
  return (
    <div className="grid-view">
      {props.players.map(player => (
        <MainCard key={player.id} player={player} />
      ))}
    </div>
  );
};

export default CardList;
