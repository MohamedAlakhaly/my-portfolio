
import Navbar from "../components/navbar"
import img1 from "../assets/Clipped_image_20241201_070236.png"
import AboutInfo from "../components/about_info"
import { useState } from "react"
import SkillsCard from "../components/skills_card"
//! web skills
import htmlLogo from "../assets/web_skills/html.svg"
import cssLogo from "../assets/web_skills/css.svg"
import sassLogo from "../assets/web_skills/sass.svg"
import javascriptLogo from "../assets/web_skills/javascript.svg"
import bootstrapLogo from "../assets/web_skills/bootstrap.svg"
import tailwindLogo from "../assets/web_skills/tailwind.svg"
import daisyUILogo from "../assets/web_skills/daisy.svg"
import reactLogo from "../assets/web_skills/react.svg"
import nodeLogo from "../assets/web_skills/node.svg"
import expressJsLogo from "../assets/web_skills/express_js.svg"
import mongoLogo from "../assets/web_skills/mondoDB.svg"

//! mobile skills
import dartLogo from "../assets/mobile_skills/dart.svg"
import flutterLogo from "../assets/mobile_skills/flutter.svg"
import firebaseLogo from "../assets/mobile_skills/firebase.svg"
import getxLogo from "../assets/mobile_skills/getx.svg"
import sqliteLogo from "../assets/mobile_skills/sqlite.svg"
import apiLogo from "../assets/mobile_skills/API.svg"
//! tools skills
import gitLogo from "../assets/tools_skills/git.svg"
import githubLogo from "../assets/tools_skills/github.svg"
import npmLogo from "../assets/tools_skills/npm.svg"
import vscodeLogo from "../assets/tools_skills/vscode.svg"
import androidStudioLogo from "../assets/tools_skills/android_studio.svg"
export default function About() {
  const [activeSkill, setActiveSkill] = useState("web")
  const webSkills = [
    {
      skill: "HTML",
      level: "advanced",
      skillLogo: htmlLogo,
    },
    {
      skill: "CSS",
      level: "advanced",
      skillLogo: cssLogo,
    },
    {
      skill: "SASS",
      level: "advanced",
      skillLogo: sassLogo,
    },
    {
      skill: "Bootstrap",
      level: "advanced",
      skillLogo: bootstrapLogo,
    },
    {
      skill: "Tailwind CSS",
      level: "advanced",
      skillLogo: tailwindLogo,
    },
    {
      skill: "Daisy UI",
      level: "advanced",
      skillLogo: daisyUILogo,
    },

    {
      skill: "JavaScript",
      level: "advanced",
      skillLogo: javascriptLogo,
    },

    {
      skill: "React Js",
      level: "advanced",
      skillLogo: reactLogo,
    },

    {
      skill: "Node Js",
      level: "advanced",
      skillLogo: nodeLogo,
    },
    {
      skill: "Express Js",
      level: "advanced",
      skillLogo: expressJsLogo,
    },
    {
      skill: "Mongo DB",
      level: "advanced",
      skillLogo: mongoLogo,
    },
  ]
  const mobileSkills = [
    {
      skill: "Dart",
      level: "Advanced",
      skillLogo: dartLogo,
    },
    {
      skill: "Flutter",
      level: "Advanced",
      skillLogo: flutterLogo,
    },
    {
      skill: "Firebase",
      level: "Advanced",
      skillLogo: firebaseLogo,
    },
    {
      skill: "GetX",
      level: "Advanced",
      skillLogo: getxLogo,
    },
    {
      skill: "SQlite",
      level: "Advanced",
      skillLogo: sqliteLogo,
    },
    {
      skill: "API",
      level: "Advanced",
      skillLogo: apiLogo,
    },
    {
      skill: "Node Js",
      level: "Advanced",
      skillLogo: nodeLogo,
    },

    {
      skill: "Express Js",
      level: "Advanced",
      skillLogo: expressJsLogo,
    },

    {
      skill: "Mongo DB",
      level: "Advanced",
      skillLogo: mongoLogo,
    },
  ]

  const toolsSkills = [
    {
      skill: "Git",
      level: "Advanced",
      skillLogo: gitLogo,
    },
    {
      skill: "Github",
      level: "Advanced",
      skillLogo: githubLogo,
    },
    {
      skill: "Npm",
      level: "Advanced",
      skillLogo: npmLogo,
    },
    {
      skill: "Pub",
      level: "Advanced",
      skillLogo: dartLogo,
    },
    {
      skill: "VS Code",
      level: "Advanced",
      skillLogo: vscodeLogo,
    },
    {
      skill: "Android Studio",
      level: "Advanced",
      skillLogo: androidStudioLogo,
    },
  ]
  return (
    <div className="min-h-screen container mx-auto">
      <Navbar />

      {/* //! start about section  */}
      <div className="p-3 pt-24">
        {/* EDIT: Added subtle shadow and improved border radius */}
        <div className="rounded-xl p-5 bg-zinc-800 shadow-lg shadow-black/20">
          <div className="flex items-center animate__animated animate__fadeInLeft">
            {/* EDIT: Enhanced section title with gradient */}
            <h3 className="capitalize font-semibold text-lg bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
              about me
            </h3>
            <div className="ml-6 h-1 w-1/2 bg-gradient-to-r from-primary to-transparent" />
          </div>

          <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 py-6 animate__animated animate__fadeInLeft">
                <div className="relative">
                  <img
                    src={img1 || "/placeholder.svg"}
                    alt="Mohamed Al-Akhaly"
                    className="lg:w-96 md:w-1/2 place-self-center bg-primary rounded-full shadow-primary shadow-3xl relative z-10"
                  />
                </div>
              </div>

              <div className="lg:w-1/2 animate__animated animate__fadeInUp">
                {/* EDIT: Added subtle left border to bio text */}
                <h3 className="py-6 pl-4 border-l-2 border-primary/30 leading-relaxed text-gray-300">
                  Passionate developer with expertise in building end-to-end digital solutions. I bridge the gap between
                  ideas and execution by combining technical skills with creative problem-solving.
                </h3>

                <div className="py-6 capitalize grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
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
                  <AboutInfo title="languages" content="Arabic, english, french (Basic), dutch (Basic)" />
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
          <div className="flex items-center">
            {/* EDIT: Enhanced divider with gradient */}
            <div className="h-1 w-1/12 bg-gradient-to-r from-primary to-transparent animate__animated animate__fadeInRight" />
            {/* EDIT: Enhanced section title */}
            <h3 className="pl-3 text-lg font-semibold animate__animated animate__fadeInRight bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
              Skills
            </h3>
          </div>

          {/* EDIT: Improved button container spacing */}
          <div className="w-full py-10 grid grid-cols-1 md:grid-cols-3 lg:md:grid-cols-5 gap-7 animate__animated animate__fadeInLeft">
            {/* EDIT: Enhanced buttons with smoother transitions */}
            <button
              onClick={() => setActiveSkill("web")}
              className={`duration-300 hover:shadow-lg hover:shadow-primary/30 rounded-lg capitalize p-2.5 transition-all ${
                activeSkill === "web"
                  ? "bg-zinc-800 rounded-lg border border-primary/50 shadow-md shadow-primary/20"
                  : "bg-zinc-900/50"
              }`}
            >
              web development
            </button>
            <button
              onClick={() => setActiveSkill("mobile")}
              className={`duration-300 hover:shadow-lg hover:shadow-primary/30 rounded-lg capitalize p-2.5 transition-all ${
                activeSkill === "mobile"
                  ? "bg-zinc-800 rounded-lg border border-primary/50 shadow-md shadow-primary/20"
                  : "bg-zinc-900/50"
              }`}
            >
              mobile development
            </button>
            <button
              onClick={() => setActiveSkill("tools")}
              className={`duration-300 hover:shadow-lg hover:shadow-primary/30 rounded-lg capitalize p-2.5 transition-all ${
                activeSkill === "tools"
                  ? "bg-zinc-800 rounded-lg border border-primary/50 shadow-md shadow-primary/20"
                  : "bg-zinc-900/50"
              }`}
            >
              tools
            </button>
          </div>

          {/* EDIT: Added key prop to map functions and improved grid gap */}
          {/* //! start web section */}
          <div
            className={`gap-4 grid md:grid-cols-2 animate__animated animate__fadeInLeft lg:grid-cols-4 ${
              activeSkill == "web" ? "" : "hidden"
            }`}
          >
            {webSkills.map((webSkill, index) => (
              <SkillsCard
                key={`web-${index}`}
                skills={webSkill.skill}
                level={webSkill.level}
                skillsLogo={webSkill.skillLogo}
              />
            ))}
          </div>
          {/* //! end web section */}

          {/* //! start mobile section */}
          <div
            className={`gap-4 grid md:grid-cols-2 lg:grid-cols-4 animate__animated animate__fadeInLeft ${
              activeSkill === "mobile" ? "" : "hidden"
            }`}
          >
            {mobileSkills.map((mobileSkill, index) => (
              <SkillsCard
                key={`mobile-${index}`}
                skills={mobileSkill.skill}
                level={mobileSkill.level}
                skillsLogo={mobileSkill.skillLogo}
              />
            ))}
          </div>
          {/* //! end mobile section */}

          {/* //! start tools section */}
          <div
            className={`gap-4 grid md:grid-cols-2 lg:grid-cols-4 animate__animated animate__fadeInLeft ${
              activeSkill === "tools" ? "" : "hidden"
            }`}
          >
            {toolsSkills.map((toolSkill, index) => (
              <SkillsCard
                key={`tool-${index}`}
                skills={toolSkill.skill}
                level={toolSkill.level}
                skillsLogo={toolSkill.skillLogo}
              />
            ))}
          </div>
          {/* //! end tools section */}
        </div>
      </div>
      {/* //! end skills section*/}
      <div />
    </div>
  )
}
