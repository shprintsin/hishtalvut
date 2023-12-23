import { FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

interface SearchComponentProps {
    className?: string
}

const SearchComponent: React.FC<SearchComponentProps> = ({className}) => {
  return (
       <div className={className}>
          <FormControl className={""} type={"search"}></FormControl>
          <button aria-label="search" className={"my-2 my-sm-0"}>
             <FaSearch/>
          </button>
          {/*<Button className={"btn-secondary my-2 my-sm-0"}>s</Button>*/}
      </div> 
  )
}

export default SearchComponent
