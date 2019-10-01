import React from 'react';
import { ListItem, Checkbox, ListItemText } from '@material-ui/core';

const TodoItem = ({item, onCheck}) => {
    const {text, checked} = item;
    return (
        <ListItem>
            <Checkbox
                onClick={onCheck}
                checked={checked}
                disableRipple
            />
            <ListItemText style={{ textDecoration: checked ? 'line-through' : 'none' }}>
                {text}
            </ListItemText>
        </ListItem>
    );
};

export default TodoItem