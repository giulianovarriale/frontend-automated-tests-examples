import { NewAdvertisementForm } from "@/components/new-advertisement-form";

export default function Home() {
  return (
    <div className="max-w-3xl py-10 mx-auto">
      <div className="flex flex-col">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Post a New Advertisement
          </h1>
          <p className="text-muted-foreground mt-2">
            Fill out the form below to create your advertisement listing.
          </p>
        </div>

        <NewAdvertisementForm />
      </div>
    </div>
  );
}
