import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App/>,document.getElementById('root'));
ReactDOM.render((
  <Router history = {browserHistory}>
     <Route path = "/" component = {App}>
        <IndexRoute component = {Home} />
        <Route path = "home" component = {Home} />
        <Route path = "about" component = {About} />
        <Route path = "contact" component = {Contact} />
     </Route>
  </Router>
), document.getElementById('app'))