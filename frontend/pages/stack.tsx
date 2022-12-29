import type { NextPage } from "next";
import Layout from "../components/layoutapp/Layout";
import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAdobexd,
  SiDiscord,
  SiGithub,
  SiMongodb,
  SiPostgresql,
  SiSpotify,
  SiTelegram,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FiFigma } from "react-icons/fi";
import { IconContext } from "react-icons";
import Image from "next/image";

const Stack: NextPage<void> = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-8">
        <IconContext.Provider value={{ className: "stack-icons" }}>
          <h1 className="page-title page-title-stack">Stack</h1>
          <p className="page-subtitle">My technology stack.</p>
          <p className="navigator-title">Frontend</p>
          <div className="flex gap-5">
            <FaAngular />
            <FaReact />
            <TbBrandNextjs />
            <IoLogoJavascript />
            <SiTypescript />
          </div>
          <p className="navigator-title">Backend</p>
          <div className="flex gap-5">
            <FaNodeJs />
            <SiPostgresql />
            <SiMongodb />
          </div>
          <p className="navigator-title">UI/UX</p>
          <div className="flex gap-5">
            <FiFigma />
            <SiAdobexd />
          </div>
          <p className="navigator-title">Apps</p>
          <div className="flex gap-5">
            <SiVisualstudiocode />
            <SiSpotify />
            <SiGithub />
            <SiDiscord />
            <SiTelegram />
          </div>
          <p className="navigator-title">Devices</p>
          <div className="flex gap-5">
            <Image
              src="/devices/mac.svg"
              alt="mac"
              width={60}
              height={60}
              layout={"fixed"}
            />
            <Image
              src="/devices/ps5.svg"
              alt="mac"
              width={60}
              height={60}
              layout={"fixed"}
            />
            <Image
              src="/devices/iphone.svg"
              alt="mac"
              width={60}
              height={60}
              layout={"fixed"}
            />
            <Image
              src="/devices/ipad.svg"
              alt="mac"
              width={60}
              height={60}
              layout={"fixed"}
            />
          </div>
        </IconContext.Provider>
      </div>
    </Layout>
  );
};

export default Stack;
