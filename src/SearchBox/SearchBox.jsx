/* eslint-disable react/prop-types */
const SearchBox = ({ handleFilter }) => {
  return (
    <div>
      Find contacts by name
      <input type="text" onChange={handleFilter} />
    </div>
  );
};
export default SearchBox;
