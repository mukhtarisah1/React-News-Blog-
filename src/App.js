
import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  const muri = 'welcome to react';
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
         
              <Route path="/create">
                <Create/>
              </Route>
          
              <Route path="/blogs/:id">
                <BlogDetails/>
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
