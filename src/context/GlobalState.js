import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    watchlist: localStorage.getItem("watchlist")
        ? JSON.parse(localStorage.getItem("watchlist"))
        : [],
    watched: localStorage.getItem("watched")
        ? JSON.parse(localStorage.getItem("watched"))
        : [],
};



//create context
export const GlobalContext = createContext(initialState)

//provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
        localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state]);

    //actions, tell provider 
    const addAnimeToWatchlist = (anime) => {
        dispatch({ type: "ADD_ANIME_TO_WATCHLIST", payload: anime })
    }

    const removeAnimeFromWatchlist = (id) => {
        dispatch({ type: "REMOVE_ANIME_FROM_WATCHLIST", payload: id })
    }

    const addAnimeToWatched = (anime) => {
        dispatch({ type: "ADD_ANIME_TO_WATCHED", payload: anime })
    }

    const moveToWatchlist = (anime) => {
        dispatch({ type: "MOVE_TO_WATCHLIST", payload: anime })
    }
    const removeFromWatched = (id) => {
        dispatch({ type: "REMOVE_FROM_WATCHED", payload: id })
    }

    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            addAnimeToWatchlist,
            removeAnimeFromWatchlist,
            addAnimeToWatched,
            moveToWatchlist,
            removeFromWatched
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}