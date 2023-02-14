import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const [ison,setison]=useState(false)

  const [questions, setquestions] = useState([{
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
  {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
  {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
  {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
  {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  }])
  
  const [indexnum, setindexnum] = useState(0)
  const [marks, setmarks] = useState(0)
  const [result,setresult]=useState(false)

  const checkans = (userselected, correctans) => {
    console.log("userselected=====>", userselected)
    console.log("correctans=====>", correctans)

    if (userselected == correctans) {
      setmarks(marks + 1)
    }

    

    if(indexnum +1 == questions.length){
  setresult(true)
    }
    setindexnum(indexnum + 1)
  }

  return (
    <div className="App">
      {/*       
      <button  onClick={()=>setison(!ison)}>{ison ? "on":"of"}</button>
      {
      ison ? <h1>On</h1> : <h1>Off</h1>
      } */}
      

  {result ? <h1>Your Result is {marks}</h1> : <div> <h1 className='hh'>{questions[indexnum].question}</h1>
      <hr />
      <div>
        {questions[indexnum].options.map((x, i) => {
          return (
            <div className='hi' key={i}>

              <button className='hello' onClick={() => checkans(x, questions[indexnum].answer)}>{x}</button>
            </div>
          )
        })}
      </div></div> }
     

    </div>
  );
}

export default App;