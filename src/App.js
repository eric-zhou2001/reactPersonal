import React, {Component} from 'react';
import Searchbar from "./components/Searchbar";

class App extends React.Component {
  render = () => {
    return (
      <Searchbar dropdown={false} />
    )
  }
}

export default App;
