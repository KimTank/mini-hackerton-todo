import TodoItem from "./TodoItem";
import styled from "styled-components";

const List = styled.ul`
  background-color: #88a47c;
  height: 50%;
  width: 50%;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const TodoList = ({ todoData, delTodo, openModal, setEditIdx }) => {
  return (
    <>
      <List>
        {todoData.map((item, idx) => (
          <TodoItem
            item={item}
            key={item.uid}
            delTodo={delTodo}
            openModal={openModal}
            setEditIdx={setEditIdx}
            idx={idx}
          />
        ))}
      </List>
    </>
  );
};

export default TodoList;
