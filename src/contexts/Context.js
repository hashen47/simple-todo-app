import { createContext, useContext } from "react";


export const todoContext = createContext(null);
export const dispatchContext = createContext(null);

export function useTodos() {
    return useContext(todoContext);
}

export function useDispatch() {
    return useContext(dispatchContext);
}
