import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import HomePage from './screens/HomePage'
import AboutPage from './screens/AboutPage'
import EmailListPage from './screens/EmailListPage'
import EmailPage from './screens/EmailPage'
import NavBar from './NavBar'
import PageNotFound from './screens/PageNotFound'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body"></div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/email-list" component={EmailListPage} />
          <Route path="/email/:senderEmailId" component={EmailPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
