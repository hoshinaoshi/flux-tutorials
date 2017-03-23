import dispatcher from "./dispatcher";

export function addTodo(text) {
  // ディスパッチャーを呼びます。
  dispatcher.dispatch({type:"CREATE_TODO", text});
}
