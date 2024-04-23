import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const cartItems = 10; // 임시

  return (
    <header className="border-palette-lighter sticky top-0 z-20 border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 pb-2 pt-4 md:pt-6">
        <Link href="/" passHref>
          <h1 className="flex items-center no-underline">
            <Image
              width="78"
              height="30"
              alt="logo"
              className="mr-1 w-10 h-7 object-contain"
              src="/logo.svg"
            />
            <span className="font-primary text-xl font-bold tracking-tight">
              {process.env.siteTitle}
              SJ Shop
            </span>
          </h1>
        </Link>
        <div>
          <Link href="/cart" passHref aria-label="cart" className="relative">
            <FontAwesomeIcon
              className="text-primary m-auto w-6"
              icon={faShoppingCart}
            />
            {cartItems === 0 ? null : (
              <div className="-right-50% absolute -top-4 min-w-6  translate-x-[1rem] rounded-full bg-black px-[0.4rem] py-1 text-center text-xs font-semibold text-white">
                {cartItems}
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Nav;
