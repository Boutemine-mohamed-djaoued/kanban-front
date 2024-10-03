import Header from "@/components/layout/Header";
import MyReduxProvider from "@/components/providers/MyReduxProvider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MyReduxProvider>
      <main className="bg-light-grey dark:bg-very-dark-grey min-h-screen flex flex-col">
        <Header />
        {children}
      </main>
    </MyReduxProvider>
  );
}
