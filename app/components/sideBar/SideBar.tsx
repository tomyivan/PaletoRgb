"use client";
import { PreviewImg } from "@shared/PreviewImg";
import { InputFile } from "@shared/InputFile";
export const SideBar = () => {

    return (
        <aside className="flex flex-col gap-2 w-xs h-[calc(100vh-3rem)] overflow-hidden hover:overflow-y-auto scrollbar-gutter-stable bg-slate-100 dark:bg-slate-900 dark:border-r dark:border-white/[.145] p-4">
            <InputFile />
            <PreviewImg />
            <div className="flex flex-col gap-2 w-full h-full text-gray-700 dark:text-zinc-50">
        <span  className=" text-xs ">
            EXTRACCION
        </span>
      
        <span  className="text-xs">
            N.° de colores
        </span>
        <span  className="text-xs">
            Método
        </span>
        </div>

        </aside>
    )
}