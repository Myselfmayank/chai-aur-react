import {createContext, useContext} from 'react';


export const TodoContext = createContext({
    //here we define prototype of the context and its behaviour
    //below is the property
   todos: [
    {
        id: 1,
        todo: "Todo msg",
        completed: false,
    },
   ],
   //below are the function prototype only its behaviour be only defined where it'll be used
   addTodo: (todo) => {},
   updateTodo: (id, todo) => {},
   deleteTodo: (id) => {},
   toggleComplete: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
