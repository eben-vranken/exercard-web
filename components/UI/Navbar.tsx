import { Stack } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <section className="w-full flex flex-col items-start text-left ">
            <Link href={'/'} className="flex gap-x-4 cursor-pointer">
                <Stack size={30} className="text-primary" />
                <h1 className="font-bold text-3xl">Exercard</h1>
            </Link>
            <p className="text-light mt-2">
                Free & Open-source SRS flashcards with local AI-integration.
            </p>
        </section>
    )
};
export default Navbar;