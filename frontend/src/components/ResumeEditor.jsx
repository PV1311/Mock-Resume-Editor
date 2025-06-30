import { useMutation } from "@tanstack/react-query";
import { enhanceSection, saveResume } from "../api/resumeApi";
import toast from "react-hot-toast";

export default function ResumeEditor({ resume, setResume }) {
  const enhance = useMutation({
    mutationFn: enhanceSection,
    onMutate: ({ section }) => {
      toast.loading(`Enhancing ${section}...`, { id: `enhance-${section}` });
    },
    onSuccess: (data, variables) => {
      toast.success(`${variables.section} enhanced!`, {
        id: `enhance-${variables.section}`,
      });

      setResume((prev) => ({
        ...prev,
        [variables.section]: data.enhanced_content || data,
      }));
    },
    onError: (_, variables) =>
      toast.error(`Failed to enhance ${variables.section}`, {
        id: `enhance-${variables.section}`,
      }),
  });

  const save = useMutation({
    mutationFn: saveResume,
    onMutate: () => {
      toast.loading("Saving resume...", { id: "save-resume" });
    },
    onSuccess: () => {
      toast.success("Resume saved successfully!", { id: "save-resume" });
    },
    onError: () => {
      toast.error("Failed to save resume", { id: "save-resume" });
    },
  });

  function handleChange(section, value) {
    setResume((prev) => ({ ...prev, [section]: value }));
  }

  function handleEnhance(section) {
    const content = resume[section];
    const payload = Array.isArray(content)
      ? content.map((item) => JSON.stringify(item)).join("\n")
      : content;
    enhance.mutate({ section, content: payload });
  }

  function handleDownload() {
    const blob = new Blob([JSON.stringify(resume, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.json";
    a.click();
  }

  return (
    <div className="space-y-8">
      {["name", "summary"].map((key) => (
        <Section
          key={key}
          label={key}
          value={resume[key]}
          onChange={(v) => handleChange(key, v)}
          onEnhance={() => handleEnhance(key)}
          loading={enhance.isLoading}
        />
      ))}

      {["experience", "education", "skills"].map((key) => (
        <Section
          key={key}
          label={key}
          value={
            Array.isArray(resume[key])
              ? resume[key]
                  .map((item) =>
                    typeof item === "object"
                      ? JSON.stringify(item, null, 2)
                      : item
                  )
                  .join("\n")
              : resume[key]
          }
          onChange={(v) =>
            handleChange(
              key,
              v.split("\n").map((line) => {
                try {
                  return JSON.parse(line);
                } catch {
                  return line;
                }
              })
            )
          }
          onEnhance={() => handleEnhance(key)}
          loading={enhance.isLoading}
        />
      ))}

      <div className="flex justify-center gap-6">
        <button
          onClick={() => save.mutate(resume)}
          className={`bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-2 rounded-full shadow-lg ${
            save.isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={save.isLoading}
        >
          💾 {save.isLoading ? "Saving..." : "Save Resume"}
        </button>
        <button
          onClick={handleDownload}
          className="bg-green-600 hover:bg-green-700 transition text-white font-semibold px-6 py-2 rounded-full shadow-lg"
        >
          ⬇️ Download JSON
        </button>
      </div>
    </div>
  );
}

function Section({ label, value, onChange, onEnhance, loading }) {
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
