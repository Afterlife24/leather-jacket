import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

// Define questions
const questions = [
  "What's your country?",
  "What's your name?",
  "How old are you?",
  "Nice to meet you! Anything else you'd like to ask me?",
];

const ChatAssistant = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [chatLog, setChatLog] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");

  // Hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Handle user input and move to next question on Enter key
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && userInput.trim() !== "") {
      const newLog = [
        ...chatLog,
        `🤖 ${questions[currentQuestionIndex]}`,
        `🧑 ${userInput}`,
      ];
      setChatLog(newLog);
      console.log(`Q${currentQuestionIndex + 1}: ${questions[currentQuestionIndex]}`);
      console.log(`A${currentQuestionIndex + 1}: ${userInput}`);

      setUserInput("");

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setChatLog([...newLog, "🤖 Thanks for chatting!"]);
        console.log("All answers collected:", newLog);
      }
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {showTooltip && (
        <div className="bg-gray-900 text-white text-sm p-2 rounded-md mb-2 animate-fadeIn shadow-md">
          👋 Hi! Need help?
        </div>
      )}

      {chatOpen && (
        <div className="bg-white/60 backdrop-blur-md p-4 rounded-xl shadow-2xl w-[400px] h-[500px] mb-2 overflow-y-auto animate-slideUp border border-gray-200 flex flex-col justify-between">
          <div className="font-semibold mb-3 text-gray-800 text-lg text-center">
            💬 Chat Assistant
          </div>

          {/* Chat Log */}
          <div className="text-sm mb-3 flex-grow overflow-y-auto space-y-2 px-2">
            {chatLog.map((line, index) => (
              <div
                key={index}
                className={`p-2 rounded-xl ${
                  line.startsWith("🤖")
                    ? "bg-gray-200 text-gray-800 text-left max-w-[70%]"
                    : "bg-blue-500 text-white text-right ml-auto max-w-[70%]"
                }`}
              >
                {line.replace("🤖 ", "").replace("🧑 ", "")}
              </div>
            ))}
            <div className="text-gray-500 font-semibold text-left bg-gray-100 p-2 rounded-xl max-w-[70%]">
              🤖 {questions[currentQuestionIndex]}
            </div>
          </div>

          {/* Input field */}
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full p-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500 bg-gray-100"
            placeholder="Type your answer..."
            autoFocus
          />
        </div>
      )}

      {/* Floating Chat Button */}
      <button
        className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-200 ease-in-out"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default ChatAssistant;
