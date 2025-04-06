"use server";

import { AdvertisementForm } from "@/components/ui/new-advertisement-form/advertisement-schema";

export async function createAdvertisement(advertisement: AdvertisementForm) {
  console.log("persist advertisement", advertisement);
}
