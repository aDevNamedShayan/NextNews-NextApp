import Link from "next/link";

import NewsList from "@/components/NewsList/NewsList";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";

export default function NewsByYearPage({ params }) {
  const filter = params.filter
  console.log(filter)

  const yearsWithNews = getAvailableNewsYears()
  
  // const yearNews = getNewsForYear(year)
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {yearsWithNews.map(year =>
            <li key={year}>
              <Link href={`/archive/${year}`}>{year}</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  //   <NewsList news={yearNews} />
  );
}