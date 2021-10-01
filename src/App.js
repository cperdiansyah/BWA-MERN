import LadingPage from 'Pages/LadingPage';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LadingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
