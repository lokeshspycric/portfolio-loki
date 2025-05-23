import { motion } from "framer-motion";

export default function Project5() {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-4 py-16 text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-yellow-400">CoolApps DevOps Automation – TCS</h1>
      <p className="mb-4 text-lg">Led cloud automation and monitoring improvements for high-traffic enterprise platform.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Tools & Stack</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>AWS: EC2, S3, Lambda, IAM, CloudWatch</li>
        <li>CI/CD: GitLab pipelines with rollback</li>
        <li>Terraform for Infra-as-Code</li>
        <li>Docker containers + Slack alerts</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Impact</h2>
      <p>Deployment time cut by 40%, incident response time halved, and uptime increased to 99.7%.</p>
    </motion.section>
  );
}
