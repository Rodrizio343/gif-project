import React from "react";
import { useLocation } from "wouter";
import useForm from 'components/SearchForm/hook'

const RATINGS = ["g", "pg", "pg-13", "r"];

const SearchForm = ({initialKeyword ="", initialRating="g"}) => {
  // const [rating, setRating] = useState(initialRating);
  

  const {keyword, rating, times, updateKeyword, updateRating, resetFilters} = useForm({initialKeyword, initialRating})

  const [_, pushLocation] = useLocation();

  // Se utiliza un useCallback para evitar que se renderice SearchForm de forma reiterada
  // const handleSubmitSeachForm = useCallback(({keyword}) => {
  //     pushLocation(`/search/${keyword}`)
  // }, [pushLocation])

  const handleChange = (evt) => {
    updateKeyword(evt.target.value)
  };
  
  const handleChangeRating = (evt) => {
    updateRating(evt.target.value)
  };

  const handleReset = (evt) => {
    evt.preventDefault()
    resetFilters()
  }
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>Buscar</button>
      <button onClick={handleReset}>Resetear</button>
      <input value={keyword} onChange={handleChange} placeholder="Buscar..." />
      <select value={rating} onChange={handleChangeRating}>
        <option disabled>Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <small>{times}</small>
    </form>
  );
};

export default React.memo(SearchForm);
