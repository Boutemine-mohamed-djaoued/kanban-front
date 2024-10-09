import { Skeleton } from "@/components/ui/skeleton";
const SkeletonBody = () => {
  const heights = [3, 2, 4, 3, 4];
  const skeletons = [];
  for (let i = 0; i < 5; i++) {
    const columns = [];
    for (let j = 0; j < heights[i]; j++) {
      columns.push(
        <Skeleton key={`${i}-${j}`} className="w-full h-[7rem] rounded-md light:bg-gray-300 my-5" />
      )
    }
    skeletons.push(
      <div key={i} className="min-w-[15rem]">
        <Skeleton className="w-full h-[1rem] rounded-md  my-5" />
        <Skeleton className="w-1/2 h-[1rem] rounded-md  my-5" />
        {columns}
      </div>
    );
  }
  return (
    <div className="flex p-5 gap-5 dark:bg-very-dark-grey bg-light-grey">
      {skeletons}
      <Skeleton className="w-1/2 flex-1 max-w-[15rem] rounded-md  my-5" />
    </div>
  )
}
export default SkeletonBody