import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tab from './Ecmascript/tableau';
import searchById from './Ecmascript/fonction';
import findLongestWord from './Ecmascript/exercice'
function App() {
  const [count, setCount] = useState(0)


  var person ={ //const 
    "a":"test1" ,
    "b":"test2"
  }
  console.log(person)
const newP ={
  "email" : "test@gmail.com", ...person
}
console.log(newP)
 person ={
  ...person,
  "email" : "test@gmail.com", ...person
}
console.log(person)

  const testFleche=(a)=>{
    console.log(a)
  }
  testFleche("hello world")

  //cond?true:false
  const ar = ["1","2"]
  const newA =ar.map(p=>p*2)
  console.log(ar)

  console.log(newA)
/************************************************************************************************************************* */

  const words = ["chien", "chat", "éléphant", "souris"];
  const result = findLongestWord(words);

  console.log(`Le mot le plus long est "${result.mot}" avec une longueur de ${result.longueur} caractères.`);

  /********************************************************************************************************************** */

  const countOccurrences = (inputArray) => {
    const flatArray = inputArray.flat();
  
    const occurrences = flatArray.reduce((acc, element) => {
      acc[element] = (acc[element] || 0) + 1;
      return acc;
    }, {});
  
    return occurrences;
  };
  


    const inputArray = [["a", "b", "c"], ["c", "d", "f"], ["d", "f", "g"]];
    const resulto = countOccurrences(inputArray);
    
    console.log(resulto);

    /**************************************************************************************************************** */
    const calculateTotalMark = (students) => {
      const modifiedMarks = students.map(student => ({
        name: student.name,
        id: student.id,
        marks: (student.marks < 50) ? student.marks + 15 : student.marks
      }));
    
      const passedStudents = modifiedMarks.filter(student => student.marks > 50);
    
      const totalMarks= passedStudents.reduce((total, student) => total + student.marks, 0);
    
      return totalMarks;
    };
    
    const students = [
      { name: "John",id :123, marks: 98 },
      { name: "Baba",id :101, marks: 23 },
      { name: "John",id :200, marks: 45 },
      { name: "Wick",id :115, marks: 75 },
    ];
    
    const results = calculateTotalMark(students);
    
    console.log(results);
    /************************************ */
    
console.log(Tab);

const foundObject = searchById(2);
console.log(foundObject);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
