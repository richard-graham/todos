import React from 'react'
import {connect} from 'react-redux'
import {getTodos} from '../actions'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.props.dispatch(getTodos())
    }



    render(){
        return (
            <React.Fragment>
                <table className="striped">
                    <thead>
                        <tr>
                            <th className="centered">Completed</th>
                            <th>Priority</th>
                            <th>Category</th>
                            <th>Task</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.todos.map(todo => {
                            return (
                                <tr>
                                    <td className="centered">
                                        <form action="#">
                                            <p>
                                                <label>
                                                    <input type="checkbox" checked={todo.is_complete} onChange={(e, checked) => {this.handleInputChange(checked)}} />
                                                    <span></span>
                                                </label>
                                            </p>
                                        </form>
                                        </td>
                                    <td>{todo.priority}</td>
                                    <td>{todo.category}</td>
                                    <td>{todo.task}</td>
                                    <td>{todo.due_at}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Home)