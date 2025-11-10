import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <footer className="bg-primary text-primary-foreground py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">Creative Assignment for World Religions</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
