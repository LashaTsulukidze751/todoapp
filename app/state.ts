import { atom } from "recoil";

export const taskState = atom({
  key: "task",
  default: "",
});

export const tasksState = atom({
    key: 'tasks',
    default: []
})
export const doneItemsState = atom({
    key: 'doneItems',
    default: []
})
