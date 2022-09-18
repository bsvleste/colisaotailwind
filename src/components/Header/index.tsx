import { Links } from "../Links";
interface AuthProps{
    auth:boolean
}
export function Header() {
    return (
        <nav className="bg-colisao-500 h-20 fixed inset-x-0 bottom-0 flex items-center justify-center">
            <Links />
        </nav>
    )

}