import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";


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
      <h1 className="text-2xl font-bold mb-4">{account.title}</h1>
      <p className="mb-2"><strong>Description:</strong> {account.description}</p>
      <p className="mb-2"><strong>IBAN:</strong> {account.IBAN}</p>
      <p className="mb-2"><strong>Status:</strong> {account.status}</p>
      <p className="mb-2"><strong>Created At:</strong> {account.createdAt.toDateString()}</p>
    </div>
  )
}

export default AccountDetailsPage
