"use client"

import { Button, Callout, TextArea, TextField } from "@radix-ui/themes"
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/dist/client/components/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAccountSchema } from "@/app/validationSchemas";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

type AccountForm = z.infer<typeof createAccountSchema>;

const NewAccountPage = () => {

  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<AccountForm>({
    resolver: zodResolver(createAccountSchema),
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data: AccountForm) => {
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
        <TextField.Root placeholder="Title" {...register("title")}/>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <TextArea placeholder="Description" {...register("description")}/>
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <TextField.Root placeholder="IBAN" {...register("IBAN")}/>
        <ErrorMessage>{errors.IBAN?.message}</ErrorMessage>
        
        <Button disabled={isSubmitting}>Create Account{isSubmitting && <Spinner/>}</Button>
      </form>
    </div>
  )
}

export default NewAccountPage
