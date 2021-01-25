import { connectToMongodb } from '../utils/connectToMongodb'
import Layout from '../components/layout'


export default function Home({ users }) {

/*const res = await postData('auth/register', userData) 


  export const postData = async (url='auth/register', userData) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    })
  
    const data = await res.json()
    return data
  }
 
connectToMongodb ()

  const register = async (req, res) => {
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
      <button >click</button>
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