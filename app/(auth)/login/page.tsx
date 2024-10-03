"use client";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "@/lib/formSchemas";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

const loginUser = async (data: z.infer<typeof loginSchema>) => {
  const response = await axios.post("/api/user/login", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const page = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "djawad",
      password: "hello123",
    },
  });
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("Login successful", data);
      router.push("/");
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    mutation.mutate(data);
  };
  return (
    <main className="grid place-items-center min-h-screen">
      <Card className="max-w-[30rem]">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormInput form={form} name="username" placeholder="enter your username" label="username" />
              <FormInput form={form} name="password" placeholder="enter your password" label="password" />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
};
export default page;
