import { ThemeProvider } from "../ThemeProvider";
import { Button } from "@/components/ui/button";

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <div className="p-8">
        <h3 className="text-lg font-semibold mb-4">Theme Provider Example</h3>
        <p className="text-muted-foreground">This provider enables dark/light mode switching throughout the app.</p>
        <Button className="mt-4">Sample Button</Button>
      </div>
    </ThemeProvider>
  );
}
