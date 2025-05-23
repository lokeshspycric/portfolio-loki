import { useState } from "react";

const skillsData = {
  DevOps: [
    "Terraform – Provisioned AWS multi-account infra as code",
    "GitLab CI/CD – Built pipelines reducing deployment time by 40%",
    "Jenkins – Automated backend CI workflows",
    "Docker – Containerized ML and web apps",
    "Kubernetes – Managed container orchestration and scaling",
    "Linux & Bash – Automated infrastructure tasks and scripting",
    "Ansible – Configuration management with YAML",
    "CloudWatch & SonarQube – Monitoring, logging, and code quality tools",
  ],
  MachineLearning: [
    "Python – Core ML language across all projects",
    "Scikit-learn – ML algorithms for classification and prediction",
    "TensorFlow & Keras – Used for deep learning (ResNet, CNN)",
    "PyTorch – Applied in biometric authentication fusion",
    "Transformers (HuggingFace) – Fine-tuned RoBERTa for LLM toxicity detection",
    "MLflow – Tracked and versioned model experiments",
    "Streamlit – Built UIs for ML models (DermaFusion)",
    "OpenCV – Used for facial pain recognition from image datasets",
  ],
  WebDevelopment: [
    "React.js – Built interactive UIs with Tailwind styling",
    "Tailwind CSS – Clean utility-based frontend design",
    "FastAPI & Flask – Deployed ML APIs in production",
    "REST APIs – Designed endpoints for full-stack integration",
    "JWT Auth – Secured endpoints in healthcare and auth apps",
    "Vite – Fast local dev builds",
    "HTML5 & CSS3 – Structured responsive layouts",
  ],
  CloudComputing: [
    "AWS – EC2, S3, RDS, IAM, Lambda, CloudWatch",
    "Azure – VMs, Active Directory basics (certified)",
    "GCP – Compute & storage familiarity from coursework",
    "GitHub Actions – Lightweight CI/CD workflows",
    "Cloud Security – IAM policies, encrypted pipelines",
    "Terraform & CloudFormation – Infra automation tools",
    "Multi-Cloud Setup – AWS primary + Azure exposure",
    "DevOps Monitoring – Cloud-native observability setup",
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("DevOps");

  return (
    <section className="max-w-5xl mx-auto px-4 mt-24 pb-20">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-purple-400 mb-8 text-center">Skills & Toolbox</h2>
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              activeTab === category ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="bg-gray-800 rounded-xl p-6 space-y-2 border border-gray-700 text-gray-300">
        {skillsData[activeTab].map((skill, index) => (
          <li key={index} className="list-disc list-inside">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
