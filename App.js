// import logo from './logo.svg';
import './App.css';
// import ClassComp from './classcomp';
// import Abc from './loop';
// import List from './list.jsx/list';
import One from './one';
import Fruits1 from './listkeys/fruits1';

function App() {

  return (
    <div className="App">
    
    {/* // </div> */}
    <>
    {/* <Abc /> 
    <ClassComp /> */}
    <One val="the names"/>
    {/* <List mylist={['arjun','Gokul','Suhail']}/> */}
    <Fruits1 fruits={['Apple', 'Banana', 'Orange', 'Mango', 'Grapes']} />
    </>

    </div>
  );
}

export default App;
