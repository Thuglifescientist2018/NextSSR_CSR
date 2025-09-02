
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/3', {cache: 'no-store'});
  const person = await res.json();

  return (
   <div>
    <h1>Home SSR</h1>
    <h4>Server Rendered kura haru</h4>
    <ul>
      <li>{person.name}</li>
    </ul>
    <Link href="/csr">CSR</Link>
   </div>
  );
}
