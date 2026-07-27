import Link from 'next/link'
import { CiMoneyCheck1 } from "react-icons/ci";


const NavBar = () => {

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Accounts', href: '/accounts' },
  ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href="/"><CiMoneyCheck1/></Link>
      <ul className='flex space-x-6'>
        {links.map(link => 
          <Link key={link.href}
          className='hover:text-zinc-500 transition-colors'
          href={link.href}>{link.label}</Link>
        )}
      </ul>
    </nav>
  )
}

export default NavBar