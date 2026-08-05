import { prisma } from "@/lib/prisma";
import { Table } from "@radix-ui/themes";
import AccountStatusBadge from "@/app/components/AccountStatusBadge";
import AccountPagesTools from "./AccountsTools";
import Link from "@/app/components/Link";

const AccountPage = async () => {
  const accounts = await prisma.account.findMany();
  return (
    <div>
      <AccountPagesTools />
      <Table.Root className="mb-5" variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Account</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">IBAN</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Created At</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {accounts.map((account) => (
            <Table.Row key={account.id}>
              <Table.Cell><Link href={`/accounts/${account.id}`}>{account.title}</Link></Table.Cell>
              <Table.Cell className="hidden md:table-cell">{account.description}</Table.Cell>
              <Table.Cell className="hidden md:table-cell">{account.IBAN}</Table.Cell>
              <Table.Cell className="hidden md:table-cell"><AccountStatusBadge status={account.status}/></Table.Cell>
              <Table.Cell className="hidden md:table-cell">{account.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default AccountPage
