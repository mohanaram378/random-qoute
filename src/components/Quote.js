import React, { useEffect, useState } from 'react';
import Header from './Header';


export const Quote = () => {
    const[quote,setQuote]=useState("");
    const[author,setAuthor]=useState("");
    const[changeColor,setChangeColor]=useState('#16A085');

    useEffect(()=>{
      getQuote()
    },[])

    const getQuote =()=>{
      let url =`https://dummyjson.com/quotes#`;
      fetch(url)
        .then(res => res.json())
        .then(data =>{
          let dataQutoes = data.quotes;
          let randomNum=Math.floor(dataQutoes.length*Math.random());
          let randomColor='#'+Math.random().toString(16).slice(2,8);
          let randomQuote = dataQutoes[randomNum];
          setQuote(randomQuote.quote);
          setAuthor(randomQuote.author);
          setChangeColor(randomColor);
       })
    }
    const handleCopy=()=> {
      navigator.clipboard.writeText(quote);
    }
    const handleClick = () =>{
      getQuote();
    }
  
  return (
    <>
    <h1 className='title'>RANDOM QOUTE GENERATOR</h1>
    <div className='body' style={{backgroundColor:`${changeColor}`}}>
     
      <div className='quote-box' style={{color:`${changeColor}`}}>
        <div className='text'>
         <p>" {quote} "</p>
        </div>
        <div className='author'>
          <p>- {author}</p>
        </div>
        <div className='bt'>
         <div className='social'>
          <button className='link' style={{backgroundColor:`${changeColor}`}}><a  href={`https://twitter.com/compose/tweet?hashtags=quotes&text=${quote}`} target='_blank'><i class="fa-brands fa-twitter"></i></a></button>
          <button className='link' style={{backgroundColor:`${changeColor}`}} onClick={handleCopy}><i class="fa-solid fa-clipboard"></i></button>
         </div>
         <button className='new-quote' onClick={handleClick} style={{backgroundColor:`${changeColor}`}}>+New Quote</button>
        </div>
      </div>
      </div>
      <h1 className='footer'>CONTACT ME FOR MORE QUOTES</h1>
    </>
  )
}