import { notFound } from "next/navigation";
import Link from "next/link";
import { dummyVideos } from "@/lib/data/dummyVideos";

export async function generateStaticParams() {
  return Object.keys(dummyVideos).map((id) => ({
    id,
  }));
}

export default async function SummaryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const video = dummyVideos[id];

  if (!video) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white dark:bg-gray-900 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold hover:text-blue-600">
            ← VideoSum
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Video Info */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{video.title}</h1>

            <div className="flex flex-wrap gap-2 mb-4">
              {video.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <p>動画長: {video.duration}</p>
              <p>処理日時: {video.processedAt}</p>
              <p>
                元動画:{" "}
                <a
                  href={video.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {video.originalUrl}
                </a>
              </p>
            </div>
          </div>

          {/* AI Summary */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-3 flex items-center">
              <span className="mr-2">🤖</span>
              AI要約
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {video.aiSummary}
            </p>
          </div>

          {/* Screenshots Timeline */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">シーン別まとめ</h2>

            <div className="space-y-8">
              {video.screenshots.map((screenshot) => (
                <div
                  key={screenshot.id}
                  className={`border rounded-lg overflow-hidden ${
                    screenshot.isHighlight
                      ? "border-yellow-400 shadow-lg"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {/* Timestamp Badge */}
                  <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex items-center justify-between">
                    <span className="font-mono text-sm font-semibold">
                      [{screenshot.timestamp}]
                    </span>
                    {screenshot.isHighlight && (
                      <span className="px-2 py-1 bg-yellow-400 text-yellow-900 rounded text-xs font-semibold">
                        ハイライト
                      </span>
                    )}
                  </div>

                  {/* Screenshot Image */}
                  <div className="relative aspect-video bg-gray-200 dark:bg-gray-700">
                    <img
                      src={screenshot.imageUrl}
                      alt={screenshot.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Caption and Transcript */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      {screenshot.caption}
                    </h3>
                    <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 text-gray-600 dark:text-gray-400 italic">
                      {screenshot.transcript}
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">統計情報</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {video.screenshots.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  抽出シーン数
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {video.screenshots.filter((s) => s.isHighlight).length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ハイライト
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {video.duration}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  元動画の長さ
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              別の動画をまとめる
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© 2025 VideoSum. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
