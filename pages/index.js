import { connectToMongodb } from '../utils/connectToMongodb'
import Layout from '../components/layout'



export default function Home({ users }) {

  const postData = async () => {
    const res = await fetch("http://localhost:3000/api/input"/*, {
      /*method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    }*/ 
    )
  
  }
 
  /*const register = async (req, res) => {
    try {
      const { name} = req.body

      const newUser = new Users({
        name
      })
      
      await newUser.save()
      
  
    } catch (error) {
        return res.status(500).json({err: err.message})
    }
  }*/

  


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
      <button onClick={postData} >click</button>
      </main>
    </Layout>
  )
}

      
export async function getServerSideProps(context) {
  
  const { db } = await connectToMongodb();
  const users = await db.collection("users").find({}).toArray();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users))
    },
  };
}