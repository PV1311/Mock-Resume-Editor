export default function ResumeSection({
  label,
  value,
  onChange,
  onEnhance,
  loading,
}) {
  return (
    <div className="p-4 bg-sky-50 border border-blue-200 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-2">
        <label className="text-lg font-bold text-blue-700 capitalize">
          {label}
        </label>
        <button
          onClick={onEnhance}
          disabled={loading}
          className={`text-sm bg-indigo-500 hover:bg-indigo-600 transition text-white px-4 py-1 rounded-full shadow ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Enhancing..." : "Enhance with AI ✨"}
        </button>
      </div>
      <textarea
        className="w-full bg-white p-3 text-gray-800 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        value={value}
        rows={label === "summary" ? 3 : 5}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
