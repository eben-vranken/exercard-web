import Link from "next/link";
import exercard_review from "public/screenshots/exercard_review.png";
import the_spacing_effect from "public/graphs/the_spacing_effect.png";
import the_forgetting_curve from "public/graphs/the_forgetting_curve.png";
import Image from "next/image";

export default async function Home() {

  return (
    <main className="w-full min-h-screen flex flex-col gap-y-10">
      <article className="flex flex-col gap-y-4 text-center mb-10">
        <section>
          <header>
            <h1 className="font-bold text-xl">What is Exercard?</h1>
          </header>
          <p className="text-light text-justify">
            Exercard is a free, open-source flashcard app that uses <Link href={"https://en.wikipedia.org/wiki/Spaced_repetition"} target="_blank" className="text-blue-600">spaced-repetition</Link> and AI to make learning efficient and enjoyable.
          </p>
        </section>
        <figure>
          <Image src={exercard_review} alt="Exercard" className="border border-white/10 rounded-xl" />
        </figure>
      </article>

      <article className="flex flex-col items-end gap-y-4 text-justify">
        <section>
          <header className="text-right">
            <h1>The Forgetting Curve</h1>
          </header>
          <p className="text-light">
            The <Link href={'https://en.wikipedia.org/wiki/Forgetting_curve'} target="_blank" className="text-blue-600">forgetting curve</Link> is a concept that illustrates how information fades from memory over time. Initially, we forget rapidly, but the rate of forgetting slows down as time passes. Without reinforcement, most new information is lost within hours or days. However, reviewing material at strategic intervals can slow down this decline, helping to retain knowledge for longer periods.</p>
        </section>
        <figure className="w-3/4 flex flex-col text-right">
          <Image src={the_forgetting_curve} alt="Spacing Effect" className="border border-white/10 rounded-xl" />
          <span className="text-light text-xs">The image above indicated how fast information fades from our memory without reinforcement. </span>
          <Link href={'https://en.wikipedia.org/wiki/Forgetting_curve'} target="_blank" className="text-blue-600">Source - Wikipedia</Link>
        </figure>
      </article>

      <article className="flex flex-col text-justify gap-y-4">
        <section>
          <header>
            <h1>How Spaced Repetition Works</h1>
          </header>
          <p className="text-light">
            The <Link href={'https://en.wikipedia.org/wiki/Spacing_effect'} target="_blank" className="text-blue-600">spacing effect</Link> suggests that memory retention improves when learning is spaced out over time. Instead of cramming, periodic reviews strengthen long-term memory by taking advantage of the brain&apos;s ability to retain information when revisited. <Link href={'https://en.wikipedia.org/wiki/Spaced_repetition'} target="_blank" className="text-blue-600">Spaced repetition</Link> systems use algorithms to adjust review schedules based on recall, with longer intervals for easy material and shorter ones for harder content. This optimizes retention and minimizes unnecessary review.          </p>
        </section>
        <figure className="w-3/4">
          <Image src={the_spacing_effect} alt="Spacing Effect" className="border border-white/10 rounded-xl" />
          <Link href={'https://thedecisionlab.com/biases/spacing-effect/'} target="_blank" className="text-blue-600">Source - Dan Pilat & Dr. Sekoul Krastev</Link>
        </figure>
      </article>


    </main>
  );
}
