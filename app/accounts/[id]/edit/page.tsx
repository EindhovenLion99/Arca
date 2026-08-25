import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import AccountForm from '../../_components/AccountForm';

interface Props {
  params: Promise<{ id: string }>
}

const EditAccountPage = async ({ params }: Props) => {
  const { id } = await params;

  if (!id || isNaN(parseInt(id))) {
    notFound()
  }

  const account = await prisma.account.findUnique({
    where: { id: parseInt(id) }
  })

  if (!account) notFound()

  return (
    <AccountForm account={account}/>
  )
}

export default EditAccountPage
