export function SolutionSlide() {
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-4xl bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Our Revolutionary Solution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            First-in-class PD-L1 modulator designed to address the autoimmune root cause
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 p-8 rounded-xl border border-cyan-500/20 text-center space-y-4">
            <div className="w-8 h-8 bg-cyan-400 rounded-full animate-pulse mx-auto flex items-center justify-center text-black">
              1
            </div>
            <h3 className="text-cyan-400">First-in-Class</h3>
            <p className="text-gray-300">
              Novel PD-L1 modulator with unique mechanism of action for autoimmune diseases
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 p-8 rounded-xl border border-purple-500/20 text-center space-y-4">
            <div className="w-8 h-8 bg-purple-400 rounded-full animate-pulse mx-auto flex items-center justify-center text-black">
              2
            </div>
            <h3 className="text-purple-400">Oral Delivery</h3>
            <p className="text-gray-300">
              Small molecule with excellent oral bioavailability and immune rebalancing potential
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/5 p-8 rounded-xl border border-pink-500/20 text-center space-y-4">
            <div className="w-8 h-8 bg-pink-400 rounded-full animate-pulse mx-auto flex items-center justify-center text-black">
              3
            </div>
            <h3 className="text-pink-400">Root Cause</h3>
            <p className="text-gray-300">
              Addresses autoimmune root cause of Type 1 Diabetes, not just symptoms
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-8 rounded-xl border border-cyan-500/20">
          <h4 className="text-white mb-6 text-center">Mechanism of Action</h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="text-cyan-400">PD-L1 Targeting</h5>
              <p className="text-gray-300">
                Modulates PD-L1 expression to restore immune tolerance and prevent autoimmune attack on pancreatic beta cells.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="text-purple-400">Immune Rebalancing</h5>
              <p className="text-gray-300">
                Promotes regulatory T-cell function while reducing inflammatory responses, potentially preserving remaining beta cell function.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center p-6 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-xl border border-green-500/20">
          <h4 className="text-green-400 mb-2">Competitive Advantage</h4>
          <p className="text-white">
            Unlike current treatments that manage symptoms, our molecule targets the underlying autoimmune process
          </p>
        </div>
      </div>
    </div>
  )
}