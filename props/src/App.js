import './App.css';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const person =
  {
    fullName:"BELTAIEF Maroua",
    bio:"",
    profession:"Developer",
    imgSrc:"/images.jpg",
    handleName:()=>{alert(`${person.fullName}`)},
  }

  return (
    <div className="App">
      <h1>Welcome</h1>
      <Profile data={person} 
      handleName={person.handleName}>
        <img src={person.imgSrc} alt="Profile pic"/>
      </Profile>
    </div >
  );
}

export default App;
