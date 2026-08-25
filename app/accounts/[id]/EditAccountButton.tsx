import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { BsPencilSquare } from "react-icons/bs";

interface Props {
  accountId: number;
}

const EditAccountButton = ({ accountId }: Props) => {
  return (
    <Button><BsPencilSquare/><Link href={`/accounts/${accountId}/edit`}>Edit Account</Link></Button>
  )
}

export default EditAccountButton