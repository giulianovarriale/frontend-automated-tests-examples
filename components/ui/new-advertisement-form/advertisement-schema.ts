import { z } from "zod";

export const advertisementSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  price: z
    .number({
      coerce: true,
      message: "Please enter a valid price (e.g 99.99)",
    })
    .min(0.5, "Price must be at least $0.50"),
});

export type AdvertisementForm = z.infer<typeof advertisementSchema>;
