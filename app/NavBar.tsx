'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { CiMoneyCheck1 } from "react-icons/ci";
import classnames from 'classnames';
import ThemeToggle from './components/ThemeToggle';


const NavBar = () => {

  const currentPath = usePathname();

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
          className={classnames({
            'underline': link.href === currentPath,
            'hover:text-zinc-500 transition-colors': true, 
          })}
          href={link.href}>{link.label}</Link>
        )}
      </ul>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default NavBar
