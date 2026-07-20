"use client";
import { ImagePlus } from "lucide-react";
import { useRef } from "react";
export const InputFile = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return ( <div className="flex flex-col gap-2 w-full h-full text-gray-700 dark:text-zinc-50">
        <label htmlFor="file-input" className="cursor-pointer text-xs ">
            IMAGEN
        </label>
        <input 
            type="file"
            id="file-input"
            name="file-input"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
        />
        <div className="flex w-full flex-col items-center justify-center w-full h-50 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 cursor-pointer hover:border-green-500"
            onClick={handleClick}
        >
            <ImagePlus 
                width={ 50 }
                height={50}
            />
            
            <span className="text-lg font-medium ">
                Arrastra una imagen aquí <br />
                <span className="text-xs text-gray-500 dark:text-gray-400 ">
                    o haz click para seleccionar un archivo
                </span>
            </span>
        </div>
        </div>
    )
}