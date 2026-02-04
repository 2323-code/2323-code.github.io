import icon from "../assets/icon.jpg";
import "../Home.css";
import SocialLink from "./social_links";
import BlogPosts from "./blog_posts";

function Home() {
  return (
    <div className="container">
      {/* プロフィールセクション */}
      <div className="profile">
        <img
          src={icon}
          alt="ピンクと黄色の水彩絵の具で描かれた自画像です"
          className="profile-icon"
        />
        <h1>ふみふみ</h1>
        <p>
          バックエンドエンジニア / コミュニティ活動はお休み中です。
          <br />
          アイコンは<a href="https://x.com/blackistat2">オカユウリ様</a>
          に描いて頂きました。
        </p>

        <div className="social-links">
          <SocialLink
            href="https://x.com/2323_code"
            title="X (Twitter)"
            icon="x"
          />
          <SocialLink
            href="https://github.com/2323-code"
            title="GitHub"
            icon="github"
          />
        </div>
      </div>

      {/* アウトプット */}
      <div className="section">
        <h2>📝 アウトプット（はてなブログに飛びます）</h2>
        <BlogPosts />
      </div>

      {/* フッター */}
      <footer className="footer">
        <p>© 2026 ふみふみ</p>
      </footer>
    </div>
  );
}

export default Home;
