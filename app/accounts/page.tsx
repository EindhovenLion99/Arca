import { Button } from "@radix-ui/themes";
import Link from "next/link";

const AccountPage = () => {
  return (
    <div><Button><Link href="/accounts/new">New Account</Link></Button></div>
  )
}

export default AccountPage
