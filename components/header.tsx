import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto h-16 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6" />
          <span className="text-xl font-bold">Marketplace</span>
        </Link>

        <div className="flex gap-2">
          <Link href="/" passHref>
            <Button variant="outline">Browse advertisements</Button>
          </Link>

          <Link href="/advertisements/new" passHref>
            <Button>New advertisement</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
