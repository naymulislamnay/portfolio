export default function ChatButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-600/30 hover:bg-purple-500 transition-colors animate-bounce">
        <i className="far fa-comment-dots text-xl"></i>
      </button>
    </div>
  );
}