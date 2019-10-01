import React, {useState} from 'react';
import { Paper, AppBar } from '@material-ui/core';
import InputTodo from '../InputTodo/InputTodo';
import TodoList from '../TodoList/TodoList';

/*
  Welcome developer! Please fully customize this component as needed.
*/

const INITIAL_TODOS = [];
const INITIAL_ID = 0;

/* todo: {id: string, text: string, checked: boolean} */



const INITIAL_TEXT = '';

const MyComponent = () => {
  const [inputText, setInputText] = useState(INITIAL_TEXT);
  const [todoId, setTodoId] = useState(INITIAL_ID);
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const addTodo = (newTodoText) => {
    const newTodoList = todos.concat([{id: todoId, text: newTodoText, checked: false}]);
    setTodos(newTodoList);
    setTodoId(todoId + 1);
    return newTodoList;
  };

  const toggleTodo = (id) => {
    const newTodoList = todos.map((todo) => (todo.id === id) ? ({...todo, checked: !todo.checked}) : todo);
    setTodos(newTodoList);
    return newTodoList;
  };

  return (
    <Paper>
      <AppBar>
        <InputTodo
          inputText={inputText}
          onInputChange={e => setInputText(e.target.value)}
          onInputKeyPress={(e) => {
            if (e.which === 13 || e.keyCode === 13) {
              addTodo(inputText);
              setInputText(INITIAL_TEXT);
              return true;
            }
      
            return false;
          }}
        />
        <TodoList items={todos} toggleTodo={toggleTodo}/>
      </AppBar>
    </Paper>
  );
};

export default MyComponent
