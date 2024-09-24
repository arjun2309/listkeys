function Fruits2(props) {
    return (
      <>
        <h2>Fruits:</h2>
        
          {props.fruitList.map((fruit, index) => (
            <li >{index+1}  {fruit}</li>
          ))}
      </>
    );
  }
  
  export default Fruits2;
  