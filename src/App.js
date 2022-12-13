import logo from "./logo.svg";
import styled from "styled-components";
import {v4 as uuidv4} from "uuid";
import "./App.css";
import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";

const Main = styled.main`
  background-color: #227C70;
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const dummy = [
  {uid: uuidv4(), name: '김홍시', cont: '막내, 바보고양이, 많이 많음, 간혹 천재로 의심'},
  {uid: uuidv4(), name: '김깜시', cont: '둘째, 천재고양이, 과묵함, 머리가 좋아서 쫄보임'},
  {uid: uuidv4(), name: '김첫째', cont: '법률적으로는 사람, 하는짓보면 두발달린 짐승'}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Main>
        <TodoList data={dummy}/>
        <AddItem></AddItem>
      </Main>
    </div>
  );
}

export default App;
