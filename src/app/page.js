import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>각 설명으로 이동하실 수 있습니다.</p>
      <Link href="/tutorial">튜토리얼</Link>
      <br/> 
      <Link href="/ES6">ES6</Link>
    </div>
  );
}
