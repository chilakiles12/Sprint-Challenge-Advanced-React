import React from 'react';

import CardList from './Components/CardList';
import NavBar from './Components/NavBar';

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
            players: result
          });
        },

        error => {
          console.log(error);
        }
      );
  }

  render() {
    return (
      <div>
        <NavBar />
        <CardList players={this.state.players} className="grid-view" />
      </div>
    );
  }
}
export default App;
