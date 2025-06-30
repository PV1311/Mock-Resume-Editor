import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { saveResume } from "../api/resumeApi";

export function useSaveResume() {
  return useMutation({
    mutationFn: saveResume,
    onMutate: () => toast.loading("Saving resume...", { id: "save-resume" }),
    onSuccess: () =>
      toast.success("Resume saved successfully!", { id: "save-resume" }),
    onError: () => toast.error("Failed to save resume", { id: "save-resume" }),
  });
}
