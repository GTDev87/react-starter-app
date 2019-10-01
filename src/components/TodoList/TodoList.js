import React from 'react';
import { List, Paper } from '@material-ui/core';

import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({items, toggleTodo}) => (
    <>
        {items.length &&
            <Paper style={{ margin: 16 }}>
                <List>
                    {items.map((todo) => (
                        <TodoItem
                            item={todo}
                            key={`TodoItem.${todo.id}`}
                            onCheck={() => {
                                toggleTodo(todo.id)}
                            }
                        />
                    ))}
                </List>
            </Paper>
        }
    </>
);

export default TodoList