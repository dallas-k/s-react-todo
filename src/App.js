import db from './firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setList] = useState([]);
  const todoCollectionRef = collection(db, "todos");

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
      </div>
    )}
  )

  return (
    <div className="App">
      <h1>Firebase, React</h1>
      {showList}
    </div>
  );
}

export default App;
