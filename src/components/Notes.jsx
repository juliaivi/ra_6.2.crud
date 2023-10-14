import React from 'react';
import { useState, useEffect } from 'react'
import AddForm from './AddForm/AddForm';
import TitleBox from './TitleBox/TitleBox';
import NoteList from './NoteList/NoteList';

export default function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    }, [])

    const getNotes = () => {
        fetch("http://localhost:7070/notes", {method: 'GET'})
        .then((response) => response.json())
        .then((notes) => {
            setNotes(notes);
        })
    }

    const Add = (note) => {
        fetch(`http://localhost:7070/notes`, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({note})
    })
        .then(() => getNotes())
    }

    const deleteHandler = (id) => {
        fetch(`http://localhost:7070/notes/${id}`, { method: 'DELETE'})
        .then(() => getNotes())
    }

    return (
        <>
           <TitleBox getNotes={getNotes} />
           <NoteList  notes={notes} deleteHandler={deleteHandler}/>
           <AddForm Add={Add}/>
        </>
    )
}