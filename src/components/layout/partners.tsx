import Image from 'next/image';

export default function Partners() {
  return (
    <ul className="text-gray-custom-300 gap-8 flex justify-between items-center flex-wrap">
      <li>
        <Image src="/icons/google.svg" alt="Google" width={97} height={20} />
      </li>
      <li>
        <Image
          src="/icons/atlassian.svg"
          alt="Atlassian"
          width={97}
          height={20}
        />
      </li>
      <li>
        <Image src="/icons/canon.svg" alt="Cannon" width={97} height={20} />
      </li>
      <li>
        <Image src="/icons/walmart.svg" alt="Walmart" width={97} height={20} />
      </li>
      <li>
        <Image src="/icons/amazon.svg" alt="Amazon" width={97} height={20} />
      </li>
    </ul>
  );
}
