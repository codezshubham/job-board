export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
      <div className="relative flex items-center justify-center w-12 h-12">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-t-2 border-b-2 border-primary animate-spin" />
        {/* Inner spinning ring */}
        <div className="absolute inset-2 rounded-full border-l-2 border-r-2 border-primary/50 animate-spin" style={{ animationDirection: "reverse", animationDuration: "1s" }} />
        {/* Center pulsing dot */}
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      </div>
      <p className="text-sm font-medium text-muted-foreground animate-pulse">Loading...</p>
    </div>
  );
}
