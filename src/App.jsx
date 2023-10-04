import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])

  async function fetchData() {
    await fetch(`http://localhost:3000`)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setData(result);
      }).catch(err => {
        console.log(err)
      });
  }

  useEffect(() => {

  }, [])

  return (
    <>
      <h1>Hejsan</h1>
      <button onClick={() => { fetchData() }}>Fetch data</button>
    </>
  )
}

export default App
