export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
      <div className="relative flex flex-col items-center">
        {/* Background ambient glow */}
        <div className="absolute inset-0 -m-8 scale-150 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
        
        {/* Floating Logo */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-primary/80 text-primary-foreground shadow-xl animate-bounce">
          <span className="text-3xl font-bold">J</span>
        </div>
        
        {/* Ground drop shadow that pulses with the bounce */}
        <div className="absolute -bottom-4 h-2 w-14 rounded-full bg-foreground/10 blur-sm animate-pulse"></div>
      </div>
      
      <div className="flex flex-col items-center gap-3">
        {/* <h3 className="text-lg font-bold tracking-tight text-foreground">
          Finding opportunities<span className="text-primary animate-pulse">...</span>
        </h3> */}
        
        {/* Staggered animated dots */}
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-primary/80 animate-bounce" style={{ animationDelay: "-0.3s" }}></div>
          <div className="h-2 w-2 rounded-full bg-primary/80 animate-bounce" style={{ animationDelay: "-0.15s" }}></div>
          <div className="h-2 w-2 rounded-full bg-primary/80 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
