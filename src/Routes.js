import { Box, Nav, Text } from 'grommet'
import { Home } from 'grommet-icons'
import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import HomeScreen from './screens/Home/HomeScreen'
import Navigator from './screens/Navigator/Navigator'

const Router = () => {
    return (
        <BrowserRouter>
            <Nav direction="row" background="navbar" pad="xsmall">
                <Link to="/" style={{ textDecoration: 'none'}}>
                    <Box direction="row-responsive" align="center">
                        <Home size="large" color="#fff" />
                        <Text margin={{ horizontal: "medium"}} color="#fff" size="xxlarge">Thibaud Laguérie</Text>
                    </Box>
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