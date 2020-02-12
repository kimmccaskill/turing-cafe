export const getRes = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(response => {
      if(!response.ok) {
           throw Error('Error while getting data. Sorry friends...')
      }
     return response.json()
  })
}

export const postRes = reservation => {
  const options = {
    method: 'POST',
    body: JSON.stringify(reservation),
    headers: {
      'Content-Type': 'application/json'
    }
};

return fetch('http://localhost:3001/api/v1/reservations', options)
  .then(response => {
      if (!response.ok) {
          throw Error('Errow while fetching. Sorry friends...')
      }
      return response.json()}
  )
};