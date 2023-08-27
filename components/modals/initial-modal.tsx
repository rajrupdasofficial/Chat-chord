"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "A minimum 3 character Server name required",
  }),
  imageUrl: z.string().min(1, {
    message: "Server image Required",
  }),
});

export const InitialModal = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Dialog open>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold px-5 py-5">
            Customize Your server
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Give your server some details - remember you can always change it
            later
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
              <div className="flex items-center justify-center text-center">
                TODO: Image Upload
              </div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => <FormItem></FormItem>}
              />
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
