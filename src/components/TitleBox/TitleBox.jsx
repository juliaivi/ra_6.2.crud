import React from 'react';
import PropTypes from "prop-types";

export default function TitleBox(props) {
    return (
        <div className='header__title_box'>
            <h1 className='header__title'>Notes</h1>
            <button className='byn__reboot btn' onClick={props.getNotes}>
                <span className="update"></span>
            </button>
        </div>
    )
}

TitleBox.propTypes = {
    getNotes: PropTypes.func,
}