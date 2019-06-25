import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({searchUsers, showClear, showClearButton, clearUsers, setAlert}) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    text === '' ? setAlert('Please enter something', 'light') : searchUsers(text);
    setText('');
  }

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}/>
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block" />
      </form>
      {showClearButton && (
        <button
          className="btn btn-light btn-block"
          onClick={clearUsers}>Clear</button>
      )}
    </div>
  )
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClearButton: PropTypes.bool.isRequired,
  settingAlert: PropTypes.func.isRequired,
};

export default Search
