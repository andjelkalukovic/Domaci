import React, { useState, useEffect } from 'react';
import { getStoryIds } from '../services/HackNews';
import { Story } from '../components/Story';

export const StoriesContainer = () => {
  const [storyIds,setStoryIds] = useState([])

  useEffect(() => {
    getStoryIds().then(dunja => setStoryIds(dunja))
  },[])

  // useEffect waits ...
  //prvi put se pozove useEffect, sledeci put se pozove na
  //promene u ovom poslednjem praznom [] pa s obzirom da 
  //je on prazan, to se ustvari vise nece pozivati
  //da unutra stoji storyIds, onda bi se pozivala f-ja
  //kada se promeni storyids

  //postoji Native - Dom i Virtual - Dom
  return (
    <>
        {storyIds.slice(0,20).map(storyId => <Story storyId={storyId} key={storyId}/>)}
    </>
  )
}