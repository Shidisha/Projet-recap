import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Contact from './Contact'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' Component={Home}/>
        <Route path='/Contact' Component={Contact}/>
      </Switch>      
    </Router>
  )
}

export default App;