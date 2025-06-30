import ResumeSection from "./ResumeSection";

export default function MultiLineSectionGroup({
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
            onChange(
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
          onEnhance={() => onEnhance(key)}
          loading={isLoading}
        />
      ))}
    </>
  );
}
