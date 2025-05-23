// components/BulletPoint.jsx
export default function BulletPoint({ children }) {
  return (
    <div className="flex items-start space-x-2">
      <span className="text-blue-500 dark:text-purple-400">➤</span>
      <p className="text-gray-700 dark:text-gray-300">{children}</p>
    </div>
  );
}
