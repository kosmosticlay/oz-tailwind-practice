export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-[5px]">
      <img
        className="w-[300px] rounded-lg mb-[3px]"
        src={content.img}
        alt={content.title}
      />
      <span className="text-[#d7fa00] border border-[#d7fa00] px-2 py-1 rounded-sm">
        모집중
      </span>
      <div className="text-[18px] font-semibold">{content.title}</div>
      <p className="text-[12px] text-[rgb(160,160,160)]">{content.subtitle}</p>
    </div>
  );
}
