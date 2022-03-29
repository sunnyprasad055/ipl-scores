import React, { useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
const Api = () => {


   

    const [currentMatches, setCurrentMatches] = useState([])

    console.log(currentMatches)


     const data = async() => {
                await axios.get('https://api.cricapi.com/v1/currentMatches?apikey=e4495ac1-4fe1-43ce-8a5d-d3a257a9fb3d&offset=0')
                            .then(res => {
                                
                                setCurrentMatches(res.data)
                            }).catch(err => {
                                console.log(err)
                            })


     
            }
    return (
        <>
          <button onClick= {data}>Refresh Score</button>
         

           {  currentMatches.map((sunny) => {
                 return(
               <h1>{sunny.matchType}</h1>  
                 )   
             })
         }

        </>
    );
}

export default Api;
