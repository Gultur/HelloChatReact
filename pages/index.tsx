import type { NextPage } from 'next'
import Chat from './components/Chat'

const Home: NextPage = () => {
  console.log("render page")

  return (
    <main>
        <Chat/>
    </main>
  )
}

export default Home
