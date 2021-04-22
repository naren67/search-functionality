import './App.css';
import {useState} from 'react'

import fakeData from './MOCK_DATA.json'

function App() {

  { console.log(fakeData)}

  const [input, setInput] = useState('')

  console.log(input)

  return (
    <div className="app">
         
        <div className="app__fakeData">
          <h1>Fake data</h1>
        </div>

        <div className="app__input">
            <input type="text" value={input} onChange={(e)=> {setInput(e.target.value)}}/>
        </div>

        {fakeData.filter((data)=>{
          if(input === '')
          {
            return data
          }
          else if(data.id == input )
          {
            return data
          }
          else if(data.first_name.toLowerCase().includes(input.toLowerCase()) )
          {
            return data
          }
          else if(data.last_name.toLowerCase().includes(input.toLowerCase()) )
          {
            return data
          }
          else if(data.email.toLowerCase().includes(input.toLowerCase()) )
          {
            return data
          }
          else if(data.gender.toLowerCase().includes(input.toLowerCase()) )
          {
            return data
          }
          
        }).map((e)=>(
          <div className="app__data">
             <p>{e.id}</p>
             <p>{e.first_name}</p>
             <p>{e.last_name}</p>
             <p>{e.email}</p>
             <p>{e.gender}</p>
           </div>
        ))}
       
    </div>
  );
}

export default App;
