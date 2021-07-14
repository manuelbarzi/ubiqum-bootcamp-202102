import Landing from './screen/Landing'
import Cities from './screen/Cities'
import CreateAccount from './screen/CreateAccount'
import { BrowserRouter, Route, } from 'react-router-dom'

function App(props) {
  return (
    <BrowserRouter>
      <Route title='linkCreateAccountPage' exact path='/createAccount' component={CreateAccount}/>
      <Route title='linkLandingPage' exact path='/' component={Landing} />
      <Route title='linkCitiesPage' exact path='/cities' component={Cities} />
    </BrowserRouter>
  );
}

export default App;
