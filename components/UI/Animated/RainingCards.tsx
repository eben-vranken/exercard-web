import { Cards } from "@phosphor-icons/react/dist/ssr";

interface RainingCardsProps {
    cardCount: number;
    cards: {
        id: number;
        position: {
            top: string;
            left: string;
        };
        animationDelay: string;
        animationDuration: string;
    }[];
}

const RainingCards: React.FC<RainingCardsProps> = ({ cardCount, cards }) => {
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

export const generateCards = (cardCount: number) => {
    return Array.from({ length: cardCount }, (_, index) => ({
        id: index,
        position: {
            top: `${Math.random() * -10}vh`,
            left: `${Math.random() * 100}vw`,
        },
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * (12 - 8) + 8}s`,
    }));
};

export default RainingCards;