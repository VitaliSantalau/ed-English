import { connectToMongodb } from '../utils/connectToMongodb'
import Layout from '../components/layout'
import Header from '../components/header'



export default function Home() {

  /*
  const res = await postData('auth/register', userData)

  export const postData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Autorization': token
    },
    body: JSON.stringify(post)
  })

  const data = await res.json()
  return data
}

const register = async (req, res) => {
  try {
    const { name, email, password, cf_password } = req.body

    const errMsg = valid(name, email, password, cf_password)
    if(errMsg) return res.status(400).json({err: errMsg})

    const checkUser = await Users.findOne({ email })
    if(checkUser) return res.status(400).json({err: 'This email already exists'})

    const passwordHash =await bcrypt.hash(password, 12)

    const newUser = new Users({
      name, email, password: passwordHash, cf_password
    })
    
    await newUser.save()
    res.json({msg: "Register success"})

  } catch (error) {
      return res.status(500).json({err: err.message})
  }
}
  */

  return (
    <Layout>
      <Header />
      <main>
        <div>Hi, man</div>
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