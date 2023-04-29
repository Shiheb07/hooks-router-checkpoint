import { ADD_MOVIES } from "../actionTypes"

const initialState = {
    movies : [
        {
          title: "The Secret Life of Pets",
          director: "Chris Renaud",
          year: 2016,
          genre: ["Animation", "Comedy"],
          rating: 7.5,
          id: 1,
          imageUrl: "img/11.jpg",
          Trailer :  <iframe width="560" height="315" src="https://www.youtube.com/embed/i-80SGWfEjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
        },
        {
          title: "Inception",
          director: "Christopher Nolan",
          year: 2010,
          genre: ["Action", "Sci-Fi", "Thriller"],
          rating: 8.8,
          id: 2,
          imageUrl: "img/inc.jpg",
          Trailer :  <iframe width="560" height="315" src="https://www.youtube.com/embed/8hP9D6kZseM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
        },
        {
          title: "The Matrix",
          director: "Lana Wachowski, Lilly Wachowski",
          year: 1999,
          genre: ["Action", "Sci-Fi"],
          rating: 8.7,
          id: 3,
          imageUrl: "img/matrix.jpg" ,
          Trailer :  <iframe width="560" height="315" src="https://www.youtube.com/embed/vKQi3bBA1y8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
        },
        {
          title: "Joker",
          director: "Todd Phillips",
          year: 2019,
          genre: ["Crime", "Drama", "Thriller"],
          rating: 8.5,
          id: 4,
          imageUrl: "img/joker.jpg",
          Trailer :  <iframe width="560" height="315" src="https://www.youtube.com/embed/zAGVQLHvwOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
        },
        {
          title: "The Lion King",
          director: "Roger Allers, Rob Minkoff",
          year: 1994,
          genre: ["Animation", "Adventure", "Drama"],
          rating: 8.5,
          id: 5,
          imageUrl: "img/lion.jpg",
          Trailer :  <iframe width="560" height="315" src="https://www.youtube.com/embed/7TavVZMewpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          
        },
        {
          title: "Pulp Fiction",
          director: "Quentin Tarantino",
          year: 1994,
          genre: ["Crime", "Drama"],
          rating: 8.9,
          id: 6,
          imageUrl: "img/pulp.jpg",
          Trailer :  <iframe width="560" height="315" src="https://www.youtube.com/embed/s7EdQ4FqbhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        }
      ]
}

export const movieReducer = (state = initialState , action )=> {
    switch(action.type){
        case ADD_MOVIES :{
            return {
                ...state , movies :[...state.movies,action.payload]
            }
        }
        default : return state
    }
    
}