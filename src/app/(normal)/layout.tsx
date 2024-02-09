import type { Metadata } from 'next'
import NavBar from '@/_components/navbar'
import Footer from '@/_components/footer'


export const metadata: Metadata = {
  title: 'Ibis',
  description: 'Created by Ange Wobinwo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <NavBar />
        <main>
            {children}
        </main>
        <Footer />
    </>
  );
}
