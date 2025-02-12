import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";

const Chatbot = () => {
  const [chatData, setChatData] = useState([]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Load chat data from JSON file
  useEffect(() => {
    fetch("/chatData.json")
      .then((res) => res.json())
      .then((data) => setChatData(data))
      .catch((err) => console.error("Error loading chatbot data:", err));
  }, []);

  // Function to preprocess text
  const preprocessText = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .split(" ");
  };

  // Function to compute TF-IDF vectors
  const computeTfIdf = (documents) => {
    const wordSet = new Set();
    const wordCounts = [];

    documents.forEach((doc) => {
      const words = preprocessText(doc);
      wordCounts.push(words);
      words.forEach((word) => wordSet.add(word));
    });

    const vocab = Array.from(wordSet);
    const tfIdfMatrix = wordCounts.map((words) =>
      vocab.map((word) => words.filter((w) => w === word).length / words.length)
    );

    return { tfIdfMatrix, vocab };
  };

  // Function to find the best matching answer
  const findAnswer = (userQuestion) => {
    if (chatData.length === 0) return "I'm still learning! Try again later.";

    const userWords = preprocessText(userQuestion);
    const { tfIdfMatrix, vocab } = computeTfIdf([
      userQuestion,
      ...chatData.map((item) => item.question),
    ]);

    const userVector = tf.tensor1d(tfIdfMatrix[0]);
    const bestMatchIndex = chatData
      .map((_, i) => {
        const chatVector = tf.tensor1d(tfIdfMatrix[i + 1]);
        const similarity = userVector
          .mul(chatVector)
          .sum()
          .div(userVector.norm().mul(chatVector.norm()));
        return similarity.dataSync()[0];
      })
      .reduce(
        (bestIndex, value, index, arr) =>
          value > arr[bestIndex] ? index : bestIndex,
        0
      );

    return tfIdfMatrix.length > 1 && bestMatchIndex >= 0
      ? chatData[bestMatchIndex].answer
      : "I don't understand that yet!";
  };

  // Handle user message submission
  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botMessage = { sender: "bot", text: findAnswer(input) };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* Chat Floating Container */}
      <div className="fixed bottom-5 right-5 flex flex-col items-end">
        {/* Chat Box */}
        <div
          className={`fixed bottom-5 right-5 bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 overflow-hidden transform transition-all duration-500 ease-in-out ${
            isOpen
              ? "translate-x-0 w-[22rem] h-[30rem]"
              : "translate-x-[200%] w-16 h-16"
          }`}
        >
          {/* Chat Header */}
          <div className="flex justify-between items-center bg-gray-200 dark:bg-gray-800 p-3">
            <h2 className="text-lg font-bold">Chat with Me</h2>
            <button
              className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-[70%] overflow-y-auto p-3 bg-white dark:bg-gray-900">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded my-1 ${
                  msg.sender === "user"
                    ? "bg-blue-700 text-white text-right"
                    : "bg-gray-300 dark:bg-gray-800 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="flex p-2 bg-gray-200 dark:bg-gray-800 ">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white rounded-l"
              placeholder="Type a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>

        {/* Floating Chat Button */}
        <button
          className={`bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-500 ${
            isOpen ? "opacity-0" : "w-16 h-16"
          }`}
          onClick={() => setIsOpen(true)}
        >
          💬
        </button>
      </div>
    </>
  );
};

export default Chatbot;
