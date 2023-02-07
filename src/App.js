import db from './firebase';
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function App() {
  const todoCollectionRef = collection(db, "todos");
  const [todos, setList] = useState([]);
  const [newData, setNewData] = useState('');
  const [changed, setChanged] = useState(false);

  useEffect( () => {
    const getList = async () => {
      // const data = await getDocs(todoCollectionRef);
      const data = await getDocs(
        query(todoCollectionRef, orderBy("d_date", "desc"))
      )

      // data.docs.map( (doc) => setList([...todos, doc]) )
      setList(data.docs.map(
        (doc) => {return ({ ...doc.data(), id:doc.id })}
        )
      )
    }
    getList();
    setChanged(false);
  },[changed])

  const updateList = async (idx, con) => {
    const msg = window.prompt("TO DO 수정", con);

    if(msg) {
      // id 이용해 업데이트 할 데이터 검색
      const listDoc = doc(db, 'todos', idx);
      const editField = {content:msg, d_date:now_date}
      await updateDoc(listDoc, editField);
      setChanged(true);
    }
  }

  const deleteList = async (idx) => {
    const msg = window.confirm('정말 삭제하시겠습니까?');

    if(msg) {
      const listDoc = doc(db, 'todos', idx);
      await deleteDoc(listDoc);
      setChanged(true);

      alert('삭제가 완료되었습니다')
    }
  }

  const showList = todos.map(
    (value) => {return (
      <div key={value.id}>
        <h2>{value.content}</h2>
        <p>{value.id}</p>
        <button onClick={() => {updateList(value.id, value.content)}}>수정</button>
        <button onClick={() => {deleteList(value.id)}}>삭제</button>
      </div>
    )}
  )

  const date = new Date();
  const now_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();

  const createList = async () => {
    // await addDoc(연결객체, 전달 값)
    await addDoc(todoCollectionRef, {content:newData, d_date:now_date});
    setChanged(true);

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
