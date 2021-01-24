import { connectToMongodb } from '../utils/connectToMongodb'
import Layout from '../components/layout'

export default function Home({ users }) {
  

  
  return (
    <Layout>
      <main>
      <div>Hi</div>
      {users.map((user) => (
        <div>
        <div>{user.name}</div>
        <div>{user.email}</div>
        </div>
      ))}
      <button>click</button>
      </main>
    </Layout>
  )
}

      
export async function getServerSideProps(context) {
  
  const { db } = await connectToMongodb();
  
  const users = await db.collection("users").find({}).toArray();

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}