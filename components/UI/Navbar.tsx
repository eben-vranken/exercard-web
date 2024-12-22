import { Stack } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav className="flex flex-col text-left w-full">
            <Link href={'/'} className="flex gap-x-4 cursor-pointer">
                <Stack size={30} className="text-primary" />
                <h1 className="font-bold text-3xl">Exercard</h1>
            </Link>
            <p className="text-light mt-2 text-sm">
                Free & Open-source SRS flashcards with local AI-integration.
            </p>
        </nav>
    )
};
export default Navbar;