import React, { useState, useEffect } from 'react'
import { getStory, storyUrl } from '../services/HackNews'
import { mapTimeString } from '../utils/mapTimeString'

export const Story = ({storyId}) => {
    const [story,setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then(dunja => dunja && setStory(dunja)) // eslint-disable-next-line
    },[])
    //lazy eval
    
    return (
        <div className="stori">
        <a href={story.url} target="_blank" rel="noopener noreferrer">
            <h3>{story.title}</h3>
        </a>
        <p>Autor: {story.by}</p>
        <p>Objavljeno pre {mapTimeString(story.time)}</p>
        </div>
    )
}