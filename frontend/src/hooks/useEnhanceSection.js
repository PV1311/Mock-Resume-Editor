import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { enhanceSection } from "../api/resumeApi";

export function useEnhanceSection(setResume) {
  return useMutation({
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
}
