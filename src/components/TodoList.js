import React, { Component } from 'react';
import Todo from './Todo';
import { todos } from './todosData';
import '../assets/style/TodoList.css';
import TodoForm from './TodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: todos,
        }
    }

    addTodo = (newTodo) => {
        this.setState({todos: [...this.state.todos, newTodo]})
        console.log(this.state.todos)
    }

    markTodo = () => {
        this.setState({isChecked: true})
        console.log(this.state.isChecked)
    }

    deleteTodo = (id) => {
        this.setState({todos: this.state.todos.filter((todo) => todo.id !== id)})
    }

    editTodo = (id, updatedItem) => {
        console.log('editing')
        const updatedTodos = this.state.todos.map((todo) => {
            if(todo.id === id) {
                return {...todo, item: updatedItem}
            } return todo
        })
        this.setState({todos: updatedTodos})
    }

    

    render() {

        const todoList = this.state.todos.map((todo) => (
            <Todo key = {todo.id}
                  markTodo = {() => this.markTodo()}  
                  editTodo = {() => this.editTodo()}
                  item = {todo.todo}
                  deleteTodo = {() => this.deleteTodo(todo.id)} />
        ))
           
        return (
            <div className="todo-list__container">
                <TodoForm addTodo={this.addTodo}/>
                <div className="todo-list__wrapper">
                    {todoList}
                </div>
            </div>
        )
    }
}



export default TodoList
