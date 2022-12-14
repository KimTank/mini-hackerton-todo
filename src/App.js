import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";
import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";
import { useEffect, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import EditItem from "./components/EditItem";

const Main = styled.main`
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    position: "absolute",
    top: "30%",
    left: "30%",
    right: "30%",
    bottom: "30%",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "10px",
  },
};

const ModalBtn = styled.button`
  width: 100%;
`;

function App() {
  const DOMAIN = 'http://138.2.113.146';
  // const DOMAIN = "http://localhost:80";
  const ENDPOINT = "todos";

  const [todoData, setTodoData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editIdx, setEditIdx] = useState(-1);

  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "black";
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    getTodoData();
  }, []);

  const getTodoData = () => {
    return fetch(DOMAIN + "/" + ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setTodoData(data);
      });
  };

  const addTodoData = (name, cont) => {
    const newTodoData = {
      name: name,
      cont: cont,
    };
    fetch(DOMAIN + "/" + ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodoData),
    }).then((res) => {
      if (res.status === 201) {
        getTodoData();
      }
    });
  };

  const deleteTodo = (uid) => {
    fetch(DOMAIN + "/" + ENDPOINT + `/${uid}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 202 || res.status === 204) {
        getTodoData();
      }
    });
  };

  const updateTodo = (item) => {
    fetch(DOMAIN + "/" + ENDPOINT + `/${item.uid}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((res) => {
      if (res.status === 200) {
        getTodoData();
        closeModal();
        return true;
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TODO 서버연동
        </p>
        <a
          className="App-link"
          href="https://kimtank.github.io"
          target="_blank"
          rel="kimtank blog"
        >
          welcome
        </a>
      </header>
      <Main>
        <AddItem addTodo={addTodoData} />
        <TodoList
          todoData={todoData}
          delTodo={deleteTodo}
          setEditIdx={setEditIdx}
          openModal={openModal}
        />
      </Main>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <h4 ref={(_subtitle) => (subtitle = _subtitle)}>수정</h4>
          <EditItem item={todoData[editIdx]} updateTodo={updateTodo}/>
          <ModalBtn onClick={closeModal}>닫기</ModalBtn>
        </Modal>
      </div>
    </div>
  );
}

export default App;
