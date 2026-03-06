import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", path: "/" as const },
    { label: "White Paper", path: "/whitepaper" as const },
    { label: "Tokenomics", path: "/tokenomics" as const },
    { label: "Projects/SubDAOs", path: "/projects" as const },
    { label: "Road Map", path: "/roadmap" as const },
    { label: "Web2-Web3 Bridge", path: "/bridge" as const },
    { label: "Resources", path: "/resource" as const },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/10"
      style={{ backgroundColor: "#0a1628" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/assets/generated/tmu-ai-dao-logo-transparent.dim_200x200.png"
              alt="TMU AI DAO"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-white">TMU AI DAO</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 text-sm font-medium transition-colors rounded-md text-gray-300 hover:text-white hover:bg-white/5 [&.active]:text-white [&.active]:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              type="button"
              className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/5"
              onClick={() => navigate({ to: "/signup" })}
            >
              Sign Up
            </button>
            <button
              type="button"
              className="border border-[#FFC300] text-[#FFC300] hover:bg-[#FFC300] hover:text-[#0a1628] px-4 py-2 rounded-md text-sm font-medium transition-colors"
              onClick={() => navigate({ to: "/signup" })}
            >
              Join TMU AI DAO
            </button>
            <button
              type="button"
              className="text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              style={{ backgroundColor: "#009B3A" }}
              onClick={() => navigate({ to: "/" })}
            >
              Launch App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button type="button" className="text-white p-2">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-white/10 w-72"
                style={{ backgroundColor: "#0a1628" }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6 pt-2">
                    <span className="text-white font-bold text-lg">
                      TMU AI DAO
                    </span>
                    <SheetClose asChild>
                      <button
                        type="button"
                        className="text-gray-400 hover:text-white"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </SheetClose>
                  </div>

                  <nav className="flex flex-col space-y-2 flex-1">
                    {navLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="px-3 py-2 text-sm font-medium transition-colors rounded-md text-gray-300 hover:text-white hover:bg-white/5 [&.active]:text-white [&.active]:bg-white/10"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-white/10">
                    <button
                      type="button"
                      className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      onClick={() => {
                        navigate({ to: "/signup" });
                        setIsOpen(false);
                      }}
                    >
                      Sign Up
                    </button>
                    <button
                      type="button"
                      className="border border-[#FFC300] text-[#FFC300] hover:bg-[#FFC300] hover:text-[#0a1628] px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      onClick={() => {
                        navigate({ to: "/signup" });
                        setIsOpen(false);
                      }}
                    >
                      Join TMU AI DAO
                    </button>
                    <button
                      type="button"
                      className="text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      style={{ backgroundColor: "#009B3A" }}
                      onClick={() => {
                        navigate({ to: "/" });
                        setIsOpen(false);
                      }}
                    >
                      Launch App
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
