import React from 'react'

const App = () => {
    const arr=["A","B","C"]
  return (
    <div>
        <ol>
        {arr.map((el,i)=>
            <li key={`relativeListItem${i+1}`}>{el}</li>
        )}
        </ol>
    </div>
  )
}

export default App
