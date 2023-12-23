import {
  Button,
  FormControl,
} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function NavBarSearch() {
  return (
    <div className={"form-inputs"}>
    <FormControl className={""} type={"search"}></FormControl>
    <Button className={"my-2 my-sm-0"}>
        <FaSearch />
    </Button>
</div>
  )
}

export default NavBarSearch
