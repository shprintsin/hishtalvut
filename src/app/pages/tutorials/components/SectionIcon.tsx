export function SectionIcon({ icon }: { icon: string; }) {
  return (
    <span className="text-6xl mr-2.5 inline-block mx-2">
      <i className={icon}></i>
    </span>
  );
}
