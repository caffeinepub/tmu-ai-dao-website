import HeroIllustration from "@/components/HeroIllustration";
import IoMPopup from "@/components/IoMPopup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const [isIoMPopupOpen, setIsIoMPopupOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Hero Section with 2D Illustration */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0a1628 0%, #0f172a 100%)",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Content */}
            <div className="space-y-6">
              <Badge
                className="text-white font-semibold px-4 py-1.5 text-sm"
                style={{ backgroundColor: "#009B3A" }}
              >
                Powered by ICP
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                TMU AI DAO is a Profitable thing to do for all parties
                concerned.
              </h1>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-white mt-2" />
                  <p className="text-gray-300 text-lg">
                    You get best value for your money that you would spend for
                    payment for services that you normally would need to use.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-400 mt-2" />
                  <p className="text-gray-400 text-lg">
                    Your money spend helps build a Global Social Enterprise
                    dedicated to Nation Building and Social Edification
                    addressing the crises of many sectors.
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="text-white text-lg px-8 py-6 font-semibold group"
                style={{
                  background:
                    "linear-gradient(135deg, #009B3A 0%, #FFC300 100%)",
                  border: "none",
                }}
                onClick={() => navigate({ to: "/signup" })}
              >
                Join the Movement
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </div>

            {/* Right Side 2D Illustration */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* A Global Social Enterprise Section */}
      <section
        className="py-20 md:py-32"
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                A truly Global Social Enterprise
              </h2>

              <p className="text-white text-lg leading-relaxed">
                TMU AI DAO is a IoM Hybrid Company
                <button
                  type="button"
                  onClick={() => setIsIoMPopupOpen(true)}
                  className="text-[#FFC300] hover:text-[#FF8C00] transition-colors cursor-pointer font-bold ml-0.5"
                  aria-label="Learn more about IoM Hybrid Company"
                >
                  *
                </button>{" "}
                designed to endure as a social organization engendering social
                good for all time.
              </p>

              <p className="text-white text-lg leading-relaxed">
                You can Participate in it as a stakeholder, a builder and a doer
                in Nation Building &amp; Social Edification{" "}
                <span
                  className="font-semibold"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFC300 0%, #FF8C00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  with as little spend as US$100 for 1000 $TMU Utility Tokens
                </span>
                .
              </p>

              <Button
                size="lg"
                className="text-white text-lg px-8 py-6 font-semibold group mt-4"
                style={{
                  background:
                    "linear-gradient(135deg, #FFC300 0%, #FF8C00 100%)",
                  border: "none",
                }}
                onClick={() => navigate({ to: "/signup" })}
              >
                Join the Movement
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </div>

            {/* Right Side Illustration */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
              <img
                src="/assets/generated/global-social-enterprise-illustration.dim_800x600.png"
                alt="Global Social Enterprise - Stakeholder, Builder, Doer"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* IoM Hybrid Company Popup */}
      <IoMPopup
        open={isIoMPopupOpen}
        onClose={() => setIsIoMPopupOpen(false)}
      />

      {/* Impact Section */}
      <section
        className="py-20 md:py-32"
        style={{
          background: "linear-gradient(180deg, #0a1628 0%, #0f172a 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          {/* Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
            {/* Statistic 1: 10B */}
            <div className="text-center space-y-3">
              <div
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ color: "#FFC300" }}
              >
                10B
              </div>
              <div
                className="text-base md:text-lg"
                style={{ color: "#9CA3AF" }}
              >
                $TMU Total Supply
              </div>
            </div>

            {/* Statistic 2: ICP */}
            <div className="text-center space-y-3">
              <div
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ color: "#FFFFFF" }}
              >
                ICP
              </div>
              <div
                className="text-base md:text-lg"
                style={{ color: "#9CA3AF" }}
              >
                Built on Internet Computer
              </div>
            </div>

            {/* Statistic 3: IoM Hybrid */}
            <div className="text-center space-y-3">
              <div
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ color: "#FFC300" }}
              >
                IoM Hybrid
              </div>
            </div>

            {/* Statistic 4: 1B */}
            <div className="text-center space-y-3">
              <div
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ color: "#FFFFFF" }}
              >
                1B
              </div>
              <div
                className="text-base md:text-lg"
                style={{ color: "#9CA3AF" }}
              >
                People to Serve
              </div>
            </div>
          </div>

          {/* Chapter Countries Footer */}
          <div className="text-center pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-base md:text-lg text-white">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇷🇼</span>
                <span>Rwanda</span>
              </div>
              <span className="text-gray-600">|</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇳🇬</span>
                <span>Nigeria</span>
              </div>
              <span className="text-gray-600">|</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇲🇦</span>
                <span>Morocco</span>
              </div>
              <span className="text-gray-600">|</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇰🇪</span>
                <span>Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section
        className="py-20 md:py-32"
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Value Propositions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AI-Powered Services Card */}
            <Card
              style={{ backgroundColor: "#1a2744" }}
              className="border-white/10 hover:border-[#009B3A] transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/assets/generated/ai-brain-icon-transparent.dim_64x64.png"
                    alt="AI Brain Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-white text-xl mb-3">
                  AI-Powered Services
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  Health, Education, Agriculture, Finance - AI microservices for
                  essential needs
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Decentralized Identity Card */}
            <Card
              style={{ backgroundColor: "#1a2744" }}
              className="border-white/10 hover:border-[#009B3A] transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/assets/generated/digital-id-icon-transparent.dim_64x64.png"
                    alt="Digital ID Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-white text-xl mb-3">
                  Decentralized Identity
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  Multi-country digital identity with ZK proofs and verifiable
                  credentials
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Web2 to Web3 Bridge Card */}
            <Card
              style={{ backgroundColor: "#1a2744" }}
              className="border-white/10 hover:border-[#009B3A] transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/assets/generated/web2-web3-bridge-icon-transparent.dim_64x64.png"
                    alt="Web2 to Web3 Bridge Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-white text-xl mb-3">
                  Web2 to Web3 Bridge
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  Seamless transition from traditional systems to
                  blockchain-powered solutions
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Community Governance Card */}
            <Card
              style={{ backgroundColor: "#1a2744" }}
              className="border-white/10 hover:border-[#009B3A] transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/assets/generated/community-governance-icon-transparent.dim_64x64.png"
                    alt="Community Governance Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-white text-xl mb-3">
                  Community Governance
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  Democratic decision-making through TMU-NNS and sector-specific
                  SubDAOs
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 md:py-32"
        style={{
          background: "linear-gradient(180deg, #0a1628 0%, #0f172a 100%)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of community members, developers, and social
            entrepreneurs building the future of decentralized social impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="text-white text-lg px-8 py-6 font-semibold group"
              style={{
                background: "linear-gradient(135deg, #009B3A 0%, #FFC300 100%)",
                border: "none",
              }}
              onClick={() => navigate({ to: "/signup" })}
            >
              Join TMU AI DAO Today
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 font-semibold"
              onClick={() => navigate({ to: "/tokenomics" })}
            >
              View Tokenomics
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
