import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

type TMUIRESPopupProps = {
  open: boolean;
  onClose: () => void;
  documentationLink?: string;
  videoLink?: string;
  additionalLinks?: string;
};

export default function TMUIRESPopup({
  open,
  onClose,
  documentationLink = "https://tmu.ai/docs/TMU-IRES.pdf",
  videoLink = "https://www.youtube.com/watch?v=-_rLVpmdSfo",
  additionalLinks = "https://linktr.ee/tmu_ires",
}: TMUIRESPopupProps) {
  const description = `TMU-IRES is built on our TMU Enablement Platform, which offers the functional capability for immediacy of presentation of data to all participants in essential units of an Operation for real-time discussion / advisory across geographies and language barriers with multi-modal real-time communication capability (WebRTC) as PWA and also through Whatsapp, Telegram, VoIP, GSM, PSTN, USSD etc.

This is achieved with our proprietary development of No-Code AI Agents and Last Mile Facility Builder complete with very versatile capability for integration through API with corporate databases etc.`;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="bg-navy-dark border border-white/20 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-gold text-xl font-bold">
            TMU-IRES - Public Safety &amp; Drone-based Service Provision
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
          {description.split("\n\n").map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}

          <div className="flex flex-col gap-3 pt-2">
            <a
              href={documentationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Documentation
            </a>
            <a
              href={videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Video
            </a>
            <a
              href={additionalLinks}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Additional Links
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
