import ActionButtons from "./ActionButtons";
import BasicTextSectionGroup from "./BasicTextSectionGroup";
import MultiLineSectionGroup from "./MultiLineSectionGroup";
import { useEnhanceSection } from "../hooks/useEnhanceSection";
import { useSaveResume } from "../hooks/useSaveResume";

export default function ResumeEditor({ resume, setResume }) {
  const enhance = useEnhanceSection(setResume);
  const save = useSaveResume();

  const handleChange = (section, value) =>
    setResume((prev) => ({ ...prev, [section]: value }));

  const handleEnhance = (section) => {
    const content = resume[section];
    const payload = Array.isArray(content)
      ? content.map((item) => JSON.stringify(item)).join("\n")
      : content;
    enhance.mutate({ section, content: payload });
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(resume, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.json";
    a.click();
  };

  return (
    <div className="space-y-8">
      <BasicTextSectionGroup
        fields={["name", "summary"]}
        resume={resume}
        onChange={handleChange}
        onEnhance={handleEnhance}
        isLoading={enhance.isLoading}
      />

      <MultiLineSectionGroup
        fields={["experience", "education", "skills"]}
        resume={resume}
        onChange={handleChange}
        onEnhance={handleEnhance}
        isLoading={enhance.isLoading}
      />

      <ActionButtons
        onSave={() => save.mutate(resume)}
        onDownload={handleDownload}
        isSaving={save.isLoading}
      />
    </div>
  );
}
