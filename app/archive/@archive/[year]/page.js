import NewsList from "@/components/NewsList/NewsList";
import { getNewsForYear } from "@/lib/news";

export default function NewsByYearPage({ params }) {
  const year = params.year
  const yearNews = getNewsForYear(year)
  return (
    <NewsList news={yearNews} />
  );
}