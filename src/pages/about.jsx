import Navbar from "../components/navbar";
import img1 from "../assets/Clipped_image_20241201_070236.png";
import AboutInfo from "../components/about_info";
import { useState } from "react";
import SkillsCard from "../components/skills_card";
//! web skills
import htmlLogo from "../assets/web_skills/html.svg";
import cssLogo from "../assets/web_skills/css.svg";
import sassLogo from "../assets/web_skills/sass.svg";
import javascriptLogo from "../assets/web_skills/javascript.svg";
import bootstrapLogo from "../assets/web_skills/bootstrap.svg";
import tailwindLogo from "../assets/web_skills/tailwind.svg";
import reactLogo from "../assets/web_skills/react.svg";
import nodeLogo from "../assets/web_skills/node.svg";
import expressJsLogo from "../assets/web_skills/express_js.svg";
import mongoLogo from "../assets/web_skills/mondoDB.svg";
import phpLogo from "../assets/web_skills/php.svg";
import mySqlLogo from "../assets/web_skills/mysql.svg";
import laravelLogo from "../assets/web_skills/laravel.svg";
//! mobile skills
import dartLogo from "../assets/mobile_skills/dart.svg";
import flutterLogo from "../assets/mobile_skills/flutter.svg";
import firebaseLogo from "../assets/mobile_skills/firebase.svg";
import getxLogo from "../assets/mobile_skills/getx.svg";
import sqliteLogo from "../assets/mobile_skills/sqlite.svg";
import apiLogo from "../assets/mobile_skills/API.svg";
//! tools skills
import gitLogo from "../assets/tools_skills/git.svg";
import githubLogo from "../assets/tools_skills/github.svg";
import npmLogo from "../assets/tools_skills/npm.svg";
import vscodeLogo from "../assets/tools_skills/vscode.svg";
import androidStudioLogo from "../assets/tools_skills/android_studio.svg";
export default function About() {
  const [activeSkill, setActiveSkill] = useState("web");
  const webSkills = [
    {
      skill: "HTML",
      level: "advanced",
      skillLogo: htmlLogo
    },
    {
      skill: "CSS",
      level: "advanced",
      skillLogo: cssLogo
    },
    {
      skill: "SASS",
      level: "advanced",
      skillLogo: sassLogo
    },
    {
      skill: "Bootstrap",
      level: "advanced",
      skillLogo: bootstrapLogo
    },
    {
      skill: "Tailwind CSS",
      level: "advanced",
      skillLogo: tailwindLogo
    },

    {
      skill: "JavaScript",
      level: "advanced",
      skillLogo: javascriptLogo
    },

    {
      skill: "React Js",
      level: "advanced",
      skillLogo: reactLogo
    },

    {
      skill: "Node Js",
      level: "advanced",
      skillLogo: nodeLogo
    },
    {
      skill: "Express Js",
      level: "advanced",
      skillLogo: expressJsLogo
    },
    {
      skill: "Mongo DB",
      level: "advanced",
      skillLogo: mongoLogo
    }
  ];
  const mobileSkills = [
    {
      skill: "Dart",
      level: "Advanced",
      skillLogo: dartLogo
    },
    {
      skill: "Flutter",
      level: "Advanced",
      skillLogo: flutterLogo
    },
    {
      skill: "Firebase",
      level: "Advanced",
      skillLogo: firebaseLogo
    },
    {
      skill: "GetX",
      level: "Advanced",
      skillLogo: getxLogo
    },
    {
      skill: "SQlite",
      level: "Advanced",
      skillLogo: sqliteLogo
    },
    {
      skill: "API",
      level: "Advanced",
      skillLogo: apiLogo
    },
    {
      skill: "Node Js",
      level: "Advanced",
      skillLogo: nodeLogo
    },

    {
      skill: "Express Js",
      level: "Advanced",
      skillLogo: expressJsLogo
    },

    {
      skill: "Mongo DB",
      level: "Advanced",
      skillLogo: mongoLogo
    }
  ];

  const toolsSkills = [
    {
      skill: "Git",
      level: "Advanced",
      skillLogo: gitLogo
    },
    {
      skill: "Github",
      level: "Advanced",
      skillLogo: githubLogo
    },
    {
      skill: "Npm",
      level: "Advanced",
      skillLogo: npmLogo
    },
    {
      skill: "Pub",
      level: "Advanced",
      skillLogo: dartLogo
    },
    {
      skill: "VS Code",
      level: "Advanced",
      skillLogo: vscodeLogo
    },
    {
      skill: "Android Studio",
      level: "Advanced",
      skillLogo: androidStudioLogo
    }
  ];
  return (
    <div className="h-screen container mx-auto ">
      <Navbar />

      {/* //! start about section  */}
      <div className="p-3 pt-24">
        <div className="rounded-xl p-4 bg-zinc-800">
          <div className="flex items-center animate__animated animate__fadeInLeft">
            <h3 className="capitalize font-semibold text-lg">about me</h3>
            <div className="ml-6 h-1 w-1/2 bg-primary" />
          </div>

          <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 py-6 animate__animated animate__fadeInLeft">
                <img
                  src={img1}
                  alt=""
                  className="lg:w-96 md:w-1/2 place-self-center bg-primary rounded-full shadow-primary shadow-3xl"
                />
              </div>

              <div className="lg:w-1/2 animate__animated animate__fadeInUp">
                <h3 className="py-6">
                Passionate developer with expertise in building end-to-end digital solutions. I bridge the gap between ideas and execution by combining technical skills with creative problem-solving.
                </h3>

                <div className="py-6 capitalize grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                  <AboutInfo title="name" content="Mohamed al-akhaly" />
                  <AboutInfo title="gander" content="Male" />
                  <AboutInfo title="age" content="21 year old" />
                  <AboutInfo title="status" content="Single" />
                  <AboutInfo title="city" content="Sint-niklas" />
                  <AboutInfo title="nationality" content="Yemeni" />
                  <AboutInfo title="experience" content="4+ years" />
                  <AboutInfo title="full time" content="Available" />
                  <AboutInfo title="freelance" content="Available" />
                  <AboutInfo title="phone" content="(+32) 466 16 12 89" />
                  <AboutInfo title="email" content="alakhail755@gmail.com" />
                  <AboutInfo
                    title="languages"
                    content="Arabic, english, french (A1), dutch (A1)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //! start about section  */}

      {/* //! start skills section*/}
      <div className="p-3">
        <div className="main py-10">
          <div className="flex items-center ">
            <div className="h-1 w-1/12 bg-primary animate__animated animate__fadeInRight" />
            <h3 className="pl-3 text-lg font-semibold animate__animated animate__fadeInRight">
              Skills
            </h3>
          </div>

          <div className="w-full py-10 grid grid-cols-1 md:grid-cols-3 lg:md:grid-cols-5 gap-7 animate__animated animate__fadeInLeft">
            <button
              onClick={() => setActiveSkill("web")}
              className={`duration-150 hover:shadow-3md hover:shadow-primary rounded-lg capitalize p-2 ${activeSkill ===
              "web"
                ? "bg-zinc-800 rounded-lg outline-none outline-primary shadow-3md shadow-primary "
                : ""}`}
            >
              web development
            </button>
            <button
              onClick={() => setActiveSkill("mobile")}
              className={`bg-transparent duration-150 hover:shadow-3md hover:shadow-primary rounded-lg capitalize p-2 ${activeSkill ===
              "mobile"
                ? "bg-zinc-800 rounded-lg outline-none outline-primary shadow-3md shadow-primary"
                : ""}`}
            >
              mobile development
            </button>
            <button
              onClick={() => setActiveSkill("tools")}
              className={`duration-150 hover:shadow-3md hover:shadow-primary rounded-lg capitalize p-2 ${activeSkill ===
              "tools"
                ? "bg-zinc-800 rounded-lg outline-none outline-primary shadow-3md shadow-primary"
                : ""}`}
            >
              tools
            </button>
          </div>

          {/* //! start web section */}
          <div
            className={`gap-3 grid md:grid-cols-2 animate__animated animate__fadeInLeft lg:grid-cols-4 ${activeSkill ==
            "web"
              ? ""
              : "hidden"}`}
          >
            {webSkills.map(webSkill =>
              <SkillsCard
                skills={webSkill.skill}
                level={webSkill.level}
                skillsLogo={webSkill.skillLogo}
              />
            )}
          </div>
          {/* //! end web section */}

          {/* //! start mobile section */}
          <div
            className={`gap-3 grid md:grid-cols-2 lg:grid-cols-4 animate__animated animate__fadeInLeft ${activeSkill ===
            "mobile"
              ? ""
              : "hidden"}`}
          >
            {mobileSkills.map(mobileSkill =>
              <SkillsCard
                skills={mobileSkill.skill}
                level={mobileSkill.level}
                skillsLogo={mobileSkill.skillLogo}
              />
            )}
          </div>
          {/* //! end mobile section */}

          {/* //! start mobile section */}
          <div
            className={`gap-3 grid md:grid-cols-2 lg:grid-cols-4 animate__animated animate__fadeInLeft ${activeSkill ===
            "tools"
              ? ""
              : "hidden"}`}
          >
            {toolsSkills.map(toolSkill =>
              <SkillsCard
                skills={toolSkill.skill}
                level={toolSkill.level}
                skillsLogo={toolSkill.skillLogo}
              />
            )}
          </div>
          {/* //! end mobile section */}
        </div>
      </div>
      {/* //! end skills section*/}
      <div />
    </div>
  );
}
