import React, { useState } from 'react';
import InputBox from 'components/InputBox';
import ToDoItemList from 'components/ToDoItemList';

function HomePage() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="homepage__container">
      <InputBox todoList={todoList} setTodoList={setTodoList} />
      <ToDoItemList
        title="할 일"
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={false}
      />
      <ToDoItemList
        title="완료한 항목"
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList
      />
    </div>
  );
}

export default HomePage;
