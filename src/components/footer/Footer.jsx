import { Github, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-center py-6 dark:bg-slate-950 dark:text-white">
      <div className="container flex justify-center flex-wrap gap-6 mb-6">
        <a
          href="https://github.com/amitanand809230"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 dark:text-white hover:text-blue-400 transition"
        >
          <Github size={20} />
          GitHub
        </a>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Amit Anand Sinha. All rights
          reserved.
        </p>

        <a
          href="https://linkedin.com/in/amitanand809230"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 dark:text-white hover:text-blue-400 transition"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
