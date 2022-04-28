export default async function handler(request, response) {
  console.log(request)
  response.status(200).json('OK')
}
