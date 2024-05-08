import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="font-primary border-t-1px flex items-center justify-center bg-zinc-100 py-4">
      <Link
        href="/"
        passHref
        rel="noreferrer"
        className="text-palette-primary px-1 font-bold"
      >
        <span className="flex items-center no-underline">
          <Image
            height="32"
            width="32"
            alt="logo"
            className="mr-1 h-8 w-8 object-contain"
            src="/logo.svg"
          />
          <span className="font-primary text-m font-bold tracking-tight">
            {process.env.siteTitle}
            SJ Shop
          </span>
        </span>
      </Link>
    </footer>
  );
}

export default Footer;
