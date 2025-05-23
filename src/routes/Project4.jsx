import { motion } from "framer-motion";

export default function Project4() {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-4 py-16 text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-purple-400">Pain Recognition with Deep Learning</h1>
      <p className="mb-4 text-lg">Automated pain detection from facial expressions using ResNet50 on BP4D.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Approach</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Dataset: BP4D Spontaneous</li>
        <li>Model: ResNet50 with Focal Loss and Class Weights</li>
        <li>Augmentation: Brightness, Flip, Zoom</li>
        <li>Optimized Epochs: ~50 for best tradeoff</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Results</h2>
      <p>Achieved 69% precision with 0.6 AUC. High confidence predicted samples were highly accurate.</p>
    </motion.section>
  );
}
