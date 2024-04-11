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
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
