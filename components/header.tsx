import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto h-16 py-4">
        <Link href="/" className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6" />
          <span className="text-xl font-bold">Marketplace</span>
        </Link>
      </div>
    </header>
  );
}
