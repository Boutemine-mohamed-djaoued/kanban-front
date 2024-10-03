declare interface subtaskType {
  _id: string;
  title: string;
  done: boolean;
}
declare interface taskType {
  _id: string;
  title: string;
  description: boolean;
  subtasks: subtaskType[];
}
declare interface columnType {
  _id: string;
  name: string;
  tasks: taskType[];
}
declare interface boardType {
  _id: string;
  name: string;
  columns: columnType[];
}

declare interface user {
  _id: string;
  username: string;
  password: string;
  boards: boardType[];
}
