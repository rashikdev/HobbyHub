import { motion } from "framer-motion";
const FaqSection = () => {
  const faqData = [
    {
      question: "What is HobbyHub?",
      answer:
        "HobbyHub is a platform where users can join or create groups around their hobbies, collaborate, and grow their skills together.",
    },
    {
      question: "Is HobbyHub free to use?",
      answer:
        "Yes, HobbyHub is completely free to use for all hobby enthusiasts.",
    },
    {
      question: "How can I join a group?",
      answer:
        "Simply browse the available groups and click the 'Join' button. Some groups may have specific requirements.",
    },
    {
      question: "Can I create my own group?",
      answer:
        "Absolutely! Just go to the 'Create Group' section and fill in the required information.",
    },
    {
      question: "Is there any age restriction?",
      answer:
        "HobbyHub is open to all, but for safety, we recommend users be at least 13 years old.",
    },
  ];

  return (
    <div className="w-11/12 mx-auto mb-20">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        ❓ Frequently Asked Questions
      </h2>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-lg font-medium">
                {faq.question}
              </div>
              <div className="collapse-content text-sm text-gray-400">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <motion.img
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          src="https://i.postimg.cc/Wbp3SqjP/Download-man-character-thinking-for-free-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default FaqSection;
