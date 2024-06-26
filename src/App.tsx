
import { Stats } from 'fs';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Headings';
import { Oscar } from './components/Oscar';

/* function App() {
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
} */

function App(){
  return <div className='App'>
    <Status  status = 'loading' />
    <Heading>Place holder text</Heading>
    <Oscar>
      <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
    </Oscar>
    <Greet name='Zahid' isLoggedIn={true}/>
    </div>
}

export default App;
