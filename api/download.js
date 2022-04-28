export default async function handler(request, response) {
  return response.redirect('https://storage.googleapis.com/wakaran/' + request.query.filename)
}
