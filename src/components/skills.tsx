"use client";
import ReactCurvedText from "react-curved-text";
import TextRevealByWord from "./ui/text-reveal";
import { ThreeDPhotoCarousel } from "./ui/3d-carousel";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Skills = () => {
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  
  // Group skills by category
  const skillCategories = {
    Languages: [
      { slug: "python", name: "Python" },
      { slug: "mysql", name: "SQL" },
      { slug: "java", name: "Java" },
      { slug: "c", name: "C" },
      { slug: "cplusplus", name: "C++" },
      { slug: "angular", name: "Angular" },
      { slug: "css3", name: "CSS" },
      { slug: "javascript", name: "JavaScript" },
      { slug: "react", name: "React" },
      { slug: "xml", name: "XML" },
      { slug: "nodedotjs", name: "Node.js" },
      { slug: "nextdotjs", name: "Next.js" },
      { slug: "tailwindcss", name: "Tailwind" },
      { slug: "rust", name: "Rust" },
      { slug: "html5", name: "HTML5" },
    ],
    "AI Models": [
      { slug: "openai", name: "OpenAI" },
      { slug: "transformer", name: "Transformer" },
      { slug: "llm", name: "LLM" },
      { slug: "diffusion", name: "Diffusion" },
      { slug: "HTN", name: "Hierarchical Task Network" },
      { slug: "prophet", name: "Prophet" },
      { slug: "llama", name: "Llama" },
      { slug: "sam", name: "SAM" },
      { slug: "XG-boost", name: "XG-boost" },
      { slug: "mcmc", name: "MCMC" },
      { slug: "knowledge-distillation", name: "Knowledge Distillation" },
      { slug: "linear-regression", name: "Linear/Logistic Regression" },
      { slug: "decision-trees", name: "Decision Trees" },
      { slug: "random-forests", name: "Random Forests" },
      { slug: "cnn", name: "Convolutional Neural Network" },
      { slug: "svm", name: "SVM" },
      { slug: "rcnn", name: "RCNN" },
      { slug: "kaggle", name: "Kaggle" },
    ],
    Frameworks: [
      { slug: "pytorch", name: "PyTorch" },
      { slug: "tensorflow", name: "TensorFlow" },
      { slug: "numpy", name: "Numpy" },
      { slug: "scikit-learn", name: "Scikit-learn" },
      { slug: "langchain", name: "LangChain" },
      { slug: "Matplotlib", name: "Matplotlib" },
      { slug: "flask", name: "Flask" },
      { slug: "django", name: "Django" },
      { slug: "opencv", name: "OpenCV" },
      { slug: "keras", name: "Keras" },
      { slug: "pandas", name: "Pandas" },
      { slug: "plotly", name: "Plotly" },
      { slug: "seaborn", name: "Seaborn" },
      { slug: "polars", name: "Polars" },
      { slug: "librosa", name: "Librosa" },
    ],
    "Developer Tools": [
      { slug: "amazonaws", name: "AWS" },
      { slug: "docker", name: "Docker" },
      { slug: "apacheparquet", name: "Parquet" },
      { slug: "apachekafka", name: "Kafka" },
      { slug: "firebase", name: "Firebase" },
      { slug: "github", name: "GitHub" },
      { slug: "supabase", name: "Supabase" },
      { slug: "ibm", name: "IBM" },
      { slug: "visualstudiocode", name: "VSCode" },
      { slug: "androidstudio", name: "Android Studio" },
      { slug: "figma", name: "Figma" },
      { slug: "swift", name: "Swift" },
      { slug: "xcode", name: "Xcode" },
      { slug: "apachehadoop", name: "Hadoop" },
      { slug: "vercel", name: "Vercel" },
      { slug: "databricks", name: "Databricks" },
      { slug: "jira", name: "Jira" },
      { slug: "flutter", name: "Flutter" },
    ],
  };

  const categoryColors = {
    Languages: "bg-blue-600",
    Frameworks: "bg-green-600", 
    "Developer Tools": "bg-purple-600",
    "AI Models": "bg-orange-600",
  };
  
  const skills = [
    { slug: "openai", name: "OpenAI" },
    { slug: "langchain", name: "Lang-Chain" },
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
    { slug: "postgresql", name: "Post-greSQL" },
    { slug: "firebase", name: "Firebase" },
    { slug: "vercel", name: "Vercel" },
    { slug: "docker", name: "Docker" },
    { slug: "git", name: "Git" },
    { slug: "jira", name: "Jira" },
    { slug: "github", name: "GitHub" },
    { slug: "visualstudiocode", name: "VSCode" },
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
    { slug: "supabase", name: "Supa-base" },
    { slug: "databricks", name: "Data-bricks" },
    { slug: "apachekafka", name: "Kafka" },
    { slug: "ibm", name: "IBM" },
    { slug: "keras", name: "Keras" },
    { slug: "python", name: "Python" },
    { slug: "tensorflow", name: "Tensor Flow" },
    { slug: "pytorch", name: "Pytorch" },
  ];

  return (
    <div id="skills" className="pt-8 pb-2 sm:pt-12 sm:pb-6 lg:pt-16 lg:pb-10 flex flex-col relative items-center p-5 justify-start min-h-[80vh] bg-neutral-950">
      <div className="flex-col font-body flex px-4 sm:px-5 text-lg max-w-4xl mb-8">
        <div className="text-center mb-6 pt-1 max-w-3xl mx-auto">
          <h2 className="text-4xl font-medium text-white">Skills</h2>
        </div>
        <span className="mt-2 font-body text-lg sm:text-xl font-light text-start px-4 sm:px-8 lg:px-[3rem] text-gray-300">
        Starting with a curiosity for coding in my early years, I’ve grown into building projects 
        that combine advanced machine learning with solid backend architectures. My work spans from 
        <span className="font-semibold text-blue-400"> training and fine-tuning variety of models (Vision, Language, Multimodal, Time Series)</span> to designing APIs 
        and managing databases, allowing me to craft solutions that are not only intelligent but 
        also reliable, efficient, and user-facing.
        </span>
        <span className="mt-8 font-body text-lg sm:text-xl font-light text-start px-4 sm:px-8 lg:px-[3rem] text-gray-300">
          Here is an insight into my Tech Toolkit:
        </span>
      </div>
      
      {/* Skills List Button */}
      <div className="w-full max-w-6xl flex justify-end mb-2 -mt-6">
        <button
          onClick={() => setIsListModalOpen(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200 shadow-lg hover:shadow-blue-800/25"
        >
          As a list
        </button>
      </div>
      
      <div className="w-full max-w-6xl">
        <ThreeDPhotoCarousel skills={skills} />
      </div>
      
      {/* Skills List Modal */}
      <AnimatePresence>
        {isListModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsListModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-neutral-900 rounded-2xl border border-white/20 p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">My Tech Toolkit</h2>
                <button
                  onClick={() => setIsListModalOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(skillCategories).map(([categoryName, categorySkills], categoryIndex) => (
                  <motion.div
                    key={categoryName}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: categoryIndex * 0.1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-bold text-white border-b border-white/20 pb-2">
                      {categoryName}
                    </h3>
                    <div className="space-y-2">
                      {categorySkills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.slug}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.02) }}
                          className="bg-white/5 hover:bg-white/10 rounded-lg p-3 border border-white/10 transition-colors duration-200"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-6 h-6 ${categoryColors[categoryName as keyof typeof categoryColors]} rounded-md flex items-center justify-center text-white font-bold text-xs`}>
                              {skill.name.charAt(0).toUpperCase()}
                            </div>
                            <span className="text-white font-medium text-sm">{skill.name}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skills;
