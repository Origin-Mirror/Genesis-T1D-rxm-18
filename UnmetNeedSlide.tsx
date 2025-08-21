export function UnmetNeedSlide() {
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-4xl bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-transparent">
            Unmet Need in Type 1 Diabetes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Current treatment options are limited and fail to address the root autoimmune cause
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 p-8 rounded-xl border border-red-500/20 text-center space-y-4">
            <div className="w-6 h-6 bg-red-400 rounded-full animate-pulse mx-auto" />
            <h3 className="text-red-400">Current Treatment</h3>
            <p className="text-gray-300">
              Lifelong insulin therapy is the only current option for patients
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 p-8 rounded-xl border border-yellow-500/20 text-center space-y-4">
            <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse mx-auto" />
            <h3 className="text-yellow-400">Treatment Gap</h3>
            <p className="text-gray-300">
              No oral small molecule targeting immune checkpoints available
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 p-8 rounded-xl border border-green-500/20 text-center space-y-4">
            <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse mx-auto" />
            <h3 className="text-green-400">Emerging Target</h3>
            <p className="text-gray-300">
              PD-L1 is an emerging therapeutic target with significant potential
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700">
          <h4 className="text-white mb-6 text-center">Market Opportunity</h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="text-cyan-400">Patient Population</h5>
              <ul className="space-y-2 text-gray-300">
                <li>• 1.6M people with T1D in the US</li>
                <li>• 40,000 new diagnoses annually</li>
                <li>• Growing global incidence rate</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-purple-400">Economic Burden</h5>
              <ul className="space-y-2 text-gray-300">
                <li>• $14.9B annual T1D costs in US</li>
                <li>• $300K+ lifetime cost per patient</li>
                <li>• Significant quality of life impact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}