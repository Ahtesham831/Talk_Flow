import { MessageCircleIcon } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <div className="size-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
        <MessageCircleIcon className="size-10 text-blue-500" />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">Select a conversation</h3>
      <p className="text-slate-500 max-w-md font-medium">
        Choose a contact from the sidebar to start chatting or continue a previous conversation.
      </p>
    </div>
  );
};

export default NoConversationPlaceholder;
