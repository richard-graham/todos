import React from 'react'
import {connect} from 'react-redux'
import {getTodosByCategory} from '../actions'

class Category extends React.Component {
    componentDidMount() {
        this.props.dispatch(getTodosByCategory(this.props.match.params.category))
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.category !== nextProps.match.params.category) {
            this.props.dispatch(getTodosByCategory(nextProps.match.params.category))
        }
    }

    render(){
        return (
            <React.Fragment>
                <ul className="collection with-header">
                <li className="collection-header"><h5>My Completed Todos</h5></li>
                    {this.props.todos.map(todo => {
                        return (
                            <li className="collection-item">{todo.task}</li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Category)