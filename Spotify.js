// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token =
  'BQA0nSW_2h5x9pjXvaqNkiu1MzNo1vG3qwZ0ojuA1b_cikFimZCxEDGcnfVh7Z0lIvdEoh0BsrWPcCFHRY61mmNTgDSWvWAMWHSiYLk_GzFtHDFCDfH5GktEc_zHgaoATrKnnv3cixNbeqMiQ0ZCMBaWHdw-lrqo_QzEontR1L35c9Hhb6KYjGmXu8JmzoD9nZqq1oVBS0HJvn30uAdfPhmtzs7mws0DzdKHWC891vYn6PiEvQIo0-djgQKbGrnSQtg4'
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    method,
    body: JSON.stringify(body)
  })
  return await res.json()
}

async function getTopTracks() {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (
    await fetchWebApi('v1/me/top/tracks?time_range=long_term&limit=5', 'GET')
  ).items
}

const topTracks = await getTopTracks()
console.log(
  topTracks?.map(
    ({ name, artists }) =>
      `${name} by ${artists.map((artist) => artist.name).join(', ')}`
  )
)
