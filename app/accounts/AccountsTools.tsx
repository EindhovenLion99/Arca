import { Button } from '@radix-ui/themes'
import Link from 'next/link'

const AccountsTools = () => {
  return (
    <div className="mb-5">
      <Button><Link href="/accounts/new">New Account</Link></Button>
    </div>
  )
}

export default AccountsTools
