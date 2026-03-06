import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "@tanstack/react-router";
import {
  AlertTriangle,
  Anchor,
  ArrowRight,
  Brain,
  Shield,
  Vote,
} from "lucide-react";

export default function TokenomicsPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full py-20" style={{ backgroundColor: "#0a1628" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              $TMU — The Utility Fuel of TMU AI DAO
            </h1>
            <p className="text-gray-400 text-lg">
              Powering AI services, governance, and digital identity across
              Africa
            </p>
          </div>

          {/* Key Info Box */}
          <Card
            style={{
              backgroundColor: "#1a2744",
              borderColor: "#FFC300",
              borderWidth: "2px",
            }}
            className="mb-16"
          >
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-5xl font-bold text-white mb-2">10B $TMU</p>
                  <p className="text-gray-400 text-lg">Total Supply (Fixed)</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#FFC300] mb-2">
                    $0.10
                  </p>
                  <p className="text-gray-400 text-lg">Token Price</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white mb-2">
                    US$100 = 1000 $TMU
                  </p>
                  <p className="text-gray-400 text-lg">Purchase Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Staking Rewards Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Staking Rewards &amp; Discounts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bronze - 1 Year */}
              <Card
                style={{ backgroundColor: "#1a2744" }}
                className="border-[#CD7F32] hover:shadow-[0_0_20px_rgba(205,127,50,0.3)] transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: "#CD7F32" }}
                  >
                    <span className="text-white text-2xl font-bold">1Y</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#CD7F32] mb-2">
                    10% OFF
                  </h3>
                  <p className="text-white text-xl mb-4">Stake for 1 Year</p>
                  <p className="text-gray-400">1,000 – 9,999 $TMU staked</p>
                </CardContent>
              </Card>

              {/* Silver - 2 Years */}
              <Card
                style={{ backgroundColor: "#1a2744" }}
                className="border-[#C0C0C0] hover:shadow-[0_0_20px_rgba(192,192,192,0.3)] transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: "#C0C0C0" }}
                  >
                    <span className="text-[#0a1628] text-2xl font-bold">
                      2Y
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#C0C0C0] mb-2">
                    25% OFF
                  </h3>
                  <p className="text-white text-xl mb-4">Stake for 2 Years</p>
                  <p className="text-gray-400">10,000 – 99,999 $TMU staked</p>
                </CardContent>
              </Card>

              {/* Gold - 3 Years */}
              <Card
                style={{ backgroundColor: "#1a2744" }}
                className="border-[#FFC300] hover:shadow-[0_0_20px_rgba(255,195,0,0.3)] transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: "#FFC300" }}
                  >
                    <span className="text-[#0a1628] text-2xl font-bold">
                      3Y
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#FFC300] mb-2">
                    50% OFF
                  </h3>
                  <p className="text-white text-xl mb-4">Stake for 3 Years</p>
                  <p className="text-gray-400">100,000+ $TMU staked</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Token Utility Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Token Utility
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* AI Compute Metering */}
              <Card
                style={{ backgroundColor: "#1a2744" }}
                className="border-white/10"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#009B3A" }}
                    >
                      <Brain className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        AI Compute Metering
                      </h3>
                      <p className="text-gray-400">
                        Pay for AI microservices including health diagnostics,
                        educational content, and agricultural guidance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* DID Verification */}
              <Card
                style={{ backgroundColor: "#1a2744" }}
                className="border-white/10"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#3B82F6" }}
                    >
                      <Shield className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        DID Verification
                      </h3>
                      <p className="text-gray-400">
                        Fund decentralized identity verification and credential
                        anchoring on the blockchain.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Credential Anchoring */}
              <Card
                style={{ backgroundColor: "#1a2744" }}
                className="border-white/10"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#FFC300" }}
                    >
                      <Anchor className="text-[#0a1628]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Credential Anchoring
                      </h3>
                      <p className="text-gray-400">
                        Anchor verifiable credentials and records immutably on
                        the Internet Computer Protocol.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Governance Participation */}
              <Card
                style={{ backgroundColor: "#1a2744" }}
                className="border-white/10"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#8B5CF6" }}
                    >
                      <Vote className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Governance Participation
                      </h3>
                      <p className="text-gray-400">
                        Participate in TMU-NNS voting and SubDAO governance with
                        token-weighted voting rights.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Token Flow Diagram */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Token Flow
            </h2>
            <Card
              style={{ backgroundColor: "#1a2744" }}
              className="border-white/10"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                  <div className="text-center">
                    <div
                      className="w-24 h-24 rounded-full mx-auto mb-3 flex items-center justify-center"
                      style={{ backgroundColor: "#009B3A" }}
                    >
                      <span className="text-white text-lg font-bold">User</span>
                    </div>
                  </div>

                  <ArrowRight
                    className="text-[#14B8A6] rotate-90 md:rotate-0"
                    size={32}
                  />

                  <div className="text-center">
                    <div
                      className="w-24 h-24 rounded-full mx-auto mb-3 flex items-center justify-center"
                      style={{ backgroundColor: "#FFC300" }}
                    >
                      <span className="text-[#0a1628] text-lg font-bold">
                        $TMU
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    className="text-[#14B8A6] rotate-90 md:rotate-0"
                    size={32}
                  />

                  <div className="text-center">
                    <div
                      className="w-24 h-24 rounded-full mx-auto mb-3 flex items-center justify-center"
                      style={{ backgroundColor: "#3B82F6" }}
                    >
                      <span className="text-white text-lg font-bold">
                        AI/Service
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    className="text-[#14B8A6] rotate-90 md:rotate-0"
                    size={32}
                  />

                  <div className="text-center">
                    <div
                      className="w-24 h-24 rounded-full mx-auto mb-3 flex items-center justify-center"
                      style={{ backgroundColor: "#EF3E42" }}
                    >
                      <span className="text-white text-sm font-bold">
                        Burn + Vault
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    className="text-[#14B8A6] rotate-90 md:rotate-0"
                    size={32}
                  />

                  <div className="text-center">
                    <div
                      className="w-24 h-24 rounded-full mx-auto mb-3 flex items-center justify-center"
                      style={{ backgroundColor: "#8B5CF6" }}
                    >
                      <span className="text-white text-lg font-bold">
                        Treasury
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer Box */}
          <Card
            style={{
              backgroundColor: "#1a2744",
              borderColor: "#EF3E42",
              borderWidth: "2px",
            }}
            className="mb-8"
          >
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle
                  className="text-[#EF3E42] flex-shrink-0"
                  size={32}
                />
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    ⚠️ IMPORTANT: $TMU is a UTILITY TOKEN, not an investment.
                  </h3>
                  <ul className="space-y-2 text-white">
                    <li className="flex items-start">
                      <span className="text-[#EF3E42] mr-2">•</span>
                      <span>No equity ownership</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#EF3E42] mr-2">•</span>
                      <span>No dividends or profit sharing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#EF3E42] mr-2">•</span>
                      <span>Required only to access TMU services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#EF3E42] mr-2">•</span>
                      <span>Not a security or financial instrument</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => navigate({ to: "/signup" })}
              className="text-white font-bold px-10 py-4 rounded-lg transition-colors text-lg"
              style={{ backgroundColor: "#FFC300", color: "#0a1628" }}
            >
              Sign Up to Purchase $TMU
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
