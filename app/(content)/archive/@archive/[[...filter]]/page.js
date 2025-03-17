import Link from "next/link";
import { Suspense } from "react";

import NewsList from "@/components/NewsList/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";

async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears()
  let links = availableYears;
  let availableMonths

  if (year) availableMonths = getAvailableNewsMonths(year);

  if (year && !month) {
    links = availableMonths;
  }

  if (year && month) {
    links = [];
  }
  
  if (
    (year && !availableYears.includes(year)) ||
    (month && !availableMonths.includes(month))
  ) {
    throw new Error("Invalid filter.");
  }

  return (
    links.map((link) => {
      let href = year
        ? `/archive/${year}/${link}`
        : `/archive/${link}`;

      return (
        <li key={link}>
          <Link href={href}>{link}</Link>
        </li>
      );
    })
  )
}

async function FilteredNews({ year, month }) {
  let news;

  if(year && !month){
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>Please select a period in order to view the news of that period.</p>

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent
}

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter;
  console.log(filter);

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  const invalidPathSegment = filter?.[2];
    
  if (invalidPathSegment) throw new Error("Invalid path segment. (/archive/year/month)");

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
          <Suspense fallback={<p>Loading filters...</p>}>
            <FilterHeader year={selectedYear} month={selectedMonth} />
          </Suspense>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<p>Loading news...</p >}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
