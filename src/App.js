import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import HomePage from './screens/HomePage'
import AboutPage from './screens/AboutPage'
import EmailList from './screens/EmailList'
import EmailPage from './screens/EmailPage'
import NavBar from './NavBar'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body"></div>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/email-list" component={EmailList} />
        <Route path="/email/:emailAddress" component={EmailPage} />
      </div>
    </Router>
  );
}

export default App;
