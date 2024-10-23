import { ReactNode } from "react";
import { BorderTrail } from "./BorderTrail";


export function BorderTrailTextarea({children} : {children:ReactNode}) {
  return (
    <div className=''>
      <textarea className='h-full w-full resize-none rounded-md bg-transparent px-4 py-3 text-sm outline-none' />
      <BorderTrail
        className='bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700'
        size={120}
      />
      {children}
    </div>
  );
}
