export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="relative w-20 h-20">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-[3px] border-blue-100 dark:border-blue-900/20"></div>
        <div className="absolute inset-0 rounded-full border-[3px] border-blue-600 border-t-transparent animate-spin"></div>
        
        {/* Middle Ring */}
        <div className="absolute inset-3 rounded-full border-[3px] border-indigo-100 dark:border-indigo-900/20"></div>
        <div className="absolute inset-3 rounded-full border-[3px] border-indigo-500 border-b-transparent animate-spin" style={{ animationDirection: "reverse", animationDuration: "1.2s" }}></div>
        
        {/* Inner Ring */}
        <div className="absolute inset-6 rounded-full border-[3px] border-sky-100 dark:border-sky-900/20"></div>
        <div className="absolute inset-6 rounded-full border-[3px] border-sky-400 border-l-transparent animate-spin" style={{ animationDuration: "0.8s" }}></div>
      </div>
    </div>
  );
}
