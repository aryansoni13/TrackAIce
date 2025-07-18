export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">TrackAIce</span>
            <span className="mx-2">•</span>
            <span>Version 1.0.0</span>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-300">
            Created by{" "}
            <a
              href="https://www.linkedin.com/in/aryan-soni-26794924a/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              Aryan Soni
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
