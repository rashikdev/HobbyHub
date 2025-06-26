const GroupRules = () => {
  const rules = [
    "✅ Be respectful and kind to all members.",
    "🚫 No spamming or self-promotion without permission.",
    "📌 Stay on topic related to the group’s hobby.",
    "🔒 Do not share personal info of others.",
    "🕐 Join group events on time and be active.",
    "📢 Report any issues to group moderators/admins.",
  ];

  return (
    <div className="border-l-2 border-t-2 border-indigo-500 h-[400px] mt-7 p-10 rounded-xl shadow-md transition">
      <h2 className="text-xl font-bold text-indigo-600 mb-3">📜 Group Rules</h2>
      <ul className="list-disc list-inside space-y-2">
        {rules.map((rule, idx) => (
          <li key={idx}>{rule}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupRules;
