import React from 'react';
import PropTypes from "prop-types";

export default function NoteItem(props) {
    console.log('props2', props)
    const clickHendler = () => {
        props.deleteHandler(props.note.id);
    }

    return (
        <li className='item list__item' key={props.key}>
            <button className='btn__close btn' onClick={clickHendler}>X</button>
            <div className='item__content'>{props.note.note.content}</div>
        </li>
    )
}

NoteItem.propTypes = {
    note: PropTypes.object,
    deleteHandler: PropTypes.func,
}