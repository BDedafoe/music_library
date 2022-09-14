import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import Button from 'react-bootstrap/Button';

function SearchBar() {
    const {term, handleSearch} = useContext(SearchContext)

    return (
        <form>
            <input ref={term} type="text" placeholder="Search Here" />
            <Button variant="info" onClick={(e) => handleSearch(e, term.current.value)}>Submit</Button>{' '}
        </form>
    )
}

export default SearchBar