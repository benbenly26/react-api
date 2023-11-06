import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {

  const [val1, setVal1] = useState([]);
  const [val2, setVal2] = useState([]);

  // promise method
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => setVal1(res.data))
      .catch((e) => console.log('error in link', e))

  }, [])
  console.log(val1);

  // async await method
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setVal2(res.data)
      } catch (e) {
        console.log('error in link', e);
      }
    }
    getData()
  }, [])
  console.log(val2);

  return (
    <>
      {/* Promise method */}
      {val1.map((value) => {
        return <div key={value.id}>
          <h5>{value.completed ? 'true Yes True' : 'false this is false'}</h5>
        </div>
      })
      }

      {/* async await method*/}
      {val2.map((values) => {
        return <div key={values.id}>
          <h2>{values.title}</h2>
        </div>
      } 
      )}
    </>
  );
}