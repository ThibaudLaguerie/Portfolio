import { Nav } from 'grommet'
import { Home } from 'grommet-icons'
import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import HomeScreen from './screens/Home/HomeScreen'
import Navigator from './screens/Navigator/Navigator'

const Router = () => {
    return (
        <BrowserRouter>
            <Nav direction="row" background="navbar" pad="xsmall">
                <Link to="/">
                    <Home size="large" color="#fff" />
                </Link>
            </Nav>
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path="/:page" render={(props) => <Navigator {...props} />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router