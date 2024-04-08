import Image from 'next/image';

export default function Greentech() {
  return (
    <div
      className={` flex flex-row items-center leading-none text-white p-0`}
    >
      <Image 
      src='/Logo.png'
      alt='Gren Tech'
      width={400}
      height={70}/>
    </div>
  );
}
