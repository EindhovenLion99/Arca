import AccountPagesTools from "@/app/accounts/AccountsTools";
import { prisma } from "@/lib/prisma";
import AccountCardDetailsPage from "./AccountCardDetails";

const AccountPage = async () => {
  const accounts = await prisma.account.findMany();
  return (
    <div>
      <AccountPagesTools />
      <div className="flex flex-wrap gap-3">
        {accounts.map((account) => (
          <AccountCardDetailsPage
            key={account.id}
            account={account}
          />
        ))}
      </div>
    </div>
  )
}

export default AccountPage

