import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
interface taskProps {
  task: taskType;
}
const task = ({ task }: taskProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hover:cursor-pointer p-5 my-5 bg-white dark:bg-dark-grey rounded-lg shadow-md">
          <div className="text-black dark:text-white   font-semibold ">{task.title}</div>
          <div className="text-250">
            {task.subtasks && task.subtasks.reduce((count: number, subtask: any) => count + subtask.done, 0)} of {task.subtasks.length} subtasks
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="dark:bg-dark-grey">
        <DialogHeader>
          <DialogTitle className="text-400 mb-4">{task.title}</DialogTitle>
          <DialogDescription className="text-meduim-grey">{task.description}</DialogDescription>
        </DialogHeader>
        <div>
          <h3 className="font-semibold">Subtasks (0 of {task.subtasks && task.subtasks.length})</h3>
          <div>
            {task.subtasks &&
              task.subtasks.map((subtask: subtaskType, index: number) => {
                return (
                  <div key={index} className="bg-light-lines dark:bg-very-dark-grey p-3 my-3 rounded-md flex gap-2">
                    <input checked={subtask.done} onChange={() => {}} type="checkbox" id={index.toString()} name={subtask.title} value={subtask.title} />
                    <label htmlFor={index.toString()}>{subtask.title}</label>
                  </div>
                );
              })}
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Current Status</h3>
          <p className="p-3 my-3 bg-light-lines dark:bg-very-dark-grey rounded-md">Done</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default task;
