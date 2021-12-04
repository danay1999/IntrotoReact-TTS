import './App.css';
import Greeting from './components/greeting';
import TTHackathon from './components/tthackathon';
import Mostunconventionalhack from './images/Mostunconventionalhack.png';
import Stereotypesmasherhack from './images/Stereotypesmasherhack.png';
import Inclusivehack from './images/Inclusivehack.png';
import Mostmemeworthyhack from './images/Mostmemeworthyhack.png';

function App() {
  return (
    <div className="App">
      <div>
        <Greeting name={"Alison"}/>
        <TTHackathon location={"Seattle"}/>
        <img src={Stereotypesmasherhack} height="150px"/>
      </div>
      <div>
        <Greeting/>
        <TTHackathon location={"Miami"}/>
        <img src={Inclusivehack} height="150px"/>
      </div>
      <div>
        <Greeting name={"Danay"}/>
        <TTHackathon location={"New York"}/>
        <img src={Mostunconventionalhack} height="150px"/>
      </div>
      <div>
        <Greeting/>
        <TTHackathon location={"Chicago"}></TTHackathon>
        <img src={Mostmemeworthyhack}  height="150px"/>
      </div>
    </div>
  );
}

export default App;
