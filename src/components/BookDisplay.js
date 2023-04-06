import React from "react";
import PropTypes from 'prop-types';

const BookDisplay = (props) => {
    const { Title, Author } = props;
    return (
        <li className="item">
            <h2>{Title}</h2>
            <h3>{Author}</h3>
            <button type="submit" class="Remove Text-Style-8">Remove</button>
        </li>
    );
};

BookDisplay.propTypes = {
    Title: PropTypes.string.isRequired,
    Author: PropTypes.string.isRequired,
  };

export default BookDisplay;