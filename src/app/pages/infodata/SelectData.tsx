import {
  Col,
  FormGroup,
  InputGroup,
  Row,
} from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import { FaAngleDown } from 'react-icons/fa';

import { InfoDataProps } from './Props';

interface SelectDataProps {
    data: InfoDataProps[];
    setSelected: (selected: InfoDataProps[]) => void;
    selected: InfoDataProps[];
    }
    
export function SelectData(
  {data,
  setSelected,
  selected
  }: SelectDataProps) {
  return (
    <>
      <Row className={' m-0 p-0'}>
        <Col className={'mx-1 p-4'} md={6}>
          <Row>
            <p className={'f-heebo fw-medium'}>
              בחירת נתונים מתוך מאגר הנתונים:
            </p>
          </Row>
          <div>
            <FormGroup>
              <InputGroup>
                <Typeahead
                  id='dataset-selector'
                  labelKey='title'
                  options={data}
                  clearButton={true}
                  align={'right'}
                  onChange={setSelected}
                  selected={selected} // Use the selected state here
                  className={'t-align-right f-heebo justify-between flex'}
                  // inputValue={inputValue}
                  placeholder='בחירת נתונים מהמאגר..'
                >
                  <button className={'toggle-button'}>
                    <FaAngleDown />
                  </button>
                </Typeahead>
              </InputGroup>
            </FormGroup>
          </div>
        </Col>
      </Row>
    </>
  );
}
