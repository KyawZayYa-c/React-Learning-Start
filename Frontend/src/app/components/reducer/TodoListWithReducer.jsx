'use client';


import {useReducer, useState} from "react";
import useCustomReducer from "../hooks/useCustomReducer";

const initialState = [
    {
        id : '1',
        title: 'Task 1',
    },{
        id : '2',
        title: 'Task 2',
    },{
        id : '3',
        title: 'Task 3'
    }
];

export function todoReducer(state, action){
    switch (action.type){
        case 'ADD_TODO':
            return [
                ...state,
                action.payload
            ];
        case 'UPDATE_TODO':
            return state.map(todo => todo.id ===
            action.payload.id ? action.payload : todo);
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload.id);
    }
}

function ListData({todo, editTodo, deleteTodo}) {
    const [todoList, setTodoList] = useState(todo.title);
    const [edit, setEdit] = useState(false);
    const onEditHandler = () => {
        setEdit(!edit);
        if(edit){
            editTodo({
                ...todo,
                title: todoList
            });
        }
    }

    const onDeleteHandler = () => {
        deleteTodo(todo)
    }
    return <div>
        {
            !edit && todoList
        }{
            edit && <input type={"text"} value={todoList} onChange={e => setTodoList(e.target.value)} />
        }
        <button type={'button'} onClick={onEditHandler} >{edit ? 'Update' : 'Edit'}</button>
        <button type={'button'} onClick={onDeleteHandler} >Delete</button>
    </div>;
}
let id = 4;
const newTodo = (text)=> {
    return{
        id : id++,
        title : text
    }
}

function TodoEntry ({addTodo}){
    const [textTodo, setTextTodo] = useState('');
    const onAddedTodo = () => {
        addTodo(textTodo)
        setTextTodo('');
    }

    return <div>
        <input type={"text"} value={textTodo}
               onChange={e => setTextTodo(e.target.value)} />
        <button type={'button'} onClick={onAddedTodo} >Add Todo</button>
    </div>
}

export default function TodoListWithReducer(){
    // const [todos, dispatch] = useReducer(todoReducer, initialState); //this line is
    const [todos, dispatch] = useCustomReducer(todoReducer, initialState); //same line i write useReducer

    const addTodo = (todoText) => {
        const todo = newTodo(todoText);
        console.log('Add todo ', todo);
        dispatch({
        type : 'ADD_TODO',
            payload :todo
        })
    }

    const editTodo = (todo)  => {
        console.log('Edit todo', todo);
        dispatch({
            type : 'UPDATE_TODO',
            payload :todo
        })
    }

    const deleteTodo = (todo) => {
        console.log('Delete todo ', todo);
        dispatch({
            type : 'DELETE_TODO',
            payload :todo
        })
    }



    return(
        <div>
            <TodoEntry addTodo={addTodo} />
            {
                todos.map(todo => (
                    <ListData key={todo.id}
                              todo={todo}
                               editTodo = {editTodo}
                              deleteTodo = {deleteTodo}
                    />
                ))
            }
        </div>
    )
}