"use client"

import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { createAccountSchema } from "@/app/validationSchemas";
import type { Account } from "@/prisma/generated/prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, TextArea, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/dist/client/components/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type AccountFormData = z.infer<typeof createAccountSchema>;

interface Props {
  account?: Account
}

const AccountForm = ({ account }: Props) => {

  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<AccountFormData>({
    resolver: zodResolver(createAccountSchema),
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data: AccountFormData) => {
    try {
      setIsSubmitting(true);
      await axios.post("/api/accounts", data);
      router.push("/accounts");
    } catch (error) {
      setIsSubmitting(false);
      setError('An unexpected error occurred.');
    }
  });

  return (
    <div className="max-w-xl">
      {error && <Callout.Root className="mb-5" color="red"><Callout.Text>{error}</Callout.Text></Callout.Root>}
      <form className="space-y-3" onSubmit={onSubmit}>
        <TextField.Root defaultValue={account?.title} placeholder="Title" {...register("title")}/>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <TextArea defaultValue={account?.description} placeholder="Description" {...register("description")}/>
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <TextField.Root defaultValue={account?.IBAN} placeholder="IBAN" {...register("IBAN")}/>
        <ErrorMessage>{errors.IBAN?.message}</ErrorMessage>
        
        <Button disabled={isSubmitting}>Create Account{isSubmitting && <Spinner/>}</Button>
      </form>
    </div>
  )
}

export default AccountForm
