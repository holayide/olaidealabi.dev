export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export interface SkillsProps {
  skills: {
    name: string;
    img: string;
  };
}

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  features?: string[];
}

export interface ProjectDetailProps {
  selectedProject: ProjectProps;
  setSelectedProject: React.Dispatch<React.SetStateAction<ProjectProps | null>>;
}

export interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  linkedinUrl?: string;
}

export interface CertificateModalProps {
  closeModal: () => void;
  selectedCert: number;
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}
