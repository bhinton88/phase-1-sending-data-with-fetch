// Add your code here

function submitData(userName, userEmail) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    }),
  })
  .then(response => response.json())
  .then(json => appendID(json))
  .catch(error => appendError(error))
}

function appendID (object) {
  let body = document.querySelector('body');
  let h1 = document.createElement('h1')
  h1.textContent = object["id"]
  body.appendChild(h1)
}

function appendError (object) {
  let body = document.querySelector('body');
  let h1 = document.createElement('h1')
  h1.textContent = object["message"]
  body.appendChild(h1)
}