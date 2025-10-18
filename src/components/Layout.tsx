import { ReactNode } from "react";
import SimpleHeader from "./SimpleHeader";
import SimpleFooter from "./SimpleFooter";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SimpleHeader />
      <main className="flex-1 overflow-x-hidden">{children}</main>
      <SimpleFooter />
    </div>
  );
};

export default Layout;
