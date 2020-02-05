import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/skills' component={Skills} />
    </Switch>
)