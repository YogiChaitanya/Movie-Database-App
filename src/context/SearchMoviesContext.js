import {createContext} from 'react'

const SearchMoviesContext = createContext({
  searchResponse: {},
  onTriggerSearchingQuery: () => {},
  onChangeSearchInput: () => {},
})

export default SearchMoviesContext
