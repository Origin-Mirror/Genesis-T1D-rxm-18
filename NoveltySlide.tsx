export function NoveltySlide() {
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-4xl bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent">
            Novelty & Intellectual Property
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IP protection strategy for breakthrough innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 p-6 rounded-xl border border-cyan-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
                <h3 className="text-cyan-400">Tanimoto Similarity Analysis</h3>
              </div>
              <p className="text-gray-300">
                Maximum similarity vs DrugBank: <span className="text-white">0.333</span>
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Well below the 0.4 threshold for structural novelty
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 p-6 rounded-xl border border-green-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                <h3 className="text-green-400">Novel Structure</h3>
              </div>
              <p className="text-gray-300">
                <span className="text-white">100% novel</span> under Tanimoto &lt; 0.4 threshold
              </p>
              <p className="text-sm text-gray-400 mt-2">
                No existing compounds with similar structure
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 p-6 rounded-xl border border-purple-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse" />
                <h3 className="text-purple-400">Blockchain Protection</h3>
              </div>
              <p className="text-gray-300">
                SHA-256 + IPFS timestamped record
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Immutable proof of discovery and invention date
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/5 p-6 rounded-xl border border-pink-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse" />
                <h3 className="text-pink-400">Patent Strategy</h3>
              </div>
              <p className="text-gray-300">
                Provisional patent in preparation
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Full utility patent filing planned for Q2 2025
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700">
          <h4 className="text-white mb-6 text-center">IP Protection Timeline</h4>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-black mx-auto">
                ✓
              </div>
              <h5 className="text-cyan-400 text-sm">Blockchain Record</h5>
              <p className="text-gray-400 text-xs">Completed</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white mx-auto">
                2
              </div>
              <h5 className="text-purple-400 text-sm">Provisional Patent</h5>
              <p className="text-gray-400 text-xs">In Progress</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white mx-auto">
                3
              </div>
              <h5 className="text-gray-400 text-sm">Utility Patent</h5>
              <p className="text-gray-400 text-xs">Q2 2025</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white mx-auto">
                4
              </div>
              <h5 className="text-gray-400 text-sm">International</h5>
              <p className="text-gray-400 text-xs">Q4 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}