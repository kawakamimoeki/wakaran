import fetch from 'node-fetch'

export default async function handler(request, response) {
  const res = await fetch(`https://www.google-analytics.com/mp/collect?api_secret=${process.env.ANALYTICS_SECRET}&measurement_id=G-P50R59GSVY`, {
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

  const result = await res.text()
  response.status(200).json(result)
}
