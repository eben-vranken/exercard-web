import { Cards } from "@phosphor-icons/react/dist/ssr";

interface RainingCardsProps {
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

const RainingCards: React.FC<RainingCardsProps> = ({ cards }) => {
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

