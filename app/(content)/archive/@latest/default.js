import NewsList from "@/components/NewsList/NewsList";
import { getLatestNews } from "@/lib/news";

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();

  return (
    <>
      <NewsList news={latestNews} />
    </>
  );
}
