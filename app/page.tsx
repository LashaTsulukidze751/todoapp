"use client";
import Input from "./components/Input";
import Tasks from "./components/Tasks";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-gradient-to-tr from-[#fdc830] to-[#f37335]">
      <h1 className="mt-28 text-5xl font-bold text-white">TO DO APP</h1>
      <RecoilRoot>
        <Input />
        <Tasks />
      </RecoilRoot>
    </div>
  );
}
