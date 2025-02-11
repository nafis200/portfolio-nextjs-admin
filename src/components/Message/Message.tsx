"use client";

import { useEffect, useState } from "react";
import Messagefetch from "@/utils/actions/Messagefetch";

interface MessageData {
  email: string;
  name: string;
  message: string;
}

const Message = () => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const data = await Messagefetch();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
      setLoading(false);
    };

    fetchMessages();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading messages...</p>;

  return (
    <div className="min-h-screen flex justify-center">
      <div className="container">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6 mt-24">Messages</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div key={index} className="card bg-white shadow-xl rounded-2xl p-4">
                <div className="card-body">
                  <h3 className="card-title text-lg font-semibold text-gray-800">{msg.name}</h3>
                  <p className="text-gray-600">{msg.message}</p>
                  <span className="text-sm text-gray-500">{msg.email}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No messages available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
