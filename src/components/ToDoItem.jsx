import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ToDoItem({ todoItem, todoList, setTodoList }) {
  const [edited, setEdited] = useState(false);
  // const [newText, setNewText] = useState(todoItem.text);
  let editButton;

  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map(item => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));
    setTodoList(nextTodoList);
  };

  const onClickEditButton = () => {
    setEdited(true);
  };

  // editButton
  if (!todoItem.checked) {
    if (!edited) {
      editButton = (
        <button
          type="button"
          className="todoapp__item-edit-btn"
          onClick={onClickEditButton}
        >
          ✏
        </button>
      );
    } else {
      editButton = (
        <button type="button" className="todoapp__item-edit-btn">
          👌
        </button>
      );
    }
  } else {
    editButton = null;
  }

  return (
    <li className="todoapp__item">
      <input
        type="checkbox"
        className="todoapp__item-checkbox"
        checked={todoItem.checked}
        onChange={onChangeCheckbox}
      />
      <span
        className={`${
          todoItem.checked ? 'todoapp__item-ctx-checked' : 'todoapp__item-ctx'
        }`}
      >
        {todoItem.text}
      </span>
      {editButton}
      <button type="button" className="todoapp__item-delete-btn">
        🗑
      </button>
    </li>
  );
}

ToDoItem.prototype = {
  todoItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }),
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  setTodoList: PropTypes.func.isRequired,
};

export default ToDoItem;
