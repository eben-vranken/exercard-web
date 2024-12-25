import Link from "next/link";
import exercard_review from "public/screenshots/exercard_review.png";
import Image from "next/image";

export default async function Home() {

  return (
    <main className="w-full min-h-screen flex flex-col gap-y-10">
      <article className="flex flex-col gap-y-4 text-center my-10">
        <section>
          <header>
            <h1 className="font-bold text-xl text-main">What is Exercard?</h1>
          </header>
          <p className="text-justify">
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
            <h2 className="text-main">Vision & Mission</h2>
          </header>
          <p>
            Exercard aims to provide a <Link href={'https://en.wikipedia.org/wiki/Free_and_open-source_software'} target="_blank" className="text-blue-600">free and open-source</Link> alternative to popular flashcard applications. With a commitment to user privacy, Exercard operates locally on your device, free from ads, subscriptions, or external data storage. By empowering users with tools to learn effectively without distractions or hidden costs, Exercard seeks to make knowledge accessible and retention achievable for everyone.
          </p>
        </section>
      </article>

      <article className="flex flex-col items-end gap-y-4 text-justify">
        <section>
          <header>
            <h2 className="text-main">Core Features</h2>
          </header>
          <p>
            Exercard offers a range of features designed to optimize learning and knowledge retention. With customizable <Link href={'https://en.wikipedia.org/wiki/Spaced_repetition'} target="_blank" className="text-blue-600">spaced repetition</Link>, users can choose the SRS algorithm that best fits their needs. The integrated AI takes learning further by engaging users in interactive quizzes and vocabulary-limited conversations based on their decks. Contextual explanations and robust progress tracking ensure learners stay informed about their development, making the journey to mastery both efficient and enjoyable.
          </p>
        </section>
      </article>


      <article className="flex flex-col items-end gap-y-4 text-justify">
        <section>
          <header className="text-right">
            <h2 className="text-main">Target Audience</h2>
          </header>
          <p>
            Exercard caters to a wide array of learners. <strong>Students</strong> can reinforce classroom learning and prepare for exams, while <strong>language learners</strong> can practice vocabulary, grammar, and conversation skills. <strong>Professionals</strong> can master industry-specific knowledge, certifications, or technical jargon, and <strong>hobbyists</strong> can explore personal interests such as music theory, coding, or trivia. Whatever the subject, Exercard adapts to your learning goals, ensuring effective and engaging study sessions for every type of learner.
          </p>
        </section>
      </article>
    </main>
  );
}
