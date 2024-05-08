import Nav from '@/app/_components/Nav';
import Footer from '@/app/_components/Footer';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col justify-between mx-auto">
      <Nav />
      <main className='max-w-screen-lg w-full mb-auto mx-auto'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
