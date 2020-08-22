import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
import Movie from './components/home/Movie';

import store from './store';

class App extends React.Component {

  render(){
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            <div className="footer">
              <Footer />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
