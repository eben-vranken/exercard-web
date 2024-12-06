'use client';

import { Cards } from "@phosphor-icons/react";

interface RainingCardsProps {
    cardCount: number;
}

const RainingCards: React.FC<RainingCardsProps> = ({ cardCount }) => {
    // Generate an array of the required number of cards with random positions
    const cards = Array.from({ length: cardCount }, (_, index) => ({
        id: index,
        position: {
            top: `${Math.random() * -10}vh`,  // Random vertical position
            left: `${Math.random() * 100}vw`, // Random horizontal position
        },
        animationDelay: `${Math.random() * 5}s`, // Random animation delay for variety
        animationDuration: `${Math.random() * (12 - 8) + 8}s`, // Random animation duration between 8s and 12s
    }));

    return (
        <section className="absolute inset-0 w-full h-full z-[-10] pointer-events-none rain-cards">
            {cards.map(({ id, position, animationDelay, animationDuration }) => (
                <Cards
                    key={id}
                    size={Math.random() * 30}
                    className="rain-card text-ultralight font-primary"
                    style={{
                        top: position.top,
                        left: position.left,
                        animationDelay: animationDelay,
                        animationDuration: animationDuration,
                    }}
                />
            ))}
        </section>
    );
};

export default RainingCards;
