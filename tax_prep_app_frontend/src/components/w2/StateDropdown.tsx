
import { Dropdown } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/index.css';

export default function StateDropdown() {


const statesList = [
  "Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "District of Columbia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma",
  "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
  "Texas", "Utah", "Vermont", "Virginia", "Virgin Islands", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];


return (
  <>
    
    <Dropdown id="input-dropdown" name="input-dropdown">
      {/* Map through statesList and render options */}
      <option>-Select-</option>
      {statesList.map((state, index) => (
        <option key={index} value={state}>{state}</option>
      ))}
    </Dropdown>
  </>
);
};





