import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Hello world</h1>
      <Link href="/users">Users</Link>
      <Link href="/products">products</Link>
      <Button />
    </main>
  );
}
