import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { puppyList } from './data.js'

function App() {

const [puppies, setPuppies] = useState(puppyList);

console.log('puppies array: ', puppies);

const [featPuppyId, setFeatPuppyId] = useState(null);

function addPuppyDetails() {
  if (featPuppyId) {
    setFeatPuppyId(pup.id);
  }
}

  return (
      <div className='App'>
        {
          puppies.map((pup) => {
            return <p onClick={addPuppyDetails} key={pup.id}>{pup.name}</p>;
          })
        }
        {featPuppyId && (
          <p>{featPuppyId}</p>
        )}
      </div>
  )
}

export default App

// const [count, setCount] = useState(0)
// <>
// <div>
//   <a href="https://vitejs.dev" target="_blank">
//     <img src={viteLogo} className="logo" alt="Vite logo" />
//   </a>
//   <a href="https://react.dev" target="_blank">
//     <img src={reactLogo} className="logo react" alt="React logo" />
//   </a>
// </div>
// <h1>Vite + React</h1>
// <div className="card">
//   <button onClick={() => setCount((count) => count + 1)}>
//     count is {count}
//   </button>
//   <p>
//     Edit <code>src/App.jsx</code> and save to test HMR
//   </p>
// </div>
// <p className="read-the-docs">
//   Click on the Vite and React logos to learn more
// </p>
// </>
// )
// }