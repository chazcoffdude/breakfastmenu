import React, {useState} from 'react';
import data from './utils/data';
import List from './components/List'



  
function App() {
    const [answrs,revealer]=useState(data);
    const reveal = (id)=>{
      
    }
 


//error catch above
    return (
        <main>
            <section className='container'>
                <h3>Our Menu</h3>
                <List answrs={answrs} remove={reveal}/>
                <button onClick={()=>{revealer(data.filter(x => x.type == 2))}}>Breakfast</button>
                <button onClick={()=>{revealer(data.filter(x => x.type == 3))}}>Milkshakes</button>
                <button onClick={()=>{revealer(data.filter(x => x.type == 1))}}>Lunch</button>
                <button onClick={()=>{revealer(data)}}>All</button>
            </section>
        </main>
    )
}

export default App













