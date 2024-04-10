import Image from "next/image";
import FloatingHead from "./components/FloatingHead";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">They said I could make anything...</h1>
      <FloatingHead/>
    </main>
  );
}
