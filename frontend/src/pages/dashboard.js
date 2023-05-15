import Link from 'next/link';
import Main from './components/menu'
import useRouter from 'next/router'

export default function Dashboard() {

  const router = useRouter;

  return (
    <div className="flex h-screen flex-col font-philo text-yellow">
      <div className=" flex flex-row w-screen h-20 justify-between flex-row font-color bg-black text-yellow text-6xl"></div>
  )
}
