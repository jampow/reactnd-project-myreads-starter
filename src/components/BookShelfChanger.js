import React from 'react';
import PropTypes from 'prop-types';

const BookShelfChanger = ({ shelfsList, selected, onChange }) => (
  <div className="book-shelf-changer">
    <select
      defaultValue={selected || 'none'}
      onChange={onChange}>
      <option value="move" disabled>Move to...</option>
      { Object.keys(shelfsList).map(shelf => (
        <option
          key={shelf}
          value={shelf}>
          {shelfsList[shelf]}
        </option>
      ))}
      <option value="none">None</option>
    </select>
  </div>
);

BookShelfChanger.propTypes = {
  shelfsList: PropTypes.objectOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  onChange: PropTypes.func
};

export default BookShelfChanger;
