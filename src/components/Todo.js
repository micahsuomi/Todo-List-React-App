import React, {Component} from 'react';
import './../assets/style/Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
                item: this.props.item,
                isEditing: false,
                isChecked: false
        }

      
    }
    checkTodo = () => {
        this.setState({isChecked: !this.state.isChecked})
    }

    editTodo = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({isEditing: false})
        console.log(this.state.item)
        const updatedItem = this.state.idem;
        this.props.editTodo(this.props.id, updatedItem)


    }

    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState({ [name]: value})
        console.log(value)
    }

    render() {
        if (this.state.isEditing) {
            return (
                <div className="todo-container">
                    <form onSubmit={this.handleSubmit} className="edit-form">
                    <input type="text"
                    value={this.state.item}
                    name="item"
                    onChange={this.handleChange}/>
                    <button className="btn-save">Save</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="todo-container"> 
                    <div className="todo-wrapper">
                        <input type="checkbox" name="checkbox" className="checkbox" onClick={this.checkTodo}/>
                        <p className="todo" style={this.state.isChecked ? styleChecked : styleUnchecked}>{this.state.item}</p>
                        <button className="edit-todo__btn" onClick={this.editTodo}><i className="fas fa-pen"></i></button>
                        <button className="delete-todo__btn" onClick={this.props.deleteTodo}><i className="fas fa-trash"></i></button>
                    </div>      
                </div>
                )
        }
    
    }

    
}


const styleChecked = {textDecoration: 'line-through'};
const styleUnchecked = {textDecoration: 'none'};

export default Todo;
