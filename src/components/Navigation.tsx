export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <div className="glass dark:bg-black/40 rounded-full px-6 py-3 flex items-center space-x-8 pointer-events-auto shadow-lg shadow-purple-900/10 border border-white/5">
        <a className="text-[10px] font-medium hover:text-primary transition-colors cursor-hover" href="#home">Home</a>
        <a className="text-[10px] font-medium hover:text-primary transition-colors cursor-hover" href="#about">About</a>
        <a className="text-[10px] font-medium hover:text-primary transition-colors cursor-hover" href="#skills">Skills</a>
        <a className="text-[10px] font-medium hover:text-primary transition-colors cursor-hover" href="#projects">Work</a>
        <a className="text-[10px] font-medium hover:text-primary transition-colors cursor-hover" href="#education">Education</a>
        <a className="text-[10px] font-medium hover:text-primary transition-colors cursor-hover" href="#contact">Contact</a>
      </div>
    </nav>
  );
}