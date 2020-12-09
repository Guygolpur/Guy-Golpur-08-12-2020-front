import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import HomePage from './screens/HomePage'
import EmailListPage from './screens/EmailListPage'
import EmailPage from './screens/EmailPage'
import NavBar from './NavBar'
import PageNotFound from './screens/PageNotFound'
import SentEmailList from './components/SentEmailList'
import ComposeEmailForm from './components/ComposeEmailForm'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body"></div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/email-list" component={EmailListPage} />
          <Route path="/email/:senderEmailId" component={EmailPage} />
          <Route path="/sent-email-list" component={SentEmailList} />
          <Route path="/composeNewEmail" component={ComposeEmailForm}/>
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
