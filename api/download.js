import fetch from 'node-fetch'

export default function handler(request, response) {
  fetch(`https://www.google-analytics.com?api_secret=${process.env.ANALYTICS_SECRET}&measurement_id=G-P50R59GSVY`, {
    method: 'POST',
    body: JSON.stringify({
      client_id: 'web',
      events: [{
        name: 'download',
        params: {
          filename: 'wakaran-ep12'
        }
      }]
    })
  })
}
