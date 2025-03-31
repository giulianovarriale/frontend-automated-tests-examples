import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FieldHelper } from "@/components/ui/field-helper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function NewAdvertisementForm() {
  return (
    <form className="space-y-8">
      <div className="space-y-2">
        <Label>Title</Label>
        <Input placeholder="e.g. Brand New iPhone 13 Pro" />

        <FieldHelper>
          A clear, concise title for your advertisement.
        </FieldHelper>
      </div>

      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea
          placeholder="Describe your item or service in detail..."
          className="min-h-32"
        />

        <FieldHelper>
          Provide detailed information about what you're selling.
        </FieldHelper>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Price ($)</Label>
          <Input placeholder="99.99" />

          <FieldHelper>Enter the price in dollars.</FieldHelper>
        </div>
      </div>

      <Label className="block space-y-6 border rounded-md p-4">
        <div className="flex space-x-3">
          <Checkbox />

          <div className="space-y-2 leading-none">
            <div>Allow bidding</div>

            <FieldHelper>
              Enable this option if you want to allow buyers to bid on your
              item.
            </FieldHelper>
          </div>
        </div>
      </Label>

      <Button type="submit" className="w-full md:w-auto">
        Post Advertisement
      </Button>
    </form>
  );
}
