"use server";

import prisma from "@/lib/prisma";
import { AdvertisementForm } from "@/components/ui/new-advertisement-form/advertisement-schema";

export async function createAdvertisement(advertisement: AdvertisementForm) {
  await prisma.advertisement.create({
    data: {
      title: advertisement.title,
      description: advertisement.description,
      price: advertisement.price,
    },
  });
}
