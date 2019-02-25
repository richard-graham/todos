import React from 'react'
import {connect} from 'react-redux'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'grapefruit'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange() {
        this.setState({value: event.target.value});
    }

    handleSubmit() {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        console.log(this.props) 
        return (
            <React.Fragment>
                <br/>
                <a href="/#/"><button type="button">Home</button></a>
                <br/><br/>
                <a href="/#/completed"><button type="button">Completed</button></a>

                <p>Search By Priority:</p>
                <a href="/#/priority/1"><button type="button">1</button></a>
                <a href="/#/priority/2"><button type="button">2</button></a>
                <a href="/#/priority/3"><button type="button">3</button></a>
                <a href="/#/priority/4"><button type="button">4</button></a>
                <a href="/#/priority/5"><button type="button">5</button></a>
                <br/>
                <p>Search By Category</p>
                <a href="/#/category/home"><button type="button">Home</button></a>
                <a href="/#/category/work"><button type="button">Work</button></a>
                <a href="/#/category/leisure"><button type="button">Leisure</button></a>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Nav)