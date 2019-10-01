import React from 'react';
import { TextField, Paper, Grid } from '@material-ui/core';

const InputTodo = ({inputText, onInputChange, onInputKeyPress}) => (
  <Paper style={{ margin: 16, padding: 16 }}>
    <Grid container>
      <Grid xs={12} md={12} item >
        <TextField
          placeholder="Add Todo here"
          value={inputText}
          onChange={onInputChange}
          onKeyPress={onInputKeyPress}
          fullWidth
        />
      </Grid>
    </Grid>
  </Paper>
);

export default InputTodo;