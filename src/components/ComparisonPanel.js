export default function ComparisonPanel({ title, content, onWordSearch }) {
  return (
    <div className="w-full md:w-1/3 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
      <h2 className="text-xl font-bold mb-4 text-orange-300">{title}</h2>
      <div className="prose prose-invert max-w-none">
        {content || <p className="text-white/50">No content found.</p>}
      </div>
      <input
        type="text"
        onChange={(e) => onWordSearch(e.target.value)}
        placeholder={`Search in ${title}...`}
        className="mt-4 w-full p-2 rounded bg-white/10 text-white placeholder-white/70"
      />
    </div>
  );
}