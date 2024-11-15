import Image from "next/image";

interface ISocialProps {
  data: Record<string, string>;
}

export function SocialLogos({ data }: ISocialProps) {
  const socialMedias = Object.keys(data);
  const links = Object.values(data);
  return (
    <div className="flex gap-6">
      {socialMedias?.map((social, i) => (
        <a key={social} href={links[i]} target="_blank">
          <Image
            src={`/social/${social.toLocaleLowerCase()}.svg`}
            width={24}
            height={24}
            alt=""
            className="w-6 h-6"
          />
        </a>
      ))}
    </div>
  );
}
