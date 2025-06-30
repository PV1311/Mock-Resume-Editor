import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ResumeUploader from "./components/ResumeUploader";
import ResumeEditor from "./components/ResumeEditor";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 0 },
  },
});

function App() {
  const [resume, setResume] = useState(null);

  return (
    <QueryClientProvider client={queryClient}>
      {/* ✅ MAIN LAYOUT WRAPPER */}
      <div className="min-h-screen bg-gradient-to-r from-sky-100 to-blue-200 p-6 font-sans">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8 tracking-wide">
            Resume Editor
          </h1>
          {!resume ? (
            <ResumeUploader onUpload={setResume} />
          ) : (
            <ResumeEditor resume={resume} setResume={setResume} />
          )}
        </div>
      </div>

      <Toaster position="top-center" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
