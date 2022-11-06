import { Links } from "../Links";
interface AuthProps {
    auth: boolean
}
export function Header() {
    return (
        <nav className="bg-yellow-500 h-14 fixed inset-x-0 bottom-0 flex items-center justify-center">
            <Links />
        </nav>
    )

}