import db from './firebase';
import { collection, doc, getDocs, addDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setList] = useState([]);
  const todoCollectionRef = collection(db, "todos");
  const [newData, setNewData] = useState('');

  useEffect( () => {
    const getList = async () => {
      const data = await getDocs(todoCollectionRef);
      // data.docs.map( (doc) => setList([...todos, doc]) )
      setList(data.docs.map(
        (doc) => {return ({ ...doc.data(), id:doc.id })}
        )
      )
    }
    getList();
  },[])

  const showList = todos.map(
    (value) => {return (
      <div key={value.id}>
        <h2>{value.content}</h2>
        <p>{value.id}</p>
      </div>
    )}
  )

  const date = new Date();
  const now_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();

  const createList = async () => {
    // await addDoc(연결객체, 전달 값)
    await addDoc(todoCollectionRef, {content:newData, d_date:now_date})
    document.querySelector('#todoValue').value = '';
  }

  return (
    <div className="App">
      <h1>Firebase, React</h1>
      <input id='todoValue' type='text' placeholder='todos...' onChange={(e) => {setNewData(e.target.value);}} />
      <button onClick={createList}>Add List</button>
      <p>{newData}</p>
      <hr />
      {showList}
    </div>
  );
}

export default App;
