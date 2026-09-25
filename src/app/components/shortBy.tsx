"use client"
import React, { useContext } from 'react';
import { AppContext } from '../context/provider';

const ShortByPage = () => {
    const {short,setshort} = useContext(AppContext);
    console.log(short);
    return (
        <div className='flex justify-end mt-15 mr-7'>
    
            <select value={short} onChange={(e)=> setshort(e.target.value as "Duration"|"Calories" | "Rating")} className="select select-success">
  <option disabled={true}>Short By</option>
  <option value={"Duration"}>Duration</option>
  <option value={"Calories"}>Calories</option>
  <option value={"Rating"}>Rating</option>
</select>
        </div>
    );
};

export default ShortByPage;