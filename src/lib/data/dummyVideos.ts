export interface Screenshot {
  id: string;
  timestamp: string;
  imageUrl: string;
  caption: string;
  transcript: string;
  isHighlight?: boolean;
}

export interface VideoSummary {
  id: string;
  title: string;
  originalUrl: string;
  duration: string;
  processedAt: string;
  tags: string[];
  aiSummary: string;
  screenshots: Screenshot[];
}

export const dummyVideos: Record<string, VideoSummary> = {
  "demo-video-1": {
    id: "demo-video-1",
    title: "【10分で完成】失敗しないカルボナーラの作り方",
    originalUrl: "https://youtube.com/example/carbonara",
    duration: "8分30秒",
    processedAt: "2025-12-24",
    tags: ["料理", "イタリアン", "パスタ", "カルボナーラ"],
    aiSummary:
      "本格的なカルボナーラを家庭で簡単に作る方法を紹介。卵が固まらないコツは「火を止めてから混ぜる」こと。材料はシンプルに、ベーコン・卵・チーズ・黒胡椒のみ。10分で完成する時短レシピ。",
    screenshots: [
      {
        id: "1",
        timestamp: "00:00",
        imageUrl: "https://via.placeholder.com/800x450/3b82f6/ffffff?text=タイトル画面",
        caption: "イントロダクション",
        transcript:
          "皆さんこんにちは。今日は10分で作れる本格カルボナーラのレシピをお届けします。カルボナーラって難しそうに見えますが、コツさえ掴めば誰でも簡単に作れるんです。",
      },
      {
        id: "2",
        timestamp: "00:30",
        imageUrl: "https://via.placeholder.com/800x450/10b981/ffffff?text=材料一覧",
        caption: "材料紹介 - 必要な材料はたったの5つ",
        transcript:
          "材料はとってもシンプルです。パスタ、ベーコン、卵黄、パルメザンチーズ、そして黒胡椒。生クリームは使いません。本場イタリアのレシピに忠実に作ります。",
      },
      {
        id: "3",
        timestamp: "01:15",
        imageUrl: "https://via.placeholder.com/800x450/8b5cf6/ffffff?text=パスタを茹でる",
        caption: "パスタを茹でる",
        transcript:
          "まず大きめの鍋にたっぷりのお湯を沸かします。塩は多めに入れてください。海水くらいの塩分がベストです。",
      },
      {
        id: "4",
        timestamp: "02:00",
        imageUrl: "https://via.placeholder.com/800x450/f59e0b/ffffff?text=ベーコンを炒める",
        caption: "ベーコンを炒める - カリカリになるまで",
        transcript:
          "ベーコンは1cm幅にカットして、フライパンで炒めます。油は引かなくて大丈夫。ベーコンから出る脂だけで十分です。",
      },
      {
        id: "5",
        timestamp: "03:30",
        imageUrl: "https://via.placeholder.com/800x450/ec4899/ffffff?text=卵液を作る",
        caption: "卵液を作る",
        transcript:
          "ボウルに卵黄2個、パルメザンチーズ、黒胡椒をたっぷり入れて混ぜます。この卵液がカルボナーラのソースになります。",
      },
      {
        id: "6",
        timestamp: "04:45",
        imageUrl: "https://via.placeholder.com/800x450/ef4444/ffffff?text=⭐重要ポイント",
        caption: "🔥 重要ポイント：必ず火を止めてから卵液を加える",
        transcript:
          "ここが一番大事なポイントです！パスタが茹で上がったら、必ず火を止めてください。火をつけたまま卵を入れると、スクランブルエッグになってしまいます。",
        isHighlight: true,
      },
      {
        id: "7",
        timestamp: "05:20",
        imageUrl: "https://via.placeholder.com/800x450/06b6d4/ffffff?text=パスタと卵液を混ぜる",
        caption: "パスタと卵液を混ぜる - 余熱で調理",
        transcript:
          "火を止めたフライパンに、茹でたパスタを入れます。そして先ほど作った卵液を一気に加えて、素早く混ぜます。余熱で卵が程よく固まって、クリーミーなソースになります。",
      },
      {
        id: "8",
        timestamp: "07:15",
        imageUrl: "https://via.placeholder.com/800x450/84cc16/ffffff?text=盛り付け",
        caption: "盛り付け - 黒胡椒をたっぷりかける",
        transcript:
          "お皿に盛り付けたら、仕上げに黒胡椒をたっぷりとかけます。黒胡椒はカルボナーラの命です。ケチらずにたくさんかけてください。",
      },
      {
        id: "9",
        timestamp: "07:45",
        imageUrl: "https://via.placeholder.com/800x450/22c55e/ffffff?text=✨完成",
        caption: "✨ 完成！クリーミーで濃厚なカルボナーラ",
        transcript:
          "はい、完成です！見てください、このクリーミーな仕上がり。卵が固まらず、滑らかなソースになっています。これが本場イタリアのカルボナーラです。",
        isHighlight: true,
      },
      {
        id: "10",
        timestamp: "08:10",
        imageUrl: "https://via.placeholder.com/800x450/6366f1/ffffff?text=まとめ",
        caption: "成功の3つのポイント",
        transcript:
          "今日のポイントをおさらいします。一つ目、必ず火を止めてから卵液を加えること。二つ目、茹で汁でソースの硬さを調整すること。三つ目、黒胡椒はケチらないこと。",
      },
    ],
  },
};
