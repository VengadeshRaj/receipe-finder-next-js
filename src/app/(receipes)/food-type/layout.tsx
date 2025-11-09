export default function FoodTypeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative font-sans flex flex-col items-center bg-[url(./images/food-type-background.jpg)] bg-cover text-white h-screen justify-center font-bold gap-5">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
      {children}
      </div>
    </div>
  );
}
