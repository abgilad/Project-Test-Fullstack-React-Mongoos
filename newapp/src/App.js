import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Tasks from './Components/Tasks';

function App() {


  const [data, setData] = useState([{ name: 'a', desc: 'hhdd' }, { name: 'b', desc: 'lkjffff' }])

  const [useEffectFlag, setUseEffectFlag] = useState(true)

  const [inputName, setInputName] = useState('')
  const [inputDesc, setInputDesc] = useState('')

  const viewTasks = () => {
    return data.map((val, i) => {
      return <Tasks key={i} task={val} />
    })
  }

  const addToData = (n, d) => {
    let temp = {
      name: n,
      desc: d
    }
    addNewTask(temp)
  }

  const addNewTask = (temp) => {
    fetch('/', {
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({
        temp
      })
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  useEffect(() => {
    fetch('/all')
      .then((res) => { return res.json() })
      .then((data) => { return setData(data) })
  }, [useEffectFlag])

  return (
    <div className="App">
      <input onChange={(e) => { setInputName(e.target.value) }} placeholder='name' />
      <input onChange={(e) => { setInputDesc(e.target.value) }} placeholder='desc' />
      <button onClick={() => { addToData(inputName, inputDesc) }}>ENTER</button>
      {viewTasks()}
    </div>
  );
}

export default App;
