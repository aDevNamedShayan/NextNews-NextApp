export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id='archive-filter'>{archive}</section>
      <h2>Latest News</h2>
      <section id='archive-latest'>{latest}</section>
    </div>
  );
}