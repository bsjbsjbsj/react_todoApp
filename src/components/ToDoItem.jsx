import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function ToDoItem({ todoItem, todoList, setTodoList }) {
  const [edited, setEdited] = useState(false);
  const [newText, setNewText] = useState(todoItem.text);
  const onChangeInput = e => setNewText(e.target.value);
  const editInputRef = useRef(null);
  let editButton;

  useEffect(() => {
    if (edited) {
      editInputRef.current.focus();
    }
  }, [edited]);

  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map(item => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));
    setTodoList(nextTodoList);
  };

  const onClickEditButton = () => {
    if (!edited) {
      setEdited(true);
    } else {
      const nextTodoList = todoList.map(item => ({
        ...item,
        text: item.id === todoItem.id ? newText : item.text,
      }));
      console.log(todoItem.id);
      setTodoList(nextTodoList);
      setEdited(false);
    }
  };

  const onClickDeleteButton = () => {
    if (window.confirm('정말로 지우실건가요?')) {
      const nextTodoList = todoList.map(item => ({
        ...item,
        deleted: item.id === todoItem.id ? true : item.deleted,
      }));
      setTodoList(nextTodoList);
    }
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
        <button
          type="button"
          className="todoapp__item-edit-btn"
          onClick={onClickEditButton}
        >
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
        {!edited ? (
          todoItem.text
        ) : (
          <input
            type="text"
            value={newText}
            onChange={onChangeInput}
            ref={editInputRef}
          />
        )}
      </span>

      {editButton}

      <button
        type="button"
        className="todoapp__item-delete-btn"
        onClick={onClickDeleteButton}
      >
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
