import { motion } from "framer-motion";

export default function Project1() {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-4 py-16 text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-green-400">DermaFusion AI – Skin Cancer Classifier</h1>
      <p className="mb-4 text-lg">Multimodal model combining lesion images and patient metadata.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Key Components</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Image model: MobileNetV2</li>
        <li>Metadata model: XGBoost</li>
        <li>Fusion: Weighted decision-level combination</li>
        <li>Deployment: Streamlit + EC2</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Results</h2>
      <p>Achieved 92.6% accuracy. Fusion improved performance over individual models by 6%.</p>
    </motion.section>
  );
}
