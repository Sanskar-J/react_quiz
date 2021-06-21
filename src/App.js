import React from 'react';
import Page from './Page';
import { useState,useEffect } from 'react';
import './index.css';

function App() {
  const ques=[
    "What device are you using?",
    "RAM size of your device?",
    "Internal Storage of your device?",
    "What kind of liquid does your device consume?"
  ];
  const optns=[
    ["iPhone","Android","Windows PC","MAC PC"],
    ["1GB","2GB","4GB","8GB"],
    ["16GB","32GB","64GB","128GB"],
    ["Water","Milk","Juice","All of these"]
  ];
  let s=localStorage.getItem("time");
  const [index,setIndex]=useState(0);
  const [t,setT]=(s==null?useState(0):useState(parseInt(s)));
  
  function count(){

    
    setInterval(setT(t+1),1000);
    localStorage.setItem("time",t);
  }
  
  setTimeout(count,1000);
  // const question=document.querySelector('.question');
  // const answer1=document.querySelector('.answer1');
  // const answer2=document.querySelector('.answer2');
  // const answer3=document.querySelector('.answer3');
  // const answer4=document.querySelector('.answer4');
  const[pg1,setPg1]=useState(true);
  const[pg2,setPg2]=useState(false);
  const[pg3,setPg3]=useState(false);
  const[pg4,setPg4]=useState(false);
  function nextBtn(){
    
    const next=document.querySelector('.next');
    const back=document.querySelector('.back');
    const submit=document.querySelector('.submit');
    console.log("this is",index)
    if(index==-1)
    {
      setPg1(true);
      setPg2(false);
      setPg3(false);
      setPg4(false);
    }
    if(index==0)
    {
      setPg1(false);
      setPg2(true);
      setPg3(false);
      setPg4(false);
    }
    if(index==1)
    {
      setPg1(false);
      setPg2(false);
      setPg3(true);
      setPg4(false);
    }
    if(index==2)
    {
      setPg1(false);
      setPg2(false);
      setPg3(false);
      setPg4(true);
    }
      if(index<3){
      setIndex(index+1);
      

        next.classList.add('up');
        back.classList.remove('up');

      }
      if(index==2){
        
        next.classList.add('down');
        submit.classList.remove('up');
      }
   
  }
  function backBtn(){
    const next=document.querySelector('.next');
    const back=document.querySelector('.back');
    const submit=document.querySelector('.submit');
    console.log(index)
    if(index==1)
    {
      setPg1(true);
      setPg2(false);
      setPg3(false);
      setPg4(false);
    }
    if(index==2)
    {
      setPg1(false);
      setPg2(true);
      setPg3(false);
      setPg4(false);
    }
    if(index==3)
    {
      setPg1(false);
      setPg2(false);
      setPg3(true);
      setPg4(false);
    }
    if(index==0)
    {
      setPg1(false);
      setPg2(false);
      setPg3(false);
      setPg4(true);
    }
    if(index>-1){
      setIndex(index-1);
      
    }
    if(index==1){
      back.classList.add('up');
      next.classList.remove('up');
    }
    if(index==3){
      submit.classList.add('up');
      next.classList.add('up');
      next.classList.remove('down');
    }

  }
  function submitBtn(){
    window.alert("Response has been submitted");
  }
 
  return (
    <div className="container">
      <div className="box">
      <div className="clock">{t}</div>
      {pg1 && <Page ques={ques} optns={optns} index={0}/>}
      {pg2 && <Page ques={ques} optns={optns} index={1}/>}
      {pg3 && <Page ques={ques} optns={optns} index={2}/>}
      {pg4 && <Page ques={ques} optns={optns} index={3}/>}
      <div className="next" onClick={nextBtn}>Next</div>
      <div className="submit up" onClick={submitBtn}>Submit</div>
      <div className="back up" onClick={backBtn}>Back</div>
      </div>
      
    </div>
  );
}

export default App;
