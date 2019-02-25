import React from 'react'
import {connect} from 'react-redux'
import {getTodosByCompleted} from '../actions'

class Home extends React.Component {
    componentDidMount() {
        this.props.dispatch(getTodosByCompleted(1))
    }

    render(){
        console.log('Completed Component');
        return (
            <div className="container">
                <ul className="collection with-header">
                <li className="collection-header"><h5>My Todos</h5></li>
                    {this.props.todos.map(todo => {
                        return (
                            <li className="collection-item">{todo.task}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Home)