import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //import react-router-dom เพื่อใช้Router
import Home from "./page/Home";
import UserProfile from "./page/UserProfile";
const App = () => {
  return (
    <div>
        <Router>
            <Switch>

                <Route exact path="/" component={Home} />  
                <Route exact path="/UserProfile/:id" component={UserProfile} />
                </Switch>
        </Router>

    </div>
  )
}

export default App
