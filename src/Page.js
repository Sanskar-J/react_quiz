import React from 'react';
import { useEffect } from 'react';
const Page = (props) => {
    let a=0,b=0,c=0,d=0;
    function check(){
      if(props.index==0)
    {
        const s=parseInt(localStorage.getItem(props.index));
        if(s==1)
        highlight1();
        if(s==2)
        highlight2();
        if(s==3)
        highlight3();
        if(s==4)
        highlight4();
        
    }
      if(props.index==1)
    {
        const s=parseInt(localStorage.getItem(props.index));
        if(s==1)
        highlight1();
        if(s==2)
        highlight2();
        if(s==3)
        highlight3();
        if(s==4)
        highlight4();
        
    }
      if(props.index==2)
    {
        const s=parseInt(localStorage.getItem(props.index));
        if(s==1)
        highlight1();
        if(s==2)
        highlight2();
        if(s==3)
        highlight3();
        if(s==4)
        highlight4();
        
    }
      if(props.index==3)
    {
        const s=parseInt(localStorage.getItem(props.index));
        if(s==1)
        highlight1();
        if(s==2)
        highlight2();
        if(s==3)
        highlight3();
        if(s==4)
        highlight4();
        
    }
    }
    useEffect(() => {
      check();
    }, [])
    function highlight1(){
          const answer1=document.querySelector('.answer1');
        const answer2 = document.querySelector('.answer2');
        const answer3 = document.querySelector('.answer3');
        const answer4 = document.querySelector('.answer4');
        answer1.classList.add('up');a++;
        answer4.classList.remove('up');
        answer3.classList.remove('up');
        answer2.classList.remove('up');
        localStorage.setItem(props.index,1)
    }
    function highlight2(){
          const answer1=document.querySelector('.answer1');
        const answer2 = document.querySelector('.answer2');
        const answer3 = document.querySelector('.answer3');
        const answer4 = document.querySelector('.answer4');
        answer2.classList.add('up');b++;
        answer4.classList.remove('up');
        answer3.classList.remove('up');
        answer1.classList.remove('up');
        localStorage.setItem(props.index,2)
    }
    function highlight3(){
          const answer1=document.querySelector('.answer1');
        const answer2 = document.querySelector('.answer2');
        const answer3 = document.querySelector('.answer3');
        const answer4 = document.querySelector('.answer4');
        answer3.classList.add('up');c++;
        answer4.classList.remove('up');
        answer1.classList.remove('up');
        answer2.classList.remove('up');
        localStorage.setItem(props.index,3)
    }
    function highlight4(){
          const answer1=document.querySelector('.answer1');
        const answer2 = document.querySelector('.answer2');
        const answer3 = document.querySelector('.answer3');
        const answer4 = document.querySelector('.answer4');
        answer4.classList.add('up');d++;
        answer1.classList.remove('up');
        answer3.classList.remove('up');
        answer2.classList.remove('up');
        localStorage.setItem(props.index,4)
    }
    
    return ( 
        <t>  
      <div className="question">{props.ques[props.index]}</div>
      <div className="answer1" onClick={highlight1}>{props.optns[props.index][0]}</div>
      <div className="answer2" onClick={highlight2}>{props.optns[props.index][1]}</div>
      <div className="answer3" onClick={highlight3}>{props.optns[props.index][2]}</div>
      <div className="answer4" onClick={highlight4}>{props.optns[props.index][3]}</div>
      </t>  
     );
}
 
export default Page;