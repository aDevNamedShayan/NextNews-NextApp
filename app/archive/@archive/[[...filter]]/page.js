import Link from "next/link";

import NewsList from "@/components/NewsList/NewsList";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";

export default function NewsByYearPage({ params }) {
  const filter = params.filter
  console.log(filter)

  const selectedYear = filter?.[0]
  const selectedMonth = filter?.[1]

  let news;
  let links = getAvailableNewsYears()

  if(selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear)
    links = getAvailableNewsMonths(selectedYear)
  }

  if(selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth)
    links = []
  }

  let newsContent = <p>Please select a period in order to view the news of that period.</p>

  if(news && news.length > 0) {
    newsContent = <NewsList news={news} />
  }


  
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map(link => {
              let href = selectedYear 
                ? `/archive/${selectedYear}/${link}` 
                : `/archive/${link}`

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}