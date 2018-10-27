import React from 'react';
import PropTypes from 'prop-types';

const BookShelfChanger = ({ shelfsList, selected }) => (
  <div className="book-shelf-changer">
    <select>
      <option value="move" disabled>Move to...</option>
      { Object.keys(shelfsList).map(shelf => (
        <option
          key={shelf}
          value={shelf}
          selected={selected === shelf}>
          {shelfsList[shelf]}
        </option>
      ))}
      <option value="none" selected={!selected}>None</option>
    </select>
  </div>
);

BookShelfChanger.propTypes = {
  shelfsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.bool
};

export default BookShelfChanger;
