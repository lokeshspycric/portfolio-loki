import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ title, description, link, tags }) {
  return (
    <Link to={link}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="bg-gray-100 dark:bg-gray-800 transition rounded-xl p-6 shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-xl"
      >
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-400 mb-2">{title}</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>

        {/* Tags */}
        {tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-blue-100 dark:bg-purple-900 text-blue-700 dark:text-purple-200 px-2 py-1 rounded-full text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-4 text-sm text-blue-500 dark:text-purple-300 font-medium hover:underline">
          View Project →
        </div>
      </motion.div>
    </Link>
  );
}
