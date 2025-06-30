import ResumeSection from "./ResumeSection";

export default function BasicTextSectionGroup({
  fields,
  resume,
  onChange,
  onEnhance,
  isLoading,
}) {
  return (
    <>
      {fields.map((key) => (
        <ResumeSection
          key={key}
          label={key}
          value={resume[key]}
          onChange={(v) => onChange(key, v)}
          onEnhance={() => onEnhance(key)}
          loading={isLoading}
        />
      ))}
    </>
  );
}
