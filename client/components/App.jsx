import React from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom' 

import Home from '../components/Home'
import Completed from '../components/Completed'
import Priority from '../components/Priority'
import Category from '../components/Category'
import Nav from '../components/Nav'


class App extends React.Component {
    

    render(){
        return (
            <Router>
                <div className="container">
                    <h1 className="center teal-text text-lighten-2">Welcome to my Todos:</h1>
                    <br />
                    <Route exact path='/' component={Home} />
                    <Route path='/completed' component={Completed} />
                    <Route path='/priority/:priority' component={Priority} />
                    <Route path='/category/:category' component={Category} />
                    <Route path='/' component={Nav} />
                </div>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps)(App)