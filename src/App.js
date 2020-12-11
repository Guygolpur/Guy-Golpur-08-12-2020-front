import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import HomePage from './screens/HomePage'
import EmailListPage from './screens/EmailListPage'
import EmailPage from './screens/EmailPage'
import SentEmailPage from './screens/SentEmailPage'
import NavBar from './NavBar'
import PageNotFound from './screens/PageNotFound'
import SentEmailList from './components/SentEmailList'
import ComposeEmailForm from './components/ComposeEmailForm'
import './App.css'

const accountEmailAddress = "guygolpur@gmail.com"


function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ width: '100%', height: '100%', display: 'flex' }}>
          <div style={{ width: '15%', height: '100%', display: 'flex' }}>
            <NavBar accountEmailAddress={accountEmailAddress} />
          </div>
          <div style={{ width: '75%', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/email-list" render={(props) => <EmailListPage {...props} accountEmailAddress={accountEmailAddress} />} />
              <Route path="/email/:senderEmailId/:accountEmailAddress" component={EmailPage} />
              <Route path="/sent-email-list" render={(props) => <SentEmailList {...props} accountEmailAddress={accountEmailAddress} />} />
              <Route path="/single-email-sent/:senderEmailId/:accountEmailAddress" component={SentEmailPage} />
              <Route path="/composeNewEmail" render={(props) => <ComposeEmailForm {...props} accountEmailAddress={accountEmailAddress} />} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
