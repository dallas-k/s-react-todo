import db from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';

function App() {

  const todoCollectionRef = collection(db, "todos");

  useEffect(() => {
    const getList = async() => {
      const data = await getDocs(todoCollectionRef);
      console.log(data);
    }

    getList();
  },[])

  return (
    <div className="App">
      <h1>Firebase, React</h1>
    </div>
  );
}

export default App;
