import Image from 'next/image';

export interface IAuthor {
  image: string;
  name: string;
  position: string;
}

export default function Author({ image, name, position }: IAuthor) {
  return (
    <div className="flex gap-2">
      <div>
        <Image src={image} alt={name} width={50} height={50} />
      </div>
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-gray-custom-500">{position}</p>
      </div>
    </div>
  );
}
