import NewsList from "@/components/NewsList/NewsList";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
      {/* {news && <NewsList news={news} />} */}
    </>
  );
}
