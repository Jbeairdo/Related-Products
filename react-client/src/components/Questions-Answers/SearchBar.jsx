/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

const SearchBar = (props) => {
  const [searchValue, setSearch] = useState('');
  const [filteredList, setList] = useState([]);

  useEffect(() => {
    props.setSearch(searchValue);
    props.setSearchValue(filteredList);
  }, [searchValue]);

  const filterQuestions = (e) => {
    setSearch(e.target.value);
    if ((e.target.value).length >= 3) {
      let qs = props.questions.filter(question => question.question_body.toLowerCase().includes(e.target.value.toLowerCase()))
      setList(qs);
    } else {
      setList(props.questions);
    }
  };

  return (
    <div className="form-group fg--search">
      <input
        className="search"
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        value={searchValue}
        results="0"
        onChange={filterQuestions}
      />
      <button type="submit"><i className="fa fa-search" /></button>
    </div>
  );
};

export default SearchBar;
