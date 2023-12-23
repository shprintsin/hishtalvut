import { FaCaretDown } from 'react-icons/fa';
import Select from 'react-select/base';

import { SelectStyles } from '../DocumentList';
import { LIBRARY_DOCUMENTS } from '../LIBRARY_DOCUMENTS';
import { SetArray } from '../SetArray';
import { SetOptions } from '../SetOptions';

export function DropDownSelector(setFilterConfig, filterConfig: { query: string; showPDFsOnly: boolean; filterYearFrom: string; filterBeforeYear: string; selectedPublishers: never[]; selectedTopics: never[]; }) {
  // New Badge component

  const SelectTopic = ({ filterItem, document, Name, SelectedName }) => {
    const MultiValue = () => null;

    // Function to handle selection changes
    const handleSelected = (selectedOptions) => {
      // Map selected options to their values
      const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
      // Update the filterConfig state
      setFilterConfig(prev => ({
        ...prev,
        [SelectedName]: selectedValues // Make sure to use the correct key here
      }));
    };
    // Generate options for the select dropdown
    const fieldSelection = SetArray(document, Name);
    const options = SetOptions(fieldSelection);
    // Dropdown indicator component
    const DropdownIndicator = () => (
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-300">
        <FaCaretDown />
      </div>
    );
    return (
      <Select
        isMulti
        options={options}
        className=""
        styles={SelectStyles}
        isRtl={true}
        isSearchable={true}
        components={{ DropdownIndicator, MultiValue }}
        classNamePrefix="select"
        value={options.filter(option => filterItem[SelectedName]?.includes(option.value))} // Filter options based on selected values
        onChange={handleSelected} // Update state on change
      />
    );
  };

  const TopicsList = () => (
    <>
      <SelectTopic filterItem={filterConfig} document={LIBRARY_DOCUMENTS} Name={"topic"} SelectedName={"selectedTopics"} />
     
    </>
  );
  return TopicsList;
}
  