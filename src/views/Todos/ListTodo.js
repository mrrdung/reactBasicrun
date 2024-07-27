import React from "react";
import './Todo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: "job1", title: 'dev', salary: '800' },
            { id: "job2", title: 'tester', salary: '600' },
            { id: "job3", title: 'manager', salary: '900' }
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        let curentListTodos = this.state.listTodos;
        curentListTodos.push(todo)
        toast.success('thanhf coong')
        this.setState({
            // listTodos: [...this.state.listTodos, todo],
            listTodos: curentListTodos
        })

    }
    handleDeleteTodo = (todo) => {
        let curentTodos = this.state.listTodos;
        curentTodos = curentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: curentTodos
        })
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmpty = Object.keys(editTodo).length === 0 && editTodo.constructor === Object;

        if (isEmpty === false && editTodo.id === todo.id) {

            let listTodosCoppy = [...listTodos];
            let objIndex = listTodosCoppy.findIndex(item => item.id == todo.id);


            listTodosCoppy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCoppy,
                editTodo: {}
            })
            return;
        }




        this.setState({
            editTodo: todo
        })
    }
    handleOnchangeEditTodo = (event) => {
        let editTodoCoppy = { ...this.state.editTodo }
        editTodoCoppy.title = event.target.value;
        this.setState({
            editTodo: editTodoCoppy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state
        let isEmpty = Object.keys(editTodo).length === 0 && editTodo.constructor === Object;
        console.log('check empty obj', isEmpty);
        return (
            <>
                <p>
                    Hellowork
                </p>
                <div className="list-todo-contain">
                    <AddTodo
                        addNewTodo={this.addNewTodo} />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 && listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmpty === true ? <span>{index + 1}- {item.title}</span>

                                        :
                                        <>{item.id === editTodo.id ?
                                            <span>
                                                {index + 1}<input value={editTodo.title}
                                                    onChange={(event) => this.handleOnchangeEditTodo(event)} />
                                            </span>
                                            :
                                            <span>{item.title}</span>
                                        }

                                        </>

                                    }
                                    <button className="button"
                                        onClick={() => this.handleEditTodo(item)}>
                                        {isEmpty === false && item.id === editTodo.id ? 'Save' : 'Edit'}
                                    </button>

                                    <button className="button"
                                        onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                </div>)
                        })}



                    </div>
                </div>
            </>

        )
    }
} export default ListTodo;