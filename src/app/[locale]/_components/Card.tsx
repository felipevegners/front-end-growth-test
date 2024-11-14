import Image from "next/image";

interface ICardProps {
  icon: string;
  title: string;
  description: string;
}

export function Card({ icon, title, description }: ICardProps) {
  return (
    <div>
      <Image
        src={`/icons/${icon}.svg`}
        width={24}
        height={24}
        alt={icon}
        className="mb-4"
      />
      <h2 className="mb-3 text-white font-bold">{title}</h2>
      <p className="text-sm text-mai-gray">{description}</p>
    </div>
  );
}
