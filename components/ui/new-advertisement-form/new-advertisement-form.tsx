"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FieldHelper } from "@/components/ui/field-helper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  advertisementSchema,
  type AdvertisementForm,
} from "./advertisement-schema";

import { createAdvertisement } from "@/actions/create-advertisement";
import { useToast } from "@/hooks/use-toast";

export function NewAdvertisementForm() {
  const { toast } = useToast();

  const form = useForm<AdvertisementForm>({
    resolver: zodResolver(advertisementSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
    },
  });

  async function onSubmit(values: AdvertisementForm) {
    try {
      await createAdvertisement(values);

      toast({
        title: "Advertisement was successfully posted.",
      });
    } catch {
      toast({
        title: "Something went wrong. Please try again or contact support.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} placeholder="e.g. Brand New iPhone 13 Pro" />
              </FormControl>

              <FormDescription>
                A clear, concise title for your advertisement.
              </FormDescription>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="e.g. Selling a brand new iPhone 13 Pro, 128GB, Graphite color. Comes with original box and accessories..."
                  className="min-h-32"
                />
              </FormControl>

              <FormDescription>
                Provide detailed information about what you are selling.
              </FormDescription>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price ($)</FormLabel>
              <FormControl>
                <Input {...field} placeholder="e.g. 449.99" />
              </FormControl>

              <FormDescription>Enter the price in dollars.</FormDescription>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="block space-y-6 border rounded-md p-4">
          <div className="flex space-x-3">
            <Checkbox id="checkbox" />

            <div className="space-y-2 leading-none">
              <Label htmlFor="checkbox">Allow bidding</Label>

              <FieldHelper>
                Enable this option if you want to allow buyers to bid on your
                item.
              </FieldHelper>
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full md:w-auto">
          Post Advertisement
        </Button>
      </form>
    </Form>
  );
}
