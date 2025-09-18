"use client";
import ReactCurvedText from "react-curved-text";
import TextRevealByWord from "./ui/text-reveal";
import { ThreeDPhotoCarousel } from "./ui/3d-carousel";

const Skills = () => {
  const skills = [
    { slug: "openai", name: "OpenAI" },
    { slug: "langchain", name: "LangChain" },
    { slug: "mysql", name: "MySQL" },
    { slug: "typescript", name: "Type Script" },
    { slug: "javascript", name: "Java Script" },
    { slug: "java", name: "Java" },
    { slug: "react", name: "React" },
    { slug: "flutter", name: "Flutter" },
    { slug: "android", name: "Android" },
    { slug: "html5", name: "HTML5" },
    { slug: "css3", name: "CSS3" },
    { slug: "nodedotjs", name: "Node.js" },
    { slug: "express", name: "Express" },
    { slug: "nextdotjs", name: "Next.js" },
    { slug: "amazonaws", name: "AWS" },
    { slug: "postgresql", name: "PostgreSQL" },
    { slug: "firebase", name: "Firebase" },
    { slug: "vercel", name: "Vercel" },
    { slug: "docker", name: "Docker" },
    { slug: "git", name: "Git" },
    { slug: "jira", name: "Jira" },
    { slug: "github", name: "GitHub" },
    { slug: "visualstudiocode", name: "VS Code" },
    { slug: "plotly", name: "Plotly" },
    { slug: "androidstudio", name: "Android Studio" },
    { slug: "figma", name: "Figma" },
    { slug: "swift", name: "Swift" },
    { slug: "xcode", name: "Xcode" },
    { slug: "apachehadoop", name: "Hadoop" },
    { slug: "apacheparquet", name: "Parquet" },
    { slug: "xml", name: "XML" },
    { slug: "tailwindcss", name: "Tailwind CSS" },
    { slug: "angular", name: "Angular" },
    { slug: "c", name: "C" },
    { slug: "cplusplus", name: "C++" },
    { slug: "rust", name: "Rust" },
    { slug: "pandas", name: "Pandas" },
    { slug: "numpy", name: "NumPy" },
    { slug: "scikit-learn", name: "Scikit-learn" },
    { slug: "opencv", name: "OpenCV" },
    { slug: "kaggle", name: "Kaggle" },
    { slug: "django", name: "Django" },
    { slug: "flask", name: "Flask" },
    { slug: "supabase", name: "Supabase" },
    { slug: "databricks", name: "Databricks" },
    { slug: "apachekafka", name: "Kafka" },
    { slug: "ibm", name: "IBM" },
    { slug: "keras", name: "Keras" },
    { slug: "python", name: "Python" },
    { slug: "tensorflow", name: "Tensor Flow" },
    { slug: "pytorch", name: "Pytorch" },
  ];

  return (
    <div id="skills" className="mt-8 flex flex-col relative items-center p-5 justify-start h-[80vh] bg-neutral-950">
      <div className="flex-col font-body flex px-5 text-lg max-w-4xl mb-8">
        <span className="font-header text-4xl font-bold px-[3rem] text-white">Skills</span>
        <span className="mt-10 font-body text-xl font-light text-start px-[3rem] text-gray-300">
          I started coding in the 6th grade, and over the years, I&apos;ve developed
          a deep passion for building impactful projects. Through continuous
          learning and experimentation, I&apos;ve gained experience in full-stack
          mobile and app development, as well as RAG LLM solutions.
        </span>
        <span className="mt-8 font-body text-xl font-light text-start px-[3rem] text-gray-300">
          My journey has involved integrating these technologies, allowing me to
          create robust, data-driven applications that leverage modern AI
          advancements.
        </span>
      </div>
      <div className="w-full max-w-6xl">
        <ThreeDPhotoCarousel skills={skills} />
      </div>
    </div>
  );
};

export default Skills;
