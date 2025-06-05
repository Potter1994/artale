import clsx from "clsx";
import React from "react";

const inputClassName =
  "border border-border rounded-md p-1 focus-visible:outline-none focus-visible:border-border bg-cta";

function Header() {
  return (
    <div className={clsx("p-4 border-b-[1px] border-border flex items-center")}>
      <input
        className={clsx(inputClassName, "mr-2")}
        type='text'
        placeholder='搜尋怪物或掉落物'
      />
      <label className='mx-1' htmlFor='min-level'>
        等級:
      </label>
      <div className={clsx("input-shape relative")}>
        <input
          id='min-level'
          className={clsx(inputClassName, "w-16")}
          type='number'
          placeholder='最小'
        />
        <button className='absolute top-0 right-0 bottom-0 flex items-center p-2'>
          <i className='border-solid border-t-blue border-t-4 border-x-transparent border-x-4 border-b-0' />
        </button>
      </div>
      <span className='mx-2'>~</span>
      <div className={clsx("input-shape relative")}>
        <input
          id='max-level'
          className={clsx(inputClassName, "w-16")}
          type='number'
          placeholder='最大'
        />
        <button className='absolute top-0 right-0 bottom-0 flex items-center p-2'>
          <i className='border-solid border-t-blue border-t-4 border-x-transparent border-x-4 border-b-0' />
        </button>
      </div>
    </div>
  );
}

export default Header;
