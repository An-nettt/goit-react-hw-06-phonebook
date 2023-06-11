// import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { FilterWrapper, Text, Input } from '../../styled';
import { changeFilter } from 'redux/actions';

const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = event =>
    dispatch(changeFilter(event.currentTarget.value));
  // console.log(event.currentTarget.value);
  // console.log(onChangeFilter);

  // = event => {
  //   setFilter(event.currentTarget.value);
  // };

  return (
    <FilterWrapper>
      <Text>Find contacts by name</Text>
      <Input onChange={onChangeFilter}></Input>
    </FilterWrapper>
  );
};

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
