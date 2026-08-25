import AccountStatusBadge from "@/app/components/AccountStatusBadge";
import type { Account } from "@/prisma/generated/prisma/client";
import CardImage from "./CardImage";

interface Props {
  account: Account;
}

const AccountCardDetailsPage = ({ account }: Props) => {
  return (
    <div>
      <CardImage color="#B8941F">
        <foreignObject x="30" y="30" width="280" height="35">
          <div className="truncate text-lg font-semibold">
            {account.title}
          </div>
        </foreignObject>
        
        <foreignObject x="315" y="30" width="100" height="40">
          <AccountStatusBadge status={account.status} />
        </foreignObject>

        <text x="30" y="90" fill="currentColor">
          {account.IBAN}
        </text>

        <text x="30" y="140" fill="lightgrey">
          {account.description}
        </text>

        <text x="30" y="210" fill="lightgrey">
          {account.createdAt.toLocaleDateString()}
        </text>
      </CardImage>
    </div>
  )
}

export default AccountCardDetailsPage

