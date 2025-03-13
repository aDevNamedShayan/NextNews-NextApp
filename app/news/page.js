import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <header><h1>News Page</h1></header>
      <main>
        <p><Link href='/news/first-news'>First News</Link></p>
        <p><Link href='/news/second-news'>Second News</Link></p>
        <p><Link href='/news/third-news'>Third News</Link></p>
      </main>
    </>
  );
}