
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    firstName: 'Bruce',
    lastName: 'Wayne'
  }
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]
  return (
    <div className="App">
      <Greet name='Zahid' messageCount={10} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names = {nameList}></PersonList>
    </div>
  );
}

export default App;
