import React, { memo } from 'react'

const Child = () => {
  console.log('child render')
  return (
    <div>

      <h1>hello world</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad recusandae libero ullam quo dolores ratione delectus culpa provident quis.</p>
    </div>
  )
}

export default memo(Child)