export function ProjectSummarySlide() {
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-5xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Genesis Molecular Engine
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI-Generated PD-L1 Modulator for Type 1 Diabetes Treatment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="space-y-4">
            <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse mx-auto" />
            <h3 className="text-cyan-400">AI-Generated Molecule</h3>
            <p className="text-gray-300">
              Small molecule via Genesis Molecular Engine targeting PD-L1 for autoimmune modulation
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse mx-auto" />
            <h3 className="text-purple-400">Type 1 Diabetes Focus</h3>
            <p className="text-gray-300">
              Targets autoimmune response root cause with novel oral bioavailability approach
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse mx-auto" />
            <h3 className="text-pink-400">Validated Metrics</h3>
            <p className="text-gray-300">
              High oral bioavailability, novel structure, low toxicity profile
            </p>
          </div>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
          <h4 className="text-cyan-400 mb-4">Key Performance Metrics</h4>
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div>
              <div className="text-2xl">–9.1 kcal/mol</div>
              <div className="text-sm text-gray-400">Docking Score</div>
            </div>
            <div>
              <div className="text-2xl">0.83</div>
              <div className="text-sm text-gray-400">QED Score</div>
            </div>
            <div>
              <div className="text-2xl">216.17</div>
              <div className="text-sm text-gray-400">Molecular Weight</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}