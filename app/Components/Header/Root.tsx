/* eslint-disable no-undef */
export default function HeaderRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white shadow">
      <div className="container mx-auto p-4 flex items-center gap-4">
        {children}
      </div>
    </div>
  );
}
