import React from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom' 

import Home from '../components/Home'
import Completed from '../components/Completed'
import Priority from '../components/Priority'


class App extends React.Component {
    

    render(){
        return (
            <Router>
                <div>
                    <h1 className="center blue-text">Welcome to my Todos:</h1>

                    <Route exact path='/' component={Home} />
                    <Route path='/completed' component={Completed} />
                    <Route path='/priority/:priority' component={Priority} />
                </div>
            </Router>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         todos: state.todos
//     }
// }

export default connect()(App)