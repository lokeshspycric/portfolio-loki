// components/Experience.jsx
import BulletPoint from './BulletPoint';

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer (DevOps + Backend Systems) – TCS, India",
      points: [
        "Engineered scalable backend systems utilizing Python and AWS services, leading to a 25% improvement in system performance.",
        "Developed RESTful APIs to facilitate seamless integration between microservices, enhancing data flow efficiency.",
        "Automated cloud infrastructure provisioning using Terraform, reducing manual setup time by 40%.",
        "Implemented CI/CD pipelines with GitLab, decreasing deployment times by 35% and minimizing human errors.",
        "Monitored system health using AWS CloudWatch, setting up proactive alerting mechanisms that reduced downtime incidents by 20%.",
        "Optimized database queries and indexing strategies, resulting in a 30% decrease in data retrieval times.",
        "Collaborated with cross-functional teams to align backend development with frontend requirements, ensuring cohesive product delivery.",
        "Conducted code reviews and provided mentorship to junior developers, fostering a culture of continuous improvement.",
        "Integrated security best practices into the development lifecycle, enhancing application resilience against common vulnerabilities.",
        "Led the migration of legacy systems to cloud-native architectures, improving scalability and maintainability.",
        "Documented technical processes and created knowledge bases, aiding in onboarding and reducing knowledge silos.",
        "Participated in agile ceremonies, contributing to sprint planning and retrospectives to drive team efficiency.",

      ],
    },
    {
      role: "Software Engineer (AI + Web Development) – TCS, India",
      points: [
        "Developed a real-time disease prediction application by deploying machine learning models on AWS EC2 instances.",
        "Built full-stack data pipelines integrating Python, REST APIs, and Parquet data sources, streamlining data processing workflows.",
        "Enhanced application security by implementing authentication protocols and secure data transmission methods.",
        "Reduced response latency by 30% through optimization of backend services and load balancing techniques.",
        "Collaborated with data scientists to translate machine learning outputs into user-friendly web interfaces.",
        "Implemented responsive web designs using modern JavaScript frameworks, improving user engagement metrics.",
        "Conducted A/B testing to evaluate feature performance, informing data-driven UI/UX decisions.",
        "Maintained comprehensive documentation for AI models and web services, facilitating knowledge transfer and compliance.",


      ],
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 mt-24 pb-12">
      <h2 className="text-3xl font-bold text-blue-500 dark:text-purple-400 mb-6 text-center">Experience</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.role}</h3>
          <div className="mt-2 space-y-2">
            {exp.points.map((point, index) => (
              <BulletPoint key={index}>{point}</BulletPoint>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
