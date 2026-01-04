import { useState } from "react";

import { contactTabs } from "@/data/navlinks";
import ContactMessage from "./contact-message";
import ContactInfo from "./contact-info";

export default function ContactPage() {
  const [activeContact, setActiveContact] = useState<"info" | "message">(
    "info"
  );

  return (
    <>
      <div className="max-w-87.5 m-auto flex w-full border border-pri/20 rounded-lg overflow-hidden">
        {contactTabs.map((tab) => (
          <button
            key={tab.link}
            className={`w-1/2 py-3 px-6 cursor-pointer text-sm ${
              activeContact === tab.link
                ? "bg-accent text-black font-semibold"
                : "text-white"
            } `}
            onClick={() => setActiveContact(tab.link)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="mt-12 max-w-3xl mx-auto">
        {activeContact === "info" && <ContactInfo />}
        {activeContact === "message" && <ContactMessage />}
      </div>
    </>
  );
}
