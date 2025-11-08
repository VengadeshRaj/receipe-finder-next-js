import Link from "next/link";

export default function Cuisine() {
  return (
    <div className="relative font-sans flex flex-col items-center bg-[url(./images/mealtype-background.jpg)] bg-center bg-fixed bg-cover text-white h-screen justify-center font-bold gap-5">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-3xl mb-5">Select your favourite cuisine </h1>
        <Link href="cuisine/chinese" className="flex flex-row gap-2 bg-transparent px-4 py-1 rounded">
          <span>🍛</span> <div className="hover:underline">Chinese</div>
        </Link>
        <Link href="cuisine/indian" className="flex flex-row gap-2 bg-transparent px-4 py-1 rounded">
          <span>🍜</span> <div className="hover:underline">Indian</div>
        </Link>
         <Link href="cuisine/italian" className="flex flex-row gap-2 bg-transparent px-4 py-1 rounded">
          <span>🧇</span> <div className="hover:underline">Italian</div>
        </Link>
      </div>
    </div>
  );
}
