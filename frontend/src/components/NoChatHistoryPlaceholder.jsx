import { MessageCircleIcon } from "lucide-react";

const NoChatHistoryPlaceholder = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-sky-50 rounded-full flex items-center justify-center mb-5 shadow-sm">
        <MessageCircleIcon className="size-8 text-blue-500" />
      </div>
      <h3 className="text-lg font-semibold text-slate-800 mb-3">
        Start your conversation with {name}
      </h3>
      <div className="flex flex-col space-y-3 max-w-md mb-5">
        <p className="text-slate-500 text-sm font-medium">
          This is the beginning of your conversation. Send a message to start chatting!
        </p>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-200 to-transparent mx-auto"></div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <button className="px-4 py-2 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-full hover:bg-blue-100 transition-all shadow-sm">
          👋 Say Hello
        </button>
        <button className="px-4 py-2 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-full hover:bg-blue-100 transition-all shadow-sm">
          🤝 How are you?
        </button>
        <button className="px-4 py-2 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-full hover:bg-blue-100 transition-all shadow-sm">
          📅 Meet up soon?
        </button>
      </div>
    </div>
  );
};

export default NoChatHistoryPlaceholder;
