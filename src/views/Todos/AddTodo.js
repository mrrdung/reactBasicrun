import React from "react";
import { toast } from 'react-toastify';
class AddTodo extends React.Component {

    state = {
        title: ''
    }
    handleChangTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleClickTodo = (event) => {
        if (!this.state.title) {
            alert('hay fien du tt')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title
        }
        this.props.addNewTodo(todo);

        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state
        return (

            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => {
                        this.handleChangTitle(event)
                    }} />
                <button type="button" onClick={() => this.handleClickTodo()}>Add</button>
            </div>
        )
    }
} export default AddTodo;
