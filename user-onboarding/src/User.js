import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your user&apos;s details...</h3>
  }

  return (
    <div className='user container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
     

      {
        !!details.termsOfService && !!details.termsOfService.length &&
        <div>
          Terms Of Service:
          <ul>
            {details.termsOfService.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default User; 