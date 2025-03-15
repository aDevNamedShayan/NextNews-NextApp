import NewsList from "@/components/NewsList/NewsList";
import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage() {
  const latestNews = getLatestNews()
  
  return (
    <>
      <NewsList news={latestNews} />
    </>
  );
}