import React from "react";
import Image from "next/image";
import clsx from "clsx";

const infoClassName =
  "info-wrapper bg-background w-full py-1 flex justify-center rounded-md border border-border mb-1 text-sm px-1";
const classification = "item-info pl-2 border py-2 mb-2";
const itemWrapper = "item flex items-center mb-2 hover:cursor-pointer w-fit";

function Card() {
  return (
    <div className='card w-fit p-4 border m-6 bg-cta border-border rounded-md flex flex-col items-center'>
      <Image
        src='/monster-icons/三尾狐.png'
        width={65}
        height={50}
        className='mb-1'
        alt='test'
      />
      <span className='text-sm text-yellow-400 font-semibold tracking-wide mb-2'>
        九尾狐
      </span>

      <div className='flex w-full'>
        <p className={infoClassName}>等級 : 2</p>
      </div>

      <div className='flex w-full'>
        <p className={infoClassName}>HP : 20</p>
        <div className='w-2' />
        <p className={infoClassName}>MP : 15</p>
      </div>

      <div className='flex w-full'>
        <p className={infoClassName}>經驗 : 5</p>
        <div className='w-2' />
        <p className={infoClassName}>迴避 : 0</p>
      </div>

      <div className='flex w-full'>
        <p className={infoClassName}>物理防禦 : 200</p>
        <div className='w-2' />
        <p className={infoClassName}>魔法防禦 : 150</p>
      </div>

      <div className='flex w-full'>
        <p className={infoClassName}>命中需求 : 120</p>
      </div>

      <button className='flex w-full'>
        <p className={infoClassName}>▶ 出沒地圖 (1張)</p>
      </button>

      <div className='item-list w-full mt-4'>
        <div className={clsx(classification, "border-blue-500")}>
          <div className={itemWrapper}>
            <Image
              src='/item-icons/九龍刀.png'
              width={32}
              height={27}
              alt='qq'
            />
            <span className='ml-2'>九龍刀</span>
          </div>
          <div className={itemWrapper}>
            <Image
              src='/item-icons/九龍刀.png'
              width={32}
              height={27}
              alt='qq'
            />
            <span className='ml-2'>九龍刀</span>
          </div>
        </div>

        <div className={clsx(classification, "border-yellow-500")}>
          <div className={itemWrapper}>
            <Image
              src='/item-icons/九龍刀.png'
              width={32}
              height={27}
              alt='qq'
            />
            <span className='ml-2'>九龍刀</span>
          </div>
          <div className={itemWrapper}>
            <Image
              src='/item-icons/九龍刀.png'
              width={32}
              height={27}
              alt='qq'
            />
            <span className='ml-2'>九龍刀</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
