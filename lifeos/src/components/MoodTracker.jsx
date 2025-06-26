import { useState } from "react";

export default function MoodTracker() {
  const [mood, setMood] = useState("");
  const [response, setResponse] = useState("");
  const [log, setLog] = useState(() => {
    const saved = localStorage.getItem("mood-log");
    return saved ? JSON.parse(saved) : [];
  });

  const handleSubmit = () => {
    if (!mood.trim()) return;
    const reply = generateAIReply(mood);
    const newEntry = { id: Date.now(), mood, reply };
    const updatedLog = [newEntry, ...log];
    setLog(updatedLog);
    localStorage.setItem("mood-log", JSON.stringify(updatedLog));
    setResponse(reply);
    setMood("");
  };

  const generateAIReply = (input) => {
    const friendlyResponses = [
      "I hear you. Let’s take it one step at a time 💙",
      "You’re doing amazing, even when it’s tough.",
      "Breathe in... you’ve got this.",
      "Remember, storms don’t last forever 🌤️",
      "Proud of you for expressing how you feel 💫"
    ];
    return friendlyResponses[Math.floor(Math.random() * friendlyResponses.length)];
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🧠 Mood Tracker</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="How are you feeling?"
          className="flex-1 border p-2 rounded"
        />
        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Submit
        </button>
      </div>
      {response && (
        <div className="bg-indigo-100 text-indigo-800 p-3 rounded mb-4">
          {response}
        </div>
      )}
      <div>
        <h3 className="text-lg font-semibold mb-2">📝 Mood Log</h3>
        <ul className="space-y-2">
          {log.map((entry) => (
            <li key={entry.id} className="bg-gray-100 p-2 rounded">
              <div className="font-medium">🗣️ {entry.mood}</div>
              <div className="text-sm text-gray-600">💬 {entry.reply}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

