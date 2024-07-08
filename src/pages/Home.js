import { faker } from '@faker-js/faker';
import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
const Home = () => {

  const [users, setUsers] = useState([]);



  const handleAdd = () => {
    const newObj = {
      email: faker.internet.email(),
      username: faker.internet.userName(),
      image: faker.image.avatarLegacy()
    };
    setUsers((prev) => [...prev, newObj]);

  }





  return (
    <div className='p-4'>

      <div className="adds flex justify-end">
        <Button onClick={handleAdd} ripple={true} color='green'>Add User</Button>
      </div>

      <div className="users">
        {users.map((user, i) => {
          return <div key={i}>
            <img src={user.image} alt="" />
            <h1>{user.username}</h1>
          </div>
        })}
      </div>



    </div>
  )
}

export default Home