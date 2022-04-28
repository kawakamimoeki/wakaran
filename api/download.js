import ky from 'ky'

export default async function handler(request, response) {
  await ky.post('https://www.google-analytics.com?api_secret=SC-FSW2mQ9qfws_TjfuiJg&measurement_id=G-P50R59GSVY', {
    body: JSON.stringify({
      client_id: 'web',
      events: [{
        name: 'download',
        params: {
          filename: 'wakaran-ep12',
          response: JSON.stringify(response)
        }
      }]
    })
  }).json()
}
