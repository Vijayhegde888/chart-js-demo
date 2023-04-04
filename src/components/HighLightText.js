import React, { useState, useEffect } from "react";



   
  


  // const highlightText = (text) => {
  //   const keywords = Object.keys(data);
  // let highlightedText = text;
  // keywords.forEach((keyword,index) => {
  //   console.log('keyword',keyword.split(' ').join('_'));
  //   const regex = new RegExp(`\\b${keyword}\\b`, "gi");
  //   const tag = `<span class="${data[keyword]}"> ${keyword} ${data[keyword]} </span>`;
  //   const isTagged = highlightedText.includes(`class="${data[keyword]}"`);
    
  //     highlightedText = highlightedText.replace(regex, tag);
    
  // });
  // return <div dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  // };
  

const HighlightedText = () => {
   
  const text = 'When Sebastian Thrun started working on self-driving cars at Google in 2007, few people outside of the company took him seriously. “I can tell you very senior CEOs of major American car companies would shake my hand and turn away because I wasn’t worth talking to,” said Thrun, now the co-founder and CEO of online higher education start-up Udacity, in an interview with Recode earlier this week';
   const [finalHighlightedText,setHighlightedTex]=useState(text);

   const data = {
       "2007": "DATE",
       "Sebastian Thrun": "PERSON",
       "GOOGLE": "ORG",
       "American": "NORP",
       "Thrun": "PERSON",
       "Recode": "ORG",
       "earlier this week": "DATE"
   };
   // const highlightTexts = (text) => {
      
   useEffect(()=>{

    const text = 'When Sebastian Thrun started working on self-driving cars at Google in 2007, few people outside of the company took him seriously. “I can tell you very senior CEOs of major American car companies would shake my hand and turn away because I wasn’t worth talking to,” said Thrun, now the co-founder and CEO of online higher education start-up Udacity, in an interview with Recode earlier this week';

const data = {
  "2007": "DATE",
  "Sebastian Thrun": "PERSON",
  "Google": "ORG",
  "American": "NORP",
  "Thrun": "PERSON",
  "Recode": "ORG",
  "earlier this week": "DATE"
};

const keywords = Object.keys(data);

const regex = new RegExp('\\b(' + keywords.join('|') + ')\\b', 'gi');

const formattedText = text.replace(regex, (match) => {
  const tag = data[match];
  return `<p class="${tag}"><span >${match} </span> <span class="tagged_text">${tag}</span></p>`;
});

console.log(formattedText);


    setHighlightedTex(formattedText)

   },[])
    

  return(

     <div dangerouslySetInnerHTML={{ __html: finalHighlightedText }} />
          )
  };
  
  export default HighlightedText;
