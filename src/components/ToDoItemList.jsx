import React from 'react';
import ToDoItem from 'components/ToDoItem';
import PropTypes from 'prop-types';

function ToDoItemList({ title, todoList, setTodoList, checkedList }) {
  return (
    <div className="todoapp__list">
      <p className="todoapp__list-tit">{title}</p>
      <ul className="todoapp_list-ul">
        {todoList &&
          todoList.map(todoItem => {
            if (todoItem.deleted) return null;
            if (checkedList !== todoItem.checked) return null;
            return (
              <ToDoItem
                key={todoItem.id}
                todoItem={todoItem}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            );
          })}
      </ul>
    </div>
  );
}

ToDoItemList.prototype = {
  title: PropTypes.string.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  setTodoList: PropTypes.func.isRequired,
  checkedList: PropTypes.bool.isRequired,
};

export default ToDoItemList;
