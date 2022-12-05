//import { type } from "@testing-library/user-event/dist/type"
import React, { useState, useReducer } from "react"
import Todo from "./Todo"

// const ACTIONS = {
//     INCREMENT: "increment",
//     DECREMENT: "decrement"

// }

export const ACTIONS = {
    ADD_TODO: "add_todo",
    TOGGLE_TODO: "toggle_todo",
    DELETE_TODO: "delete_todo"
}

// function reducer(state, action) {
//     switch (action.type) {
//         case ACTIONS.INCREMENT:
//             return { count: state.count + 1 }
//         case ACTIONS.DECREMENT:
//             return { count: state.count - 1 }
//         default:
//             return state
//     }
// }

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })
            case ACTIONS.DELETE_TODO:
                return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
    }
}

function newTodo(name) {
    return {id: Date.now(), name: name, complete: false}
}

export default function UseReducer() {
    const [todos, dispatch] = useReducer(reducer, []) 
    const [name, setName] = useState("")
    // const [count, setCount] = useState(0)
    
    // function handleIncrement() {
    //     dispatch({type: ACTIONS.INCREMENT})
    // }

    //  function handleDecrement() {
    // dispatch({type: ACTIONS.DECREMENT})
    //  }

    function handleSubmit(e) {
        dispatch({ type: ACTIONS.ADD_TODO, payload: {name: name} })
        e.preventDefault()
        setName("")
    }


    return (
    <>
        {/* <button onClick={handleDecrement}>-</button>
        <span>{state.count}</span>
        <button onClick={handleIncrement}>+</button> */}
            <form onSubmit={handleSubmit}>
                <input  type="text" value={name} onChange={e => setName(e.target.value)} />
            </form>
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch } />
            })}
        </>
    )
}