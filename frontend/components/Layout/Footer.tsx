import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-14 mt-24 pb-5">
        <Image src="/github.svg" alt="github" width={56} height={56} />
        <Image src="/linkedin.svg" alt="linkedin" width={56} height={56} />
        <Image src="/instagram.svg" alt="instagram" width={56} height={56} />
      </div>
    </>
  );
};

export default Footer;
