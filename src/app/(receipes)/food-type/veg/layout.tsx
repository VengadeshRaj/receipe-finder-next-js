export default function VegLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative font-sans flex flex-col items-center bg-[url(./images/veg-background.jpg)] bg-center bg-fixed bg-overlay bg-cover text-white h-screen justify-center font-bold gap-5">
      <div className="absolute inset-0 bg-black/50"></div>
      <div >
      {children}
      </div>
    </div>
  );
}
