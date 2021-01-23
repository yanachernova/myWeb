import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Navbar from './components/Navbar'
import SideBar from './components/SideBar';
import CssLayout from './views/CssLayout';
import GithubLyout from './views/GithubLyout';
import HtmlLayout from './views/HtmlLayout';
import JsLayout from './views/JsLayout';
import MainLayout from './views/MainLayout'

export const AppRouter = () => {
    const [changeSideBar, setChangeSideBar] = useState(false)
    console.log(changeSideBar)
    return (
        <Router>
            <div className="wrapper">
                <SideBar changeSideBar={changeSideBar} setChangeSideBar={setChangeSideBar}/>
                <div id="content">
                    <Navbar changeSideBar={changeSideBar} setChangeSideBar={setChangeSideBar}/>
                    <div className="container-fluid">
                        <Switch>
                            <Route exact path="/" component={MainLayout} />
                            <Route exact path="/html" component={HtmlLayout} />
                            <Route exact path="/css" component={CssLayout} />
                            <Route exact path="/js" component={JsLayout} />
                            <Route exact path="/github" component={GithubLyout} />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}
