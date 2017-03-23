import React from 'react';
import Todo from "./Todo";
import TodoStore from "./TodoStore";
import * as TodoAction from "./TodoAction";

export default class Page1 extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll(), // Todoリストをロードします。
        };
    }
    componentWillMount(){
      TodoStore.on('change',() => {
        this.setState({
          todos: TodoStore.getAll()
        })
      })
    }
    addTodo(){
      TodoAction.addTodo("New Task!")
    }

    render () {
        const {todos} = this.state;
        // mapで Todoエレメントを動的に作成。
        const todoList = todos.map((todo) => {
            return <Todo key={todo.id} {...todo}/>; // text={todo.text} complete={todo.complete}
        });

        return (
            <div>
                <button onClick={this.addTodo.bind(this)}>Add!</button>
                <h3>My Todo List</h3>
                <ul>{todoList}</ul>
            </div>
        );
    }
}
