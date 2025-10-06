import Navbar from "../Navbar";
import { ThemeProvider } from "../ThemeProvider";

export default function NavbarExample() {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="p-8">
        <p className="text-muted-foreground">Scroll down to see the navbar in action.</p>
      </div>
    </ThemeProvider>
  );
}
