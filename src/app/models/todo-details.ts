import { TodoListModel } from "./todo-list";

export interface ToDoDetailsModel extends TodoListModel {
    Description?: string;
    Expenses: number;
}