import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-14 mt-24 pb-5">
        <Link href={"https://github.com/gNaps"}>
          <a className="social-animation">
            <Image src="/github.svg" alt="github" width={56} height={56} />
          </a>
        </Link>
        <Link href={"https://www.linkedin.com/in/gabriele-napoli-a87529185"}>
          <a className="social-animation">
            <Image src="/linkedin.svg" alt="linkedin" width={56} height={56} />
          </a>
        </Link>
        <Link href={"https://www.instagram.com/napsryu"}>
          <a className="social-animation">
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={56}
              height={56}
            />
          </a>
        </Link>
      </div>
    </>
  );
};

export default Footer;
