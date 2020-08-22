import React, { useReducer, useState } from "react";
import {initialState, TodoReducer, ADD_TODO, TOGGLE, CLEAR_COMPLETED} from './reducers/reducer';
import "./App.css";

const App = () => {
    const [newTodo, setNewTodo] = useState("")
    const [state, dispatch] = useReducer(TodoReducer, initialState);
    
    const handleChange = (e) => {
        setNewTodo(e.target.value);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_TODO,
            payload: newTodo
        })
        setNewTodo("")
        console.log("ADD_TODO", state);
    }
    const handleToggle = (e) => {
         e.preventDefault();
        console.log("handleToggle", e);
        dispatch({
            type: TOGGLE,
            payload: e
        }
        )    
    }
    return (
        <div className="App">
          <div className="header">
            <h1>Todo Task</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="newTodo"
                    value={newTodo}
                    onChange={handleChange} >
                </input>
                <button className="Add">Add</button>
            </form>
            {state.map((item) => {
                return (
                    <div key={item.id}>
                    <p>{item.item}</p>
                    <button className="dispa"
                      onClick={() => dispatch({ type: TOGGLE, payload: item.id })}>
                      {item.id}-{item.item}{item.completed} 
                    </button>

                    <button className="clear-button" onClick={()=> dispatch({type:CLEAR_COMPLETED})}>Clear</button>
                  </div>
                )
            })}
        </div>
    )
}
export default App;