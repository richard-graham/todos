import React from 'react'
import {connect} from 'react-redux'
import {getTodosByPriority} from '../actions'

class Priority extends React.Component {
    componentDidMount() {
        this.props.dispatch(getTodosByPriority(this.props.match.params.priority))
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.priority !== nextProps.match.params.priority) {
            this.props.dispatch(getTodosByPriority(nextProps.match.params.priority))
        }
    }

    render(){
        return (
            <React.Fragment>
                <ul className="collection with-header">
                <li className="collection-header"><h5>My Todos</h5></li>
                    {this.props.todos.map(todo => {
                        return (
                            <li className="collection-item">{todo.task}</li>
                        )
                    })}
                </ul>
            </React.Fragment    >
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Priority)