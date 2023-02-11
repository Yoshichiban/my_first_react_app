import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>Name : {props.name}</h1>
    <h2>Last Name : {props.lastName}</h2>
    <h3>Age: {props.age}</h3>
    </>
  )
}

const App = () => {
  //const name = "Jhin";
  //const isNameShowing = true;
  //const isUserLoggedIN = true;

  return (
    <div className="App">

        <Person name = "Jhin" lastName = "Virtuoso" age = "???"/>
        <Person name = "John"/>
        <Person lastName = "Doe" age = {2+20}/>
        <Person />
        <Person />

    </div>
  );
}

export default App;
