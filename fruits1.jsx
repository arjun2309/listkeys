import Fruits2 from './fruits2';

function Fruits1(props) {
  return (
    <>
      <h1>Fruit List</h1>
      <Fruits2 fruitList={props.fruits} />
    </>
  );
}

export default Fruits1;