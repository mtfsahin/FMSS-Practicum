import React,{ createContext } from "react";

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
    return(
        <WeatherContext.Provider value={props.data}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext;