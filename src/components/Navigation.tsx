import { NavLink } from "./NavLink";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navigation = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/shahada", label: "Shahada" },
    { to: "/salah", label: "Salah" },
    { to: "/zakat", label: "Zakat" },
    { to: "/ramadan", label: "Ramadan" },
    { to: "/hajj", label: "Hajj" },
  ];

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="font-amiri text-2xl font-bold text-accent">
            The Five Pillars
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 font-medium"
                activeClassName="text-accent border-b-2 border-accent"
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className="text-foreground hover:text-accent transition-colors duration-200 font-medium text-lg"
                    activeClassName="text-accent"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
