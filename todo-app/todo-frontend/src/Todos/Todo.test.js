import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

test('renders content', () => {
  const todo = {
    text: 'This is a todo',
    done: false,
  };

  render(<Todo todo={todo} />);

  const todoText = screen.getByText(todo.text);
  expect(todoText).toBeInTheDocument();

  const todoDone = screen.getByText('This todo is not done');
  expect(todoDone).toBeInTheDocument();
});
