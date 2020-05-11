import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        isLoaded: false,
        beerList: {}
    };
  }
    

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
        .then(res => res.json())
        .then((beerList) => { 
          this.setState({
            isLoaded: true,
            beerList: beerList
            // I am not a huge fan of the.. if names match, then drop the double reference
          });
        })
        .then(console.log(this.state.beerList))
        .catch(error => console.log('FETCH ERROR', error))
    }
  

  render() {
    const { isLoaded } = this.state;
    
    if (!isLoaded) { 
      return <div>Loading, Please Wait...</div>;
    } 
    else { return (
        <div class='container'>
          <header className="App-header">Justin Essler - Beer API </header>
          <ul>{this.state.beerList.map((beerList, index) => 
            <li key={index}>
              <img alt="beer_image" src={beerList.image_url}></img>
              <p>{beerList.name}</p>
              <p>{beerList.tagline}</p> 
            </li>)}
          </ul>
        </div>
      );
    }
  }


}

export default App;
