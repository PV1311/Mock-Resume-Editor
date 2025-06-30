import React from "react";

export default function ResumeUploader({ onUpload }) {
  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const dummyResume = {
      name: "John Doe",
      summary: "Experienced software engineer...",
      experience: [
        {
          title: "Software Developer",
          company: "ABC Corp",
          duration: "2020-2023",
        },
      ],
      education: [
        { degree: "B.Tech CSE", institute: "XYZ University", year: "2019" },
      ],
      skills: ["JavaScript", "React", "Python"],
    };

    onUpload(dummyResume);
  }

  return (
    <div className="flex flex-col items-center text-center gap-4 px-4 py-8">
      <label className="text-xl font-semibold text-gray-800">
        Upload your Resume (.pdf or .docx)
      </label>
      <input
        type="file"
        accept=".pdf,.docx"
        onChange={handleFileChange}
        className="w-full max-w-md text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-100 p-2 shadow-sm"
      />
      <p className="text-sm text-gray-500 italic">
        We'll parse and beautify it for you ✨
      </p>
    </div>
  );
}
