import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [mood, setMood] = useState("🙂");
  const [tasks, setTasks] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const savedMood = localStorage.getItem("mood");
    const savedTasks = JSON.parse(localStorage.getItem("routine")) || [];
    const savedBudget = JSON.parse(localStorage.getItem("budget")) || [];

    setMood(savedMood || "🙂");
    setTasks(savedTasks);
    setTransactions(savedBudget);
  }, []);

  const completed = tasks.filter((t) => t.done).length;
  const total = tasks.length;
  const balance = transactions.reduce(
    (acc, tx) => (tx.type === "income" ? acc + tx.amount : acc - tx.amount),
    0
  );

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-indigo-100 to-blue-50">
      <h1 className="text-3xl font-bold mb-4 text-center">🌟 Welcome Back, Meenie</h1>

      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold mb-2">Mood</h2>
          <p className="text-4xl">{mood}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold mb-2">Tasks</h2>
          <p className="text-lg">{completed} / {total} done</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold mb-2">Budget Balance</h2>
          <p className="text-lg">₹{balance.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-6 bg-yellow-100 p-4 rounded-lg shadow max-w-2xl mx-auto text-center">
        <p className="text-lg font-medium">💡 Daily Tip: “Breathe deeply. You’ve got this.”</p>
      </div>
    </div>
  );
}
