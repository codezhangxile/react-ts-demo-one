import {BrowserRouter as Router, Link,Switch, Route, useParams, useRouteMatch} from 'react-router-dom'
import  React from 'react'
import Home from '../views/home'

import './index.scss'
class Routers extends  React.Component<any, any>{
    render() {
        return (
            <Router>
                <div className={'head-bar'}>
                    <p>study list</p>
                    <Link to='/home'>home</Link>
                    <Link to='/router'>router</Link>
                </div>


                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/router' component={ReactRouter}/>
                </Switch>
            </Router>);
    }
}

export  default  Routers;

function ReactRouter(){
    let { path, url } = useRouteMatch();

    return (
        <div>
            <ul>
                <li>
                    <Link to={`${url}/rendering`}>路由提交</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let {topicId}  = useParams();

    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}