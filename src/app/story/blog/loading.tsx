export default function BlogLoading() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="h-8 w-32 bg-[var(--warm-200)] rounded animate-pulse mb-8" />
        <div className="h-96 w-full bg-[var(--warm-200)] rounded-xl animate-pulse mb-8" />
        <div className="space-y-4">
          <div className="h-4 w-full bg-[var(--warm-200)] rounded animate-pulse" />
          <div className="h-4 w-[90%] bg-[var(--warm-200)] rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-[var(--warm-200)] rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
