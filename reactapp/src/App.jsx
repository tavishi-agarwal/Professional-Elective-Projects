import { useState } from 'react'
import './App.css'
import { Wrapper } from './Wrapper'
import { UserCard } from './UserCard'

function App() {
  const [count, setCount] = useState(0)
  const users = [
    { name: "virat kohli", role: "batsman", country: "india" },
    { name: "sachin tendulkar", role: "batsman", country: "india" }
  ];

  return (
    <div>
      <h1>User Dashboard</h1>
      <Wrapper title="Userlist">
        {users.map((user, index) => (
          <UserCard  data={user} key = {index}/>
        ))}
      </Wrapper>
    </div>
  )
}

export default App
