import Link from "next/link";

export default function MealType() {
  return (
      <div>
        <h1 className="text-3xl mb-5">Select your meal type </h1>
        <Link href="meal-type/breakfast" className="flex flex-row gap-2 bg-transparent px-4 py-1 rounded">
          <span>🍴</span> <div className="hover:underline">Breakfast</div>
        </Link>
        <Link href="meal-type/lunch" className="flex flex-row gap-2 bg-transparent px-4 py-1 rounded">
          <span>🍴</span> <div className="hover:underline">Lunch</div>
        </Link>
         <Link href="meal-type/dinner" className="flex flex-row gap-2 bg-transparent px-4 py-1 rounded">
          <span>🍴</span> <div className="hover:underline">Dinner</div>
        </Link>
      </div>
  );
}
