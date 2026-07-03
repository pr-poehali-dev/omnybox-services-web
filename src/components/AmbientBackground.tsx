export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[hsl(var(--brand))]/25 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-20 h-[380px] w-[380px] rounded-full bg-[hsl(var(--brand-3))]/20 blur-3xl animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/4 h-[360px] w-[360px] rounded-full bg-[hsl(var(--brand-4))]/20 blur-3xl animate-blob [animation-delay:8s]" />
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] rounded-full bg-[hsl(var(--brand-5))]/15 blur-3xl animate-blob [animation-delay:12s]" />
    </div>
  );
}
