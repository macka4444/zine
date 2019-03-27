import React, { Component } from 'react';
import Contents from "./Contents.js"
import PageBrowser from "./PageBrowser.js"

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Contents/>
        <PageBrowser/>
      </div>
    );
  }
}

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
  }
}

export default App;