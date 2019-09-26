const SEND_IN_BLUE_API = `https://api.sendinblue.com/v3/contacts`

const GOOGLE_SHEET_URL = `https://script.google.com/macros/s/AKfycbx3N8BregQYEq3CkBC1_IC59BVAg0HWiE6GtUOKRQgTFF-pTtk/exec`

export default function apiCall(url, method = 'GET', body = {}) {
  console.log(`Key: ${process.env.GATSBY_SB_API_KEY}`)
  return fetch(url, {
    method,
    headers: {
      'api-key': process.env.GATSBY_SB_API_KEY,
      'content-type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}

export function addContact(body) {
  return apiCall(SEND_IN_BLUE_API, 'POST', body)
}

export function saveToGoogleSheet(data = {}) {
  const {
    firstName = '',
    lastName = '',
    email = '',
    company = '',
    phone = '+61',
    employees = 0,
    referrer = 'google'
  } = data

  const url = `${GOOGLE_SHEET_URL}?Date=${encodeURIComponent(
    new Date().toUTCString()
  )}&FirstName=${encodeURIComponent(firstName)}&LastName=${encodeURIComponent(
    lastName
  )}&Email=${encodeURIComponent(email)}&Company=${encodeURIComponent(
    company
  )}&Phone=${encodeURIComponent(phone)}&Employees=${encodeURIComponent(
    employees
  )}&Referrer=${encodeURIComponent(
    referrer
  )}`

  return fetch(url)
    .then(res => res.json())
    .then(res => console.log({ res }))
    .catch(error => console.error(error))
}
