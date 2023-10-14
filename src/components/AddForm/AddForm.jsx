import React from 'react';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import PropTypes from "prop-types";

export default function AddForm({Add}) {
    const [content, setContent] = useState('');

    const handleChange = (e) => {
        setContent(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("e", e)
        console.log("content", content)
        // console.log('props.note', props.note)
        // console.log(props.note.content)
        if (content === '') return;
        const note = {id: uuidv4(), content};
        console.log("note", note)
        Add(note);
        setContent('');
    }

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <h3 className='form__title'>New notes</h3>
                <textarea className="form__textarea"  onChange={handleChange} value={content} name="text" cols="50" rows="10" />
                <button className='btn-add btn'>&gt;</button>
            </form>
        </>
    )
}

// AddForm.propTypes = {
//     handleAdd: PropTypes.func.isRequired
//   }