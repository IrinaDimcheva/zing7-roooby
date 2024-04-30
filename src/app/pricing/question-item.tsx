import Image from 'next/image';
import Divider from '@/components/ui/divider';

interface IQuestion {
  title: string;
  text: string;
  isOpen?: boolean;
  onClick: () => void;
}

export default function QuestionItem({
  title,
  text,
  isOpen,
  onClick,
}: IQuestion) {
  return (
    <li className="max-w-screen-wide flex justify-between">
      <div></div>
      <div className="w-[945px]">
        <Divider />
        {/* <div className="flex flex-nowrap gap-1 justify-between items-center"> */}
        <div className="grid grid-cols-[1fr_40px] items-center">
          <h3 className="text-2xl md:text-[32px] font-medium md:leading-[42px] tracking-[-0.44px] py-10">
            {title}
          </h3>
          <div onClick={onClick} className="w-[40px] cursor-pointer">
            {!isOpen ? (
              <Image src="/icons/ic_add.svg" alt="+" width={40} height={40} />
            ) : (
              <Image
                src="/icons/minus.svg"
                alt="-"
                width={40}
                height={40}
                className="mr-3"
              />
              // <div className="w-[25px] h-[4px] ml-[3px] bg-gray-custom-300"></div>
            )}
          </div>
        </div>
        {isOpen && (
          <p className="text-base md:text-lg max-w-[860px] max-lg:pr-10 pb-10">
            {text}
          </p>
        )}
      </div>
    </li>
  );
}
