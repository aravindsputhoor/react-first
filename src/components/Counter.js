import React from 'react'

function Counter({title, count}) {
  // const {title, count} = props;
  return (
    <div>
      <h5>{title}: {count} </h5>
    </div>
  )
}

export default Counter