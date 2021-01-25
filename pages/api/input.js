import { connectToMongodb } from '../../utils/connectToMongodb'


export default async function handler(req, res) {
  
  const { db } = await connectToMongodb()

  const data = await db.collection("users").insertOne({ name: "x", email: "x0" })

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify("success"))
}