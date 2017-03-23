import { EventEmitter } from 'events';
import dispatcher from './dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 10,
        text: 'Go Shopping',
        complete: false
      },
      {
        id: 20,
        text: 'Pay Bills',
        complete: false
      }
    ];
  }
  addTodo(text){
    const id = Date.now();
    this.todos.push({
      id,
      text,
      complete: false
    })
    this.emit("change")
  }
  getAll(){
    return this.todos;
  }
  handleActions(action){
    console.log("TodoStore received an action", action);
    switch(action.type){
      case "CREATE_TODO": {this.addTodo(action.text)}
    }
  }
}
const todoStore = new TodoStore;
window.td = todoStore; 
dispatcher.register(todoStore.handleActions.bind(todoStore))
window.dp = dispatcher

export default todoStore;
