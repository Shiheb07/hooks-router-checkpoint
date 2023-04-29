import { ADD_MOVIES } from "../actionTypes"

export const addMovies=(movie)=>{
    return {
        type:ADD_MOVIES,
        payload: movie
    }
}