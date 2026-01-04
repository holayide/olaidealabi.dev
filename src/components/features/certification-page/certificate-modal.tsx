import type { CertificateModalProps } from "@/type";
import { certifications } from "@/data/contents";

export default function CertificateModal({
  closeModal,
  selectedCert,
}: CertificateModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/90 z-600 flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <div className="relative max-w-162.5  w-full">
        <button
          className="absolute top-3 -right-8 text-white text-4xl font-bold hover:text-yellow-500 transition-colors cursor-pointer"
          onClick={closeModal}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="w-full h-full" onClick={(e) => e.stopPropagation()}>
          <img
            src={certifications[selectedCert].image}
            alt={certifications[selectedCert].title}
            className="w-full h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
