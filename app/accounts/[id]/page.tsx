import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import AccountDetails from "./AccountDetails";
import EditAccountButton from "./EditAccountButton";

interface Props {
  params: Promise<{ id: string }>
}

const AccountDetailsPage = async ({ params }: Props) => {
  const { id } = await params;

  if (!id || isNaN(parseInt(id))) {
    notFound()
  }

  const account = await prisma.account.findUnique({
    where: { id: parseInt(id) }
  })

  if (!account) {
    notFound()
  }

  return (
    <div>
      <AccountDetails account={account} />
      <EditAccountButton accountId={account.id} />
    </div>
  )
}

export default AccountDetailsPage
