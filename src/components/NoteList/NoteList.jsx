import React from 'react';
import NoteItem from "./NoteItem/NoteItem";
import PropTypes from "prop-types";

export default function NoteList(props) {
console.log('props', props)
    return (
        <ul className='lists__box'>
            {props.notes.map((note, index) => <NoteItem key={index} note={note} deleteHandler={props.deleteHandler} />)}

        </ul>
    )
}

NoteList.propTypes = {
    notes: PropTypes.array,
    deleteHandler: PropTypes.func,
}