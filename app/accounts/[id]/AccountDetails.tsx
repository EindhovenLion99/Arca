import AccountStatusBadge from "@/app/components/AccountStatusBadge";
import type { Account } from "@/prisma/generated/prisma/client";
import { Flex, Heading } from "@radix-ui/themes";

interface Props {
  account: Account;
}

const AccountDetailsPage = ({ account }: Props) => {

  return (
    <>
      <Heading>{account.title}</Heading>
      <Flex className="space-x-3" my="2">
        <AccountStatusBadge status={account.status} />
        <p className="mb-2"><strong>Created At:</strong> {account.createdAt.toDateString()}</p>
      </Flex>
      <p className="mb-2"><strong>Description:</strong> {account.description}</p>
      <p className="mb-2"><strong>IBAN:</strong> {account.IBAN}</p>
    </>
  )
}

export default AccountDetailsPage
