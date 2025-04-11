import { NewAdvertisementForm } from "@/components/ui/new-advertisement-form";

export default function Page() {
  return (
    <div className="max-w-3xl py-10 mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        Post a New Advertisement
      </h1>

      <p className="text-muted-foreground mb-8">
        Fill out the form below to create your advertisement listing.
      </p>

      <NewAdvertisementForm />
    </div>
  );
}
