import Image from "next/image";
import Link from "next/link";

import the_spacing_effect from "public/graphs/the_spacing_effect.png";
import the_forgetting_curve from "public/graphs/the_forgetting_curve.png";

const Science: React.FC = () => {
    return (
        <main className="w-full flex-1 overflow-y-auto">
            <h1 className="text-main text-center text-xl font-bold mb-2">What does science say?</h1>

            <article className="flex flex-col items-end gap-y-4 text-justify">
                <section>
                    <header className="text-right">
                        <h2 className="text-main">The Forgetting Curve</h2>
                    </header>
                    <p>
                        The <Link href={'https://en.wikipedia.org/wiki/Forgetting_curve'} target="_blank" className="text-blue-600">forgetting curve</Link> is a concept that illustrates how information fades from memory over time. Initially, we forget rapidly, but the rate of forgetting slows down as time passes. Without reinforcement, most new information is lost within hours or days. However, reviewing material at strategic intervals can slow down this decline, helping to retain knowledge for longer periods.</p>
                </section>
                <figure className="w-3/4 flex flex-col text-right text-xs">
                    <Image src={the_forgetting_curve} alt="Spacing Effect" className="border border-white/10 rounded-xl" />
                    <span>The image above indicates how fast information fades from our memory without reinforcement. </span>
                    <Link href={'https://en.wikipedia.org/wiki/Forgetting_curve'} target="_blank" className="text-blue-600">Source - Wikipedia</Link>
                </figure>
            </article>

            <article className="flex flex-col text-justify gap-y-4">
                <section>
                    <header>
                        <h2 className="text-main">How Spaced Repetition Works</h2>
                    </header>
                    <p>
                        The <Link href={'https://en.wikipedia.org/wiki/Spacing_effect'} target="_blank" className="text-blue-600">spacing effect</Link> suggests that memory retention improves when learning is spaced out over time. Instead of cramming, periodic reviews strengthen long-term memory by taking advantage of the brain&apos;s ability to retain information when revisited. <Link href={'https://en.wikipedia.org/wiki/Spaced_repetition'} target="_blank" className="text-blue-600">Spaced repetition</Link> systems use algorithms to adjust review schedules based on recall, with longer intervals for easy material and shorter ones for harder content. This optimizes retention and minimizes unnecessary review.          </p>
                </section>
                <figure className="w-3/4 text-xs">
                    <Image src={the_spacing_effect} alt="Spacing Effect" className="border border-white/10 rounded-xl" />
                    <Link href={'https://thedecisionlab.com/biases/spacing-effect/'} target="_blank" className="text-blue-600">Source - Dan Pilat & Dr. Sekoul Krastev</Link>
                </figure>
            </article>

            <article className="flex flex-col gap-y-4 text-justify">
                <section>
                    <header className="text-right">
                        <h2 className="text-main">What is Active Recall?</h2>
                    </header>
                    <p>
                        <Link href={'https://en.wikipedia.org/wiki/Active_recall'} target="_blank" className="text-blue-600">Active recall</Link> is a technique where learners actively stimulate their memory, unlike passive methods like rereading. This strengthens neural connections and improves retention. Combining active recall with spaced repetition creates an effective study method: active recall reinforces memory retrieval, while spaced repetition optimizes review timing. Flashcards are effective for active recall as they challenge users to retrieve information, identify knowledge gaps, and focus on weaker areas, ultimately building confidence and mastery.
                    </p>
                </section>
            </article>
        </main>
    )
}

export default Science;