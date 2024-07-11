import logo from './logo.svg';
import './App.css';
import { First, Second, Third, Fourth, Student} from './Hello';
import { First1, Second2, Third3, Fourth4, Btns, Student1} from './Hello';

function App() {
  return (
    <div className="App">
      Assignment 8 <br></br>
      Hello World!!
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <First1/>
      <Second2/>
      <Third3/>
      <Fourth4/>
      <Student name="Nikita" address="Dharashiv" score="97"/>
      <Student1/>
      <Btns/>
    </div>
  );
}

export default App;
