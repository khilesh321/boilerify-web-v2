import { Terminal } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      {/* Grid Background */}
      <div className="fixed inset-0 grid-background opacity-100 pointer-events-none" />
      
      {/* Gradient Orbs */}
      <div className="fixed top-0 left-0 md:left-1/4 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-0 md:right-1/4 w-64 h-64 md:w-96 md:h-96 bg-green-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Logo with pulse animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl animate-pulse" />
          <div className="relative glass-card p-6 rounded-2xl">
            <Terminal className="w-12 h-12 text-emerald-400 animate-pulse" />
          </div>
        </div>

        {/* Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-emerald-400/20 rounded-full" />
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin" />
        </div>

        {/* Loading text */}
        <div className="text-center">
          <p className="text-lg font-semibold text-emerald-400 animate-pulse">
            Loading...
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Preparing your experience
          </p>
        </div>
      </div>
    </div>
  );
}
