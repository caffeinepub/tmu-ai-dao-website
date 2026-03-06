import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type IoMPopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function IoMPopup({ open, onClose }: IoMPopupProps) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="bg-navy-dark border border-white/20 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-gold text-xl font-bold">
            Isle of Man Hybrid Company
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>
            TMU AI DAO operates as an Isle of Man Hybrid Company, a unique legal
            structure that combines the benefits of a traditional corporate
            entity with the principles of a Decentralized Autonomous
            Organization (DAO).
          </p>

          <div>
            <h3 className="text-gold font-semibold mb-2">Why Isle of Man?</h3>
            <p>
              The Isle of Man provides a progressive regulatory environment for
              blockchain and digital asset companies, offering legal clarity,
              tax efficiency, and a supportive framework for innovative business
              models.
            </p>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-2">Hybrid Structure</h3>
            <p>
              As a hybrid company, TMU AI DAO maintains traditional corporate
              governance for legal compliance while empowering token holders
              through decentralized governance mechanisms, creating a bridge
              between Web2 and Web3 organizational models.
            </p>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-2">Key Benefits</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Legal recognition and regulatory compliance</li>
              <li>Token holder governance rights</li>
              <li>Tax-efficient structure for global operations</li>
              <li>Transparent on-chain decision making</li>
              <li>Protection for community members and investors</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
