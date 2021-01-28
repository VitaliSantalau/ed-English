import { connectToMongodb } from '../utils/connectToMongodb'
import Layout from '../components/layout'
import Header from '../components/header'
import { signIn, signOut, useSession } from 'next-auth/client'



export default function Home() {

  const [session, loading] = useSession()

  if (loading) {
    return (
      <Layout>
        <Header />
        <main>
          <div>Hi, man</div>
          <p>Loading...</p>
        </main>
      </Layout>
    )
  }

    return (
    <Layout>
      <Header />
      <main>
        <div>Hi, man</div>
        <>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={signIn}>Sign in</button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <button onClick={signOut}>Sign out</button>
          </>
        )}
        </>
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