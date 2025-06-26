import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "Mood", path: "/mood" },
    { label: "Routine", path: "/routine" },
    { label: "Budget", path: "/budget" },
    { label: "Insights", path: "/insights" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-600 dark:text-blue-300">LifeOS</span>
        <div className="flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                location.pathname === item.path
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-white"
                  : "hover:bg-blue-50 dark:hover:bg-gray-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

