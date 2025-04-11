import prisma from "../lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await prisma.advertisement.findMany();

  return (
    <div className="max-w-3xl py-10 mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        Browse Advertisements
      </h1>

      <p className="text-muted-foreground mb-8">
        Find what you are looking for from our wide range of advertisements.
      </p>

      <div className="[&>*+*]:border-t">
        {data.map((advertisement) => (
          <div key={advertisement.id} className="py-4 px-6">
            <div className="flex items-center justify-between ">
              <div>
                <h2 className="text-xl font-semibold">{advertisement.title}</h2>

                <p className="text-sm text-muted-foreground">
                  {advertisement.description}
                </p>
              </div>

              <p className="font-semibold">
                $ {advertisement.price.toString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
