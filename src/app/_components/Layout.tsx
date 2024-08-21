import Nav from '@/app/_components/Nav';
import Footer from '@/app/_components/Footer';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto flex min-h-screen flex-col justify-between">
      <Nav />
      <main className="mx-auto mb-auto w-full max-w-screen-lg">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
