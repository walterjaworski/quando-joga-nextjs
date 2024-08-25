import Link from "next/link";

export default function HeaderMenuRoot() {
  return (
    <nav className="container mx-auto">
      <ul className="flex justify-between items-center space-x-4 text-black">
        <div className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/jogos" className="hover:text-gray-400">
              Jogos
            </Link>
          </li>
          <li>
            <Link href="/brasileirao" className="hover:text-gray-400">
              Brasileirão
            </Link>
          </li>
          <li>
            <Link href="/sulamericana" className="hover:text-gray-400">
              Sul Americana
            </Link>
          </li>
        </div>
        <li>
          <Link href="/sobre" className="hover:text-gray-400">
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
}
