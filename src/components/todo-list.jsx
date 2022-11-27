import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import Todo from "./todo";

export default function TodoList(){

    const todosSinCompletar = useSelector((state) => state.todoList.todos).filter((todo)=> todo.completado !== true);

    const todosCompletados = useSelector((state) => state.todoList.todos).filter((todo)=> todo.completado === true);;

    const SpaceBetweenCards= styled.div`
        margin: 10px 0px;
    `

    const SpaceBetweenCardsInactivo= styled.div`
        opacity: .5;
    `

    return(
        <>
            <h1>Todos</h1>
            {todosSinCompletar.map((todo, i)=>{
                return(
                    <SpaceBetweenCards key={i}>
                        <Todo todo={todo} style={{marginBottom: '5px'}} />
                    </SpaceBetweenCards>
                )
            })}
            {
                todosCompletados.length > 0 ? <h1>Completados</h1> : null
            }
            {todosCompletados.map((todo, i)=>{
            return(
                <SpaceBetweenCardsInactivo key={i}>
                    <Todo todo={todo} />
                </SpaceBetweenCardsInactivo>
            )
            })}
        </>
    )
}