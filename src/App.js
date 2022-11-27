import styled from '@emotion/styled';
import './App.css';
import Header from './components/header';
import TodoAddForm from './components/todo-add-form';
import TodoList from './components/todo-list';
import ToolZone from './components/tool-zone';

function App() {
  return (
    <>
      <Header/>
      <BodyContainer>
        <TodoAddZoneContainer>
          <TodoAddForm/>
          <ToolZoneContainer>
            <ToolZone/>
          </ToolZoneContainer>
        </TodoAddZoneContainer>
        <TodoListContainer>
          <TodoList/>
        </TodoListContainer>
      </BodyContainer>
    </>
  );
}

const ToolZoneContainer = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const TodoAddZoneContainer = styled.div`
  width:50%;
  margin: 20px auto;
  @media (max-width:500px){
    width: 99%;
    margin: auto;
  }
`;

const BodyContainer = styled.div`
  margin-top: 80px;
`;

const TodoListContainer = styled.div`
  width:50%;
  margin: auto;
  @media (max-width:500px){
    width: 99%;
    margin: auto;
  }
`;

export default App;
