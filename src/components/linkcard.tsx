// リンクカードのコンポーネント
interface LinkCardProps {
  title: string;
  description: string;
  url: string;
}

function LinkCard({ title, description, url }: LinkCardProps) {
  return (
    <a
      href={url}
      className="link-card"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="link-card-title">{title}</div>
      <div className="link-card-desc">{description}</div>
    </a>
  );
}

export default LinkCard;
