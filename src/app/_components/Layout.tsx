import Nav from '@/app/_components/Nav';
import Footer from '@/app/_components/Footer';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Nav />
      <main className='max-w-screen-lg w-full'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
