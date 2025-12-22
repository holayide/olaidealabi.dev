export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export interface HeadingProps {
  title: string;
  type?: "light" | "dark";
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
