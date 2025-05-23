// components/About.jsx
import BulletPoint from './BulletPoint';

export default function About() {
  const aboutPoints = [
    "Innovative Software Engineer: Passionate about developing scalable backend systems and automating cloud infrastructures to enhance efficiency and reliability.",
    "AI & Machine Learning Enthusiast: Dedicated to leveraging AI technologies to solve real-world problems, with hands-on experience in deploying ML models on cloud platforms.",
    "DevOps Advocate: Committed to implementing CI/CD pipelines and infrastructure as code practices to streamline development workflows and reduce deployment times.",
    "Collaborative Team Player: Thrive in cross-functional teams, fostering open communication and knowledge sharing to achieve collective goals.",
    "Continuous Learner: Always eager to acquire new skills and stay updated with emerging technologies to drive innovation and personal growth.",
    "Problem-Solving Mindset: Enjoy tackling complex challenges with analytical thinking and creative solutions to deliver impactful results.",
    "Community Contributor: Actively participate in tech communities, sharing insights and contributing to open-source projects to give back and learn from others.",


  ];

  return (
    <section className="max-w-5xl mx-auto px-4 mt-24 pb-20">
      <h2 className="text-3xl font-bold text-blue-500 dark:text-purple-400 mb-8 text-center">About Me</h2>
      <div className="space-y-4">
        {aboutPoints.map((point, index) => (
          <BulletPoint key={index}>{point}</BulletPoint>
        ))}
      </div>
    </section>
  );
}
