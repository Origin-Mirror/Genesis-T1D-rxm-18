export function FundingSlide() {
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-4xl bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
            Funding Request
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic investment to accelerate development and validation
          </p>
        </div>

        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="text-6xl bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              $500,000
            </div>
            <div className="text-xl text-gray-300">USD from VitaDAO</div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Funding will accelerate our molecule from computational validation to IND-ready status, 
              positioning for clinical trials and pharmaceutical partnerships.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 p-8 rounded-xl border border-cyan-500/20 text-center space-y-4">
            <div className="text-3xl text-cyan-400">30%</div>
            <h3 className="text-cyan-400">Synthesis & Validation</h3>
            <p className="text-gray-300 text-sm">
              Chemical synthesis, purification, and in vitro binding validation studies
            </p>
            <div className="text-sm text-gray-400">$150,000</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 p-8 rounded-xl border border-purple-500/20 text-center space-y-4">
            <div className="text-3xl text-purple-400">40%</div>
            <h3 className="text-purple-400">Toxicology & Profiling</h3>
            <p className="text-gray-300 text-sm">
              ADMET studies, pharmacokinetic profiling, and safety assessments
            </p>
            <div className="text-sm text-gray-400">$200,000</div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/5 p-8 rounded-xl border border-pink-500/20 text-center space-y-4">
            <div className="text-3xl text-pink-400">30%</div>
            <h3 className="text-pink-400">IND Prep & IP Legal</h3>
            <p className="text-gray-300 text-sm">
              Regulatory documentation, patent filing, and legal protection costs
            </p>
            <div className="text-sm text-gray-400">$150,000</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700">
          <h4 className="text-white mb-6 text-center">Value Proposition for VitaDAO</h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="text-green-400">Strategic Returns</h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Novel IP with high commercial potential</li>
                <li>• First-mover advantage in PD-L1 small molecules</li>
                <li>• Multiple licensing and partnership opportunities</li>
                <li>• Potential for platform technology expansion</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-cyan-400">Mission Alignment</h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Breakthrough treatment for autoimmune disease</li>
                <li>• AI-driven drug discovery innovation</li>
                <li>• Open science and collaboration focus</li>
                <li>• Community-driven research advancement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}