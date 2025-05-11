import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Basic</h2>
      <Link href="/basic/fetchdata/">
        <h3>Fech Data</h3>
      </Link>
    </div>
  );
}
