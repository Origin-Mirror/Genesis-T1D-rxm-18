import { ValidationTable } from './ValidationTable'

export function ValidationSlide() {
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-4xl bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
            In Silico Validation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive computational validation demonstrates strong therapeutic potential
          </p>
        </div>

        <ValidationTable />

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 p-6 rounded-xl border border-green-500/20 text-center">
            <h4 className="text-green-400 mb-2">Drug-Likeness</h4>
            <p className="text-gray-300 text-sm">
              QED score of 0.83 indicates excellent drug-like properties
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-6 rounded-xl border border-blue-500/20 text-center">
            <h4 className="text-blue-400 mb-2">Safety Profile</h4>
            <p className="text-gray-300 text-sm">
              Low predicted toxicity across multiple endpoints
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 p-6 rounded-xl border border-purple-500/20 text-center">
            <h4 className="text-purple-400 mb-2">Target Affinity</h4>
            <p className="text-gray-300 text-sm">
              Strong binding affinity to PD-L1 target protein
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}