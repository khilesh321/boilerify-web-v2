import { BookOpen, Terminal } from "lucide-react";

export default function DocsLoading() {
  return (
    <div className="min-h-screen bg-black z-999 text-white overflow-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 grid-background opacity-100 pointer-events-none" />
      
      {/* Gradient Orbs */}
      <div className="fixed top-0 left-0 md:left-1/4 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-0 md:right-1/4 w-64 h-64 md:w-96 md:h-96 bg-green-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation Skeleton */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 animate-pulse">
              <div className="w-5 h-5 bg-emerald-400/20 rounded" />
              <div className="w-24 h-6 bg-white/10 rounded" />
            </div>
            <div className="flex items-center gap-4 animate-pulse">
              <div className="w-6 h-6 bg-emerald-400/20 rounded" />
              <div className="w-32 h-6 bg-white/10 rounded hidden sm:block" />
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20 relative">
        <div className="container mx-auto px-6">
          <div className="flex gap-8">
            {/* Sidebar Skeleton (Desktop) */}
            <aside className="hidden lg:block w-64 fixed top-24 space-y-3 animate-pulse">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-white/10 rounded" />
                  <div className="w-32 h-4 bg-white/10 rounded" />
                </div>
              ))}
            </aside>

            {/* Main Content Skeleton */}
            <main className="flex-1 lg:ml-72">
              {/* Title Skeleton */}
              <div className="mb-12 text-center animate-pulse">
                <div className="w-64 h-12 bg-white/10 rounded mx-auto mb-4" />
                <div className="w-96 h-6 bg-white/10 rounded mx-auto" />
              </div>

              {/* Loading Spinner */}
              <div className="flex flex-col items-center justify-center py-20">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl animate-pulse" />
                  <div className="relative glass-card p-6 rounded-2xl">
                    <BookOpen className="w-12 h-12 text-emerald-400 animate-pulse" />
                  </div>
                </div>

                <div className="relative mb-4">
                  <div className="w-16 h-16 border-4 border-emerald-400/20 rounded-full" />
                  <div className="absolute top-0 left-0 w-16 h-16 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                </div>

                <p className="text-lg font-semibold text-emerald-400 animate-pulse">
                  Loading Documentation...
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Fetching the latest guides
                </p>
              </div>

              {/* Content Skeleton */}
              <div className="space-y-8 animate-pulse">
                {[1, 2, 3].map((section) => (
                  <div key={section} className="glass-card p-6 md:p-8 rounded-2xl">
                    <div className="w-48 h-8 bg-white/10 rounded mb-4" />
                    <div className="space-y-3">
                      <div className="w-full h-4 bg-white/5 rounded" />
                      <div className="w-5/6 h-4 bg-white/5 rounded" />
                      <div className="w-4/6 h-4 bg-white/5 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
