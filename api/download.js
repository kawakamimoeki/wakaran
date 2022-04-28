export default async function handler(request, response) {
  return 'https://storage.googleapis.com/wakaran/' + request.query.filename
}
