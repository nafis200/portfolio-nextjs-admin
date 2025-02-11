

import Message from "@/components/Message/Message";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message",
  description: "Sent Message",
};
const MessagePage = () => {
    return (
        <div className="lg:ml-[130px]">
            <Message/>
        </div>
    );
};

export default MessagePage;