export default function authLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
      <div className="p-4 border-b">
        make an account for 20% off
      </div>
      {children}
    </>
  );
}