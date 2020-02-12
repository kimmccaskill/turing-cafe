export const getData = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(response => {
      if(!response.ok) {
           throw Error('Error while getting data. Sorry friends...')
      }
     return response.json()
  })
}