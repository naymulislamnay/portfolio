export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-black text-center relative z-10">
      <div className="flex justify-center space-x-6 mb-8">
        <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all" href="https://github.com/naymulislamnay" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all" href="https://bd.linkedin.com/in/naymulislamnay" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all" href="mailto:naymulislamnay@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all" href="https://www.facebook.com/share/17f6wW3ThL" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all" href="https://wa.me/8801731150713" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      <p className="text-xs text-gray-600">© 2026 MD. Naymul Islam. All Rights Reserved.</p>
    </footer>
  );
}