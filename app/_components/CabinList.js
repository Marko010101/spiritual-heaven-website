import { unstable_noStore } from "next/cache.js";
import { getCabins } from "../_lib/data-service.js";
import CabinCard from "@/app/_components/CabinCard.js";

export default async function CabinList({ filter }) {
  // unstable_noStore();
  const cabins = await getCabins();

  let displayedCabins;

  if (filter == "all") displayedCabins = cabins;
  if (filter == "small") displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter == "medium") displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7);
  if (filter == "large") displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  if (!cabins.length) return null;

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
