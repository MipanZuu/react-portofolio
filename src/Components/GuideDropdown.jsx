import React from "react";

function GuideDropdown({ darkMode }) {
    return (
        <div className={`absolute bg-${darkMode ? "gray-800" : "white"} mt-2 p-2 rounded shadow-md`}>
            <ul>
                <li>
                    <a href="#" className={`text-${darkMode ? "gray-300" : "gray-700"}`}>
                        Getting Started
                    </a>
                </li>
                <li>
                    <a href="#" className={`text-${darkMode ? "gray-300" : "gray-700"}`}>
                        Themes
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default GuideDropdown;
