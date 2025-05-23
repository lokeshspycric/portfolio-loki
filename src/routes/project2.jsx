import { motion } from "framer-motion";

export default function Project2() {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-4 py-16 text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-blue-400">LLM-powered Toxicity Detection</h1>
      <p className="mb-4 text-lg">Built a real-time toxicity classifier using RoBERTa and Flask API.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Approach</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Model: Fine-tuned RoBERTa on Jigsaw dataset</li>
        <li>Multi-label classification with HuggingFace transformers</li>
        <li>Hosted using Flask + Docker + EC2</li>
        <li>Frontend dashboard in Power BI</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Results</h2>
      <p>Achieved 97% accuracy and 0.96 AUC with low latency API inference.</p>
    </motion.section>
  );
}
