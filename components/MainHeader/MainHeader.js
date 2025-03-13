import Link from "next/link";

export default function MainHeader() {
  return <header style={{display: "flex", gap: '1rem'}}>
    <Link href='/' >Home</Link>
    <Link href='/news' >News Page</Link>
  </header>;
}