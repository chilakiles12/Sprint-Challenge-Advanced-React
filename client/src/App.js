import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      players: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            players: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, players } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {players.map(player => (
            <div key={player.id}>
              <h2>{player.name}</h2>
              <h2>{player.id}</h2>
              <h2>{player.country}</h2>
              <h2>{player.searches}</h2>
            </div>
          ))}
        </div>
      );
    }
  }
}
export default App;
