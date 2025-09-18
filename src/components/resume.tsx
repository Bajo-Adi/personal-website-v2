"use client";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div id="resume" className="mt-8 flex flex-col relative items-center p-1 justify-start min-h-[100vh] bg-neutral-950">
      <div className="flex-col font-body flex px-4 sm:px-5 text-lg max-w-6xl mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6 pt-1 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-medium text-white">Resume</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-2 w-full"
        >
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 sm:p-6 shadow-2xl w-full flex justify-center">
            <div className="overflow-auto rounded-lg bg-white">
              <iframe
                src="https://drive.google.com/file/d/1LHbRGDOmrW63ZlKkDhWsoHSOk0Gk4ziF/preview?usp=sharing&embedded=true"
                width="1000"
                height="800"
                className="rounded-lg border-0"
                title="Resume"
                allow="autoplay"
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <p className="text-gray-300 text-sm">
            Having trouble viewing?{" "}
            <a
              href="https://drive.google.com/file/d/1LHbRGDOmrW63ZlKkDhWsoHSOk0Gk4ziF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              Open in new tab
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
