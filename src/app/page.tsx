"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [url, setUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url) {
      alert("URLを入力してください");
      return;
    }

    // URLのバリデーション
    try {
      new URL(url);
    } catch {
      alert("有効なURLを入力してください");
      return;
    }

    setIsProcessing(true);

    try {
      // TODO: 実際のAPI呼び出しに置き換える
      // ダミーの処理（2秒待機）
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // まとめページに遷移（ダミーID）
      router.push(`/summary/demo-video-1`);
    } catch (error) {
      console.error("Error processing video:", error);
      alert("動画の処理中にエラーが発生しました");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">VideoSum</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            動画を画像とテキストでまとめる
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              動画を見なくても、<br />内容が分かる
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              YouTube動画のURLを入力するだけで、
              <br />
              重要なシーンを画像とテキストで自動まとめ
            </p>
          </div>

          {/* URL Input Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="video-url"
                  className="block text-sm font-medium mb-2"
                >
                  動画URL
                </label>
                <input
                  id="video-url"
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                  disabled={isProcessing}
                />
              </div>

              <div className="mb-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    className="mt-1 mr-2"
                    required
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    この動画は著作権フリー、またはCCライセンスであることを確認しました
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    処理中...
                  </span>
                ) : (
                  "まとめを作成する"
                )}
              </button>
            </form>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="font-semibold mb-1">高速処理</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                10分の動画なら約4分で完成
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-semibold mb-1">重要シーン抽出</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                AIが重要なシーンを自動判定
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📱</div>
              <h3 className="font-semibold mb-1">どこでも閲覧</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                音声なしで内容が理解できる
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© 2025 VideoSum. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
