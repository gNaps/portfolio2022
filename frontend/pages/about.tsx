import Layout from "../components/layoutapp/Layout";
import Hello from "../components/shared/Hello";

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="page-title page-title-about">About</h1>
        <p className="page-subtitle">Hello universe! I’m Gabriele.</p>
        <p className="page-subtitle">Know little more about me here.</p>
        <div
          className="rounded w-72 h-72 bg-cover bg-center mt-8"
          style={{ backgroundImage: 'url("/avatar-about.png")' }}
        ></div>
        <p className="navigator-title">Finally, a picture of me</p>
        <p className="mt-6">
          I still remember my first day at work when I didn&#39;t even know how
          to write a query in sql. Today, after five years of experience, I am a
          full stack developer. Throughout my career, I have worked on numerous
          projects using various technologies. Both in close contact with the
          end customer and in agile teams. I’ve worked for consulting, for
          startups and collaborate with talented people to create digital
          products for both business and consumer user. I don’t like to define
          myself by the work I’ve done. I define myself by the work I want to
          do. I prefer to keep learning, continue challenging myself and do
          interesting things that matter.
        </p>
        <p className="navigator-title">Current</p>
        <p>
          Working as full stack javascript at ScuolaZoo to help to implement a
          new internal CMS and eCommerce for the company business core. I spend
          most of my time at my Mac studying, learning new acknowledgement,
          develop personal projects and play with Figma.
        </p>
        <p className="navigator-title">My journey</p>
        <p className="mb-5">
          After graduating in 2019 I spent last 5 years working as full stack,
          frontend and now again full stack web developer. I have worked on a
          multitude of web projects like management applications or IoT
          dashboard. I used many technologies as .NET universe and hybrid mobile
          framework Cordova/ionic. Currently, I am focusing on Javascript
          ecosystem and working with Angular - React and NodeJS.
        </p>
        <Hello />
      </div>
    </Layout>
  );
};

export default About;
