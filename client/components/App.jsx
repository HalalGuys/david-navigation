import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Homepage.jsx'
import SearchList from './SearchList.jsx'
import Listing from './Listing.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {history: this.props.history}
  }

  // pushHistory (val) {
  //   console.log('parent');
  //   let {history} = this.state;
  //   this.setState({history: history.location.push(val)});
  // }

  render() {
    console.log('rerender');
    return (
      <Router>
        {/* change this to css module id */}
        <div id='app'>
          {/* <Route 
            exact path="/" 
            render={(props) => <Home {...props} pushHistory={this.pushHistory} />}
          /> */}
          <Route exact path="/" component={Home} />
          <Route path="/list/:id" component={SearchList} />
          <Route path="/listing/:id" component={Listing} />
        </div>
      </Router>
    );
  }
};

export default App