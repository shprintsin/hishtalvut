"use client";

import {
  useEffect,
  useState,
} from 'react';

import {
  Col,
  Row,
} from 'react-bootstrap';

import BlockContainer from '@/app/components/BlockContainer';

import { BadgeContainer } from './components/BadgeContainer';
import { BadgeDropDown } from './components/BadgeDropDown';
import { DisplayedDocuments } from './components/DisplayedDocuments';
import { DropDownSelector } from './components/DropDownSelector';
import { LIBRARY_DOCUMENTS } from './LIBRARY_DOCUMENTS';
import { ListItemRow } from './ListItemRow';
import { Paginator } from './Paginator';
import { ResetFilters } from './ResetFilters';
import { SearchInput } from './SearchInput';
import { SetArray } from './SetArray';
import { SortOrder } from './SortOrder';
import { useDocumentFilter } from './useDocumentFilter';

const LibraryQuery = {
  query: '',
  showPDFsOnly: false,
  filterYearFrom: '',
  filterBeforeYear: '',
  selectedPublishers: [],
  selectedTopics: []
}
export const SelectStyles = {
  input: (provided) => ({
    ...provided,
    color: '#FFFFFF'
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: '#1A202C',
    borderColor: '#2D3748',
    color: '#FFFFFF',
    padding: '1rem 1rem 1rem',
    '&:focus': {
      backgroundColor: '#2D3748',
      borderColor: '#D2D6DC',
    },
    '&:hover': {
      backgroundColor: '#2D3748',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#2D3748' : '#1A202C',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#2D3748',
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: '#1A202C',
    borderColor: '#2D3748',
    color: '#FFFFFF',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#FFFFFF',
  }),
};
const DocumentList = () => {

  const [filterConfig, setFilterConfig] = useState(LibraryQuery);
  const [sortOrder, setSortOrder] = useState('fromOldToNew'); // Default sorting order
  const [currentPage, setCurrentPage] = useState(1);
  const filteredDocuments = useDocumentFilter(LIBRARY_DOCUMENTS, filterConfig, sortOrder);
  const displayedDocuments = DisplayedDocuments(filteredDocuments, currentPage, 5);
  
useEffect(() => {
  }, [filteredDocuments]);
  const GetPaginator = () => {
    return (
      <Paginator
        documents={filteredDocuments}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        itemsPerPage={5}
      />
    )
  }
function SetCheckBox({ filter, Name, label,className}) {
    const Options = SetArray(LIBRARY_DOCUMENTS, 'publisher');
    return(
<>
{Options.map((CheckBoxObject, index) => {
  return(
              <label key={index} className={className}>
                <input
                  type="checkbox"
                  checked={filterConfig[Name][CheckBoxObject]}
                  onChange={() => {
                    setFilterConfig((prev) => ({
                      ...prev,
                      [Name]: {
                        ...prev[Name],
                        [CheckBoxObject]: !prev[Name][CheckBoxObject]
                      }
                    }
                    ));
                  }}
                />
                {CheckBoxObject}
              </label>
            )
}
            )}
            </>

  )}

const BadgesContainer = BadgeContainer(BadgeDropDown);
const TopicsList = DropDownSelector(setFilterConfig, filterConfig);
const SortButton = () =><SortOrder sortOrder={sortOrder} setSortOrder={setSortOrder} />
const ResetButton =() =><ResetFilters setFilterConfig={setFilterConfig} />
const SearchBox=()=><SearchInput filter={filterConfig.query} />
const Publishers = ({className})=><SetCheckBox filter={setFilterConfig} Name="selectedPublishers" label="publisher" className={className}/>
const BadgeList = ()=><BadgesContainer filterItem={filterConfig} selectedTopics={filterConfig.selectedTopics || []} onRemove={topicToRemove => { setFilterConfig(prev => ({ ...prev, selectedTopics: prev.selectedTopics.filter(topic => topic !== topicToRemove) })); }} />
return (
    <>  
    <BlockContainer>
        <Row className='flex justify-center'>
          <Col md={11}>
<SortButton/>
            <div className="flex items-center justify-between bg-gray-800">
        <div className="w-1/5">
          <div className="relative">
<TopicsList/>
          </div>
        </div>
       <SearchBox/>
      </div>
      
      <div className="flex items-end justify-end   bg-gray-800">
      <Publishers className={"mr-2 text-white"}/>
      <BadgeList/>
      <ResetButton/>

      </div>
      {/* to do: move the button to seperate component */}  
     
          <Row className='flex justify-center bg-gray-200'>
          
          <p>Found <strong>{filteredDocuments.length}</strong> items</p>

   <SearchListItem document={displayedDocuments}/>

        

        <Row>
        <GetPaginator/>
        </Row>
</Row>
</Col>
</Row>
   </BlockContainer>
    </>

  );

};

export default DocumentList;
function SearchListItem({ document }) {
  return (
    <>
      {document.map((doc, index) => (
        ListItemRow(doc, index)
      ))}
    </>
  );

}


