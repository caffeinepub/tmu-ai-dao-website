import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download, BookOpen, Vote, Users, Wallet } from 'lucide-react';
import { useGetResourcePageContent } from '../hooks/useQueries';

export default function ResourcePage() {
  const { data: content, isLoading } = useGetResourcePageContent();

  // Icon mapping for guides
  const guideIcons: Record<string, React.ElementType> = {
    'Getting Started with TMU': BookOpen,
    'Creating Your Wallet': Wallet,
    'Staking $TMU': FileText,
    'Voting & Governance': Vote,
    'Joining a SubDAO': Users,
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0a1628' }}>
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full py-20" style={{ backgroundColor: '#0a1628' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Resources & Documentation
            </h1>
            <p className="text-lg" style={{ color: '#9CA3AF' }}>
              Everything you need to understand and participate in TMU AI DAO
            </p>
          </div>

          {/* Section 1: TMU Technical Architecture */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              TMU Technical Architecture
            </h2>
            <div className="relative">
              {/* Architecture Diagram Image */}
              <div className="mb-8 flex justify-center">
                <img
                  src="/assets/generated/tmu-technical-architecture-diagram.dim_800x600.png"
                  alt="TMU Technical Architecture"
                  className="rounded-lg max-w-full h-auto"
                />
              </div>

              {/* Architecture Layers */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {content?.architectureLayers.map((layer, index) => (
                  <Card
                    key={index}
                    className="border-white/10 hover:border-[#009B3A]/50 transition-all duration-300"
                    style={{ backgroundColor: '#1a2744' }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: '#009B3A' }}
                        >
                          {index + 1}
                        </div>
                        <CardTitle className="text-white text-lg">
                          {layer.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm" style={{ color: '#9CA3AF' }}>
                        {layer.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2: User Guides */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Getting Started Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content?.guides.map((guide, index) => {
                const IconComponent = guideIcons[guide.title] || BookOpen;
                return (
                  <Card
                    key={index}
                    className="border-white/10 hover:border-[#009B3A]/50 transition-all duration-300 cursor-pointer group"
                    style={{ backgroundColor: '#1a2744' }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-3">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: '#009B3A' }}
                        >
                          <IconComponent className="text-white" size={24} />
                        </div>
                      </div>
                      <CardTitle className="text-white text-xl">
                        {guide.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p style={{ color: '#9CA3AF' }}>
                        {guide.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Section 3: Downloadable Resources */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Downloadable Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content?.resources.map((resource, index) => (
                <Card
                  key={index}
                  className="border-white/10 hover:border-[#FFC300]/50 transition-all duration-300 cursor-pointer group"
                  style={{ backgroundColor: '#1a2744' }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                          <img
                            src="/assets/generated/pdf-icon-white-transparent.dim_64x64.png"
                            alt="PDF"
                            className="w-8 h-8"
                          />
                        </div>
                        <CardTitle className="text-white text-xl">
                          {resource.title}
                        </CardTitle>
                      </div>
                      <Download
                        className="text-[#FFC300] group-hover:scale-110 transition-transform"
                        size={24}
                      />
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
