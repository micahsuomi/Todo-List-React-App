import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../assets/style/TodoForm.css';

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
                        todo: {
                            todo: ''
                        }
                    }
 
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset()
        const newTodo = {id: uuidv4(), ...this.state.todo};
        this.props.addTodo(newTodo);
        console.log(newTodo)
            
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        let todo = {...this.state.todo, [name]: value};
        this.setState({todo});

    }

    render() {
        let {todo} = this.state.todo
        return (
            <div className="todo-form__container">
                <form onSubmit={this.handleSubmit}>
                    <div className="search-container">
                    <input type="text" 
                    value={todo}
                    name="todo"
                    placeholder="Add Todo"
                    onChange={this.handleChange} />
                    <button className="add-todo" onClick={()=> this.addTodo}>
                        Add Todo
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm
