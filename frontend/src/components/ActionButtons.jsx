export default function ActionButtons({ onSave, onDownload, isSaving }) {
  return (
    <div className="flex justify-center gap-6">
      <button
        onClick={onSave}
        className={`bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-2 rounded-full shadow-lg ${
          isSaving ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isSaving}
      >
        💾 {isSaving ? "Saving..." : "Save Resume"}
      </button>
      <button
        onClick={onDownload}
        className="bg-green-600 hover:bg-green-700 transition text-white font-semibold px-6 py-2 rounded-full shadow-lg"
      >
        ⬇️ Download JSON
      </button>
    </div>
  );
}
