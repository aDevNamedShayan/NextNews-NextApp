import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/NewsList/NewsList";

export default function NewsPage() {
  return (
    <>
      <header><h1>News Page</h1></header>
      <main>
        <NewsList news={DUMMY_NEWS} />
      </main>
    </>
  );
}