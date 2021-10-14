import { createContext ,useReducer} from "react";

export const ThemContext= createContext();

const INITIAL_STATE={darkMode:false}

const themeReducer=(state,action)=>{
    switch(action.type){
        case "TOGGLE":
            return {darkMode: !state.darkMode}
        default:
            return state;
    }
};

export const ThemeProvider=(props)=>{
    const [state,dispatch] = useReducer(themeReducer, INITIAL_STATE)
    return(
        <ThemContext.Provider value={{state,dispatch}}>
            {props.children}
        </ThemContext.Provider>
    )
}