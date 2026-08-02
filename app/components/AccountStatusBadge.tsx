import { Badge } from '@radix-ui/themes'
import { Status } from '@/prisma/generated/prisma/enums'

const statusMap: Record<Status, { color: 'red' | 'green' | 'gray'; label: string }> = {
  ACTIVE: { color: 'green', label: 'Active' },
  INACTIVE: { color: 'red', label: 'Inactive' },
}

const AccountStatusBadge = ({ status }: { status: Status }) => {
  const { color, label } = statusMap[status] || { color: 'gray', label: 'Unknown' };
  return (
    <div><Badge color={color}>{label}</Badge></div>
  )
}

export default AccountStatusBadge
