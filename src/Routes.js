import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Tv from './Pages/Tv'
import Latest from './Pages/Latest'
import Film from './Pages/Film'
import Detail from './Pages/Detail'

const Routes = () => (
	<main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/tv' component={Tv}/>
            <Route exact path='/film' component={Film}/>
            <Route exact path='/latest' component={Latest}/>
            <Route path='/detail/:id' component={Detail}/>
        </Switch>
	</main>
);
export default Routes
