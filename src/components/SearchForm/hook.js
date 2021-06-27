import {useReducer} from 'react'

const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating',
  RESET_FILTERS: 'reset_filters'
}
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1
      }
  
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload
      }
    
    case ACTIONS.RESET_FILTERS:{
        return {
            ...state,
            keyword: "",
            times: 0,
            rating: "g"
        }
    }

    default:
      return state
  }
} 

export default function useForm({initialKeyword = "", initialRating = "g"} = {}) {
    const [state, dispatch] = useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        rating: initialRating,
        times: 0
      })

      const {keyword, rating, times} = state
      
    return {
        keyword,
        rating,
        times,
        updateKeyword: keyword => dispatch({type:ACTIONS.UPDATE_KEYWORD, payload: keyword}),
        updateRating: rating => dispatch({type:ACTIONS.UPDATE_RATING, payload:rating}),
        resetFilters: () => dispatch({type: ACTIONS.RESET_FILTERS})
    }
}
