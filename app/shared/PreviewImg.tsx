"use client";

export const PreviewImg = () => {
    return (<div className="flex flex-col gap-2 w-full h-full text-gray-700 dark:text-zinc-50">
        <span  className="text-xs ">
            MINIATURA
        </span>
      
        <div className="flex flex-col items-center justify-center w-full h-50 rounded-lg p-4"
            style={{
                background: "repeating-linear-gradient(135deg, #0f172b 0px, #0f172b 10px, #1E2A4A 10px, #1E2A4A 20px)",
            }}
        >
            <span className="bg-slate-900 p-1">
                Vista previa
            </span>
            
        </div>
        </div>
    )
}