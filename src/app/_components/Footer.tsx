import Link from 'next/link';
import Image from 'next/image';
import Logo from 'public/logo.svg';

function Footer() {
  return (
    <footer className="font-primary border-t-1px flex items-center justify-center bg-zinc-100 py-4">
      <Link
        href="/"
        passHref
        rel="noreferrer"
        className="text-palette-primary px-1 font-bold"
      >
        <span className="flex items-center text-white no-underline">
          <span className="blind">Trendify</span>
          <Logo height={74} />
        </span>
      </Link>
    </footer>
  );
}

export default Footer;
