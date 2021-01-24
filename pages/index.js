import { connectToMongodb } from '../utils/connectToMongodb'
import Layout from '../components/layout'

export default function Home({ isConnected }) {
  return (
    <Layout>
      <main>
      <div>Hi</div>
      {isConnected && <div>connected with mongoDB...FUCK</div>}
      </main>
    </Layout>
  )
}

      
export async function getServerSideProps(context) {
  const { client } = await connectToMongodb()

  const isConnected = await client.isConnected() // Returns true or false

  return {
    props: { isConnected },
  }
}