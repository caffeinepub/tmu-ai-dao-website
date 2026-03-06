import { ExternalLink, Info } from "lucide-react";
import { useState } from "react";
import TMUIRESPopup from "../components/TMUIRESPopup";

type ProjectData = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  type: "website" | "learnMore" | "multiButton";
  url?: string;
  additionalButtons?: { label: string; url: string }[];
};

const projectImages: Record<string, string> = {
  "TeleMeetUp & TMU-Notes": "/assets/Design sans titre (1).png",
  Morshid: "/assets/generated/morshid-project.dim_400x250.png",
  Etitude: "/assets/generated/etitude-project.dim_400x250.png",
  "Vospital.Care": "/assets/generated/vospital-care-project.dim_400x250.png",
  EcoGSM: "/assets/generated/ecogsm-project.dim_400x250.png",
  "TMU-IRES": "/assets/generated/tmu-ires-project.dim_400x250.png",
  CEITA: "/assets/generated/ceita-project.dim_400x250.png",
  Airello: "/assets/generated/airello-project.dim_400x250.png",
  "TMU-CATNA": "/assets/generated/tmu-catna-project.dim_400x250.png",
  "TMU-Notes-WST": "/assets/generated/tmu-notes-wst-project.dim_400x250.png",
  "TMU Enablement Platform":
    "/assets/generated/tmu-enablement-platform-project.dim_400x250.png",
  "Social Edification":
    "/assets/generated/social-edification-logo-new.dim_400x250.png",
};

export default function ProjectsPage() {
  const [showIRESPopup, setShowIRESPopup] = useState(false);

  const projects: ProjectData[] = [
    {
      id: "telemeetup",
      name: "TeleMeetUp & TMU-Notes",
      description:
        "TeleMeetUp is a next-generation video conferencing platform with AI-powered meeting notes, real-time translation, and seamless collaboration tools for global teams.",
      category: "Communication / AI Notes",
      image: projectImages["TeleMeetUp & TMU-Notes"],
      type: "website",
      url: "https://www.tmu.ai",
    },
    {
      id: "morshid",
      name: "Morshid",
      description:
        "By connecting farmers directly to markets and empowering them with knowledge, Morshid fights food insecurity, ensures fair trade, and builds a sustainable agricultural future for Morocco.",
      category: "Agriculture",
      image: projectImages.Morshid,
      type: "multiButton",
      url: "https://www.morshid.ma",
      additionalButtons: [
        {
          label: "Infographic",
          url: "https://morshid-agricultural-ai-assistant-infographic-xlp.caffeine.xyz",
        },
        {
          label: "Presentation",
          url: "https://drive.google.com/file/d/1N0vKLyS661M7U-KzKbxso_kwt6b7MERe/view",
        },
        {
          label: "Pitch Deck",
          url: "https://drive.google.com/file/d/1upnR3athEwHgRqlKOzor88BlrT6XsdI9/view",
        },
        {
          label: "Executive Summary",
          url: "https://drive.google.com/file/d/1Zi4Kt6dzmpGkxuwGBa41aqLb20vaDtPg/view?usp=sharing",
        },
        {
          label: "Business Plan",
          url: "https://drive.google.com/file/d/1Ik9P0q6RqZfzqn5XqRMS_ufGVe9bSLn9/view?usp=sharing",
        },
      ],
    },
    {
      id: "etitude",
      name: "Etitude",
      description:
        "ETITUDE democratizes education by transforming complex knowledge into accessible learning for everyone, breaking down barriers and ensuring equity in education worldwide.",
      category: "Education / Learning",
      image: projectImages.Etitude,
      type: "website",
      url: "https://www.etitude.com",
    },
    {
      id: "vospital",
      name: "Vospital.Care",
      description:
        "Vospital.Care is a virtual hospital platform connecting doctors and patients remotely through video, AI bots, and real-time translation, making healthcare accessible and efficient.",
      category: "Rural Medicine / Telemedicine",
      image: projectImages["Vospital.Care"],
      type: "multiButton",
      url: "https://www.vospital.care",
      additionalButtons: [
        {
          label: "Documentation",
          url: "https://drive.google.com/file/d/1M6W9VqgGLReQIr1UR7VAGs2sw1WPdnqw/view",
        },
      ],
    },
    {
      id: "ecogsm",
      name: "EcoGSM",
      description:
        "EcoGSM makes healthcare accessible and equitable worldwide through virtual hospitals, tele-diagnostics, emergency response, mental health support, and health education for underserved communities.",
      category: "Global Social Medicine",
      image: projectImages.EcoGSM,
      type: "learnMore",
      url: "https://bit.ly/4cqgidU",
    },
    {
      id: "tmu-ires",
      name: "TMU-IRES",
      description:
        "TMU-IRES (Instant Response Emergency Service) - enhances community safety through intelligent emergency response, rapid incident reporting, and first responder coordination.",
      category: "Public Safety",
      image: projectImages["TMU-IRES"],
      type: "learnMore",
      url: "",
    },
    {
      id: "ceita",
      name: "CEITA",
      description:
        "CEITA is a research and innovation hub for agricultural technology advancement, providing training, capacity building, and cutting-edge solutions for modern farming across Africa.",
      category: "Center of Excellence IT Agriculture",
      image: projectImages.CEITA,
      type: "learnMore",
      url: "https://bit.ly/4kE14WI",
    },
    {
      id: "airello",
      name: "Airello",
      description:
        "Airello is a Multi-AI-Agents Platform enabling multiple AI agents to work together seamlessly, providing intelligent automation across various tasks and workflows.",
      category: "Multi-AI-Agents Platform",
      image: projectImages.Airello,
      type: "website",
      url: "https://www.airello.com",
    },
    {
      id: "tmu-catna",
      name: "TMU-CATNA",
      description:
        "TMU-CATNA (Call Any Telephone Number Anywhere) - Long distance calls with real-time speech-to-speech translation, connecting people across languages and borders.",
      category: "Communication / Translation",
      image: projectImages["TMU-CATNA"],
      type: "learnMore",
      url: "https://www.tmu.ai",
    },
    {
      id: "tmu-notes-wst",
      name: "TMU-Notes-WST",
      description:
        "TMU-Notes-WST provides AI-enabled note taking with custom output for WhatsApp in speech and text chat. Transform conversations into organized notes automatically.",
      category: "AI Note Taking",
      image: projectImages["TMU-Notes-WST"],
      type: "learnMore",
      url: "https://www.tmu.ai",
    },
    {
      id: "tmu-enablement",
      name: "TMU Enablement Platform",
      description:
        "No-code AI Agent Builder and Last-Mile Facility Builder for deploying AI services without any technical expertise required.",
      category: "No-Code Platform",
      image: projectImages["TMU Enablement Platform"],
      type: "learnMore",
      url: "https://www.tmu.ai",
    },
    {
      id: "social-edification",
      name: "Social Edification",
      description:
        "Social Edification Projects are for development of technology and service provision to engender social good relative to 3 tenets: Raising the digital consciousness of general population, Contributing to meeting the UN SDG, Building kinder, more equitable, more enlightened society.",
      category: "Social Good",
      image: projectImages["Social Edification"],
      type: "website",
      url: "https://linktr.ee/w5go",
    },
  ];

  return (
    <main className="min-h-screen bg-navy-dark text-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-navy to-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Projects &amp; SubDAOs
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the diverse portfolio of projects within the TMU AI DAO
            ecosystem
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-navy border border-white/10 rounded-xl overflow-hidden hover:border-gold/30 transition-colors flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <span className="text-xs text-gold bg-gold/10 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.type === "learnMore" &&
                    project.id === "tmu-ires" ? (
                      <button
                        type="button"
                        onClick={() => setShowIRESPopup(true)}
                        className="flex items-center gap-1 text-gold border border-gold/30 hover:bg-gold/10 text-sm px-3 py-1.5 rounded transition-colors"
                      >
                        <Info className="h-4 w-4" />
                        Learn More
                      </button>
                    ) : project.type === "learnMore" && project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gold border border-gold/30 hover:bg-gold/10 text-sm px-3 py-1.5 rounded transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Learn More
                      </a>
                    ) : project.type === "website" && project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gold border border-gold/30 hover:bg-gold/10 text-sm px-3 py-1.5 rounded transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Visit Website
                      </a>
                    ) : null}
                    {project.type === "multiButton" && project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gold border border-gold/30 hover:bg-gold/10 text-sm px-3 py-1.5 rounded transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Visit Website
                      </a>
                    )}
                    {project.additionalButtons?.map((btn) => (
                      <a
                        key={btn.label}
                        href={btn.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-300 border border-white/20 hover:bg-white/10 text-sm px-3 py-1.5 rounded transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {btn.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TMUIRESPopup
        open={showIRESPopup}
        onClose={() => setShowIRESPopup(false)}
      />
    </main>
  );
}
