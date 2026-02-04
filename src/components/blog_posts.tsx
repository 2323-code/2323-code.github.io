import LinkCard from "./linkcard";
import { useEffect, useState } from "react";

// ブログ記事取得コンポーネント
interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
}

function BlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://2323-code.hatenablog.com/rss",
        );
        const data = await response.json();

        if (data.status === "ok") {
          setPosts(data.items.slice(0, 5)); // 最新5件
        }
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
        読み込み中...
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
        記事がありません
      </div>
    );
  }

  return (
    <>
      {posts.map((post, index) => {
        const date = new Date(post.pubDate).toLocaleDateString("ja-JP", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });
        return (
          <LinkCard
            key={index}
            title={post.title}
            description={date}
            url={post.link}
          />
        );
      })}
    </>
  );
}

export default BlogPosts;
