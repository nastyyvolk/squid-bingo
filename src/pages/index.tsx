import { App } from '../components/app'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <App />
    </>
  )
}
