import Task from "./task";

interface ColumnProps {
  column: columnType;
}
const Column = ({ column }: ColumnProps) => {
  return (
    <div className="min-w-[17rem]">
      <div className="mb-5">
        {column.name} ({column.tasks?.length})
      </div>
      <div>
        {column.tasks.length > 0 &&
          column.tasks.map((task: any, index: number) => {
            return <Task key={index} task={task}></Task>;
          })}
      </div>
    </div>
  );
};
export default Column;
