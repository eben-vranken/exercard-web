import Link from "next/link";
import exercard_review from "public/screenshots/exercard_review.png";
import Image from "next/image";

export default async function Home() {

  return (
    <main className="w-full min-h-screen flex flex-col">
      <article className="flex flex-col gap-y-4">
        <section>
          <header>
            <h1>What is Exercard?</h1>
          </header>
          <p className="text-light">
            Exercard is a free, open-source flashcard app that uses <Link href={"https://en.wikipedia.org/wiki/Spaced_repetition"} target="_blank" className="text-blue-600">spaced-repetition</Link> and AI to make learning efficient and enjoyable.
          </p>
        </section>
        <figure>
          <Image src={exercard_review} alt="Exercard" className="border border-white/10 rounded-xl" />
        </figure>
      </article>
    </main>
  );
}
