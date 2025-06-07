import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Title</h1>
      <Button>button</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <p>some text</p>
    </div>
  );
}
