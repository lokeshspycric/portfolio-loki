import { Link } from 'react-router-dom';
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "DermaFusion AI",
      description: "Skin cancer detection using image + clinical data. Full-stack ML deployment on AWS.",
      link: "/Projects/Project1",
      tags: ["ML", "XGBoost", "TensorFlow", "AWS"]
    },
    {
      title: "LLM Toxicity Detector",
      description: "RoBERTa-powered API classifying toxic social media content with 97% accuracy.",
      link: "/Projects/Project2",
      tags: ["LLM", "NLP", "RoBERTa", "Flask"]
    },
    {
      title: "Biometric Auth System",
      description: "Real-time face + voice authentication with ML fusion logic and SVM classifier.",
      link: "/Projects/Project3",
      tags: ["Multimodal", "SVM", "AudioMNIST", "Caltech Faces"]
    },
    {
      title: "Pain Recognition using Deep Learning",
      description: "Deep learning classification pipeline built with ResNet50, MLflow, and real-time visual reporting.",
      link: "/Projects/Project4",
      tags: ["Deep Learning", "CNN", "Focal Loss", "BP4D"]
    },
];

  return (
    <section className="max-w-5xl mx-auto px-4 mt-24 pb-20 text-center">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-purple-400 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.title}
            description={proj.description}
            link={proj.link}
            tags={proj.tags}
          />
        ))}
      </div>
    </section>
  );
}
