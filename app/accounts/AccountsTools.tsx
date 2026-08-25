import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import { FaCreditCard } from "react-icons/fa";

const AccountsTools = () => {
  return (
    <div className="mb-5 flex gap-3">
      <Button><Link href="/accounts/new">New Account</Link></Button>
      <Button><Link href="/accounts/card"><FaCreditCard /></Link></Button>
    </div>
  )
}

export default AccountsTools
