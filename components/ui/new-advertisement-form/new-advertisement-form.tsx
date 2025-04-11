import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FieldHelper } from "@/components/ui/field-helper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fieldIds = {
  title: "title",
  description: "description",
  price: "price",
};

export function NewAdvertisementForm() {
  return (
    <form className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor={fieldIds.title}>Title</Label>

        <Input id={fieldIds.title} placeholder="e.g. Brand New iPhone 13 Pro" />

        <FieldHelper>
          A clear, concise title for your advertisement.
        </FieldHelper>
      </div>

      <div className="space-y-2">
        <Label htmlFor={fieldIds.description}>Description</Label>

        <Textarea
          id={fieldIds.description}
          placeholder="Describe your item or service in detail..."
          className="min-h-32"
        />

        <FieldHelper>
          Provide detailed information about what you are selling.
        </FieldHelper>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={fieldIds.price}>Price ($)</Label>
          <Input id={fieldIds.price} placeholder="99.99" />

          <FieldHelper>Enter the price in dollars.</FieldHelper>
        </div>
      </div>

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
  );
}
