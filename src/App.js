import styled from '@emotion/styled';
import './App.css';
import Header from './components/header';
import TodoAddForm from './components/todo-add-form';
import TodoList from './components/todo-list';

function App() {
  return (
    <>
      <Header/>
      <BodyContainer>
        <TodoAddZoneContainer>
          <TodoAddForm/>
        </TodoAddZoneContainer>
        <TodoListContainer>
          <TodoList/>
        </TodoListContainer>
      </BodyContainer>
    </>
  );
}

const TodoAddZoneContainer = styled.div`
  display: flex;
  justify-content: center;
  width:50%;
  margin: 20px auto;
`;

const BodyContainer = styled.div`
  margin-top: 80px;
`;

const TodoListContainer = styled.div`
  width:50%;
  margin: auto;
`;

export default App;
