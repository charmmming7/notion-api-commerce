import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Nav />
      <main className='max-w-screen-lg m-auto'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
