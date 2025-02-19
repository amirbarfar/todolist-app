import Link from "next/link";

// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen font-pelak bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="text-center p-8 md:p-16 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <p className="text-xl mb-6">این صفحه پیدا نشد</p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          به نظر می‌رسد که صفحه‌ای که دنبالش بودید وجود ندارد.
        </p>
        <Link
          href="/"
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg text-lg transition duration-300"
        >
          برگشت به خانه
        </Link>
      </div>
    </div>
  );
}
