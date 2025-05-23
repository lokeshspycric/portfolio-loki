import { motion } from "framer-motion";

export default function Project3() {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-4 py-16 text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-blue-400">Multimodal User Authentication</h1>
      <p className="mb-4 text-lg">Biometric system combining facial and voice features for robust authentication.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Overview</h2>
      <p className="mb-4">This system fuses facial and voice data to enhance security in identity verification. We used classical ML with feature-level fusion to improve accuracy.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Approach</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Datasets: Caltech Faces, AudioMNIST</li>
        <li>Features: Edge detection (face), MFCC (voice)</li>
        <li>Fusion: Normalized vector concatenation</li>
        <li>Classifiers: Random Forest, SVM, kNN</li>
        <li>SMOTE for class balance</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Results</h2>
      <p className="mb-4">SVM yielded highest accuracy and ROC-AUC. Feature fusion outperformed individual modalities.</p>
    </motion.section>
  );
}
