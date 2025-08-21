export function RoadmapSlide() {
  const roadmapSteps = [
    {
      phase: "Phase 1",
      title: "Wet Lab Synthesis",
      timeline: "Q1 2025",
      description: "Chemical synthesis and purification of lead compound",
      status: "upcoming"
    },
    {
      phase: "Phase 2", 
      title: "In Vitro PD-L1 Binding Validation",
      timeline: "Q2 2025",
      description: "Biochemical assays to confirm target binding and selectivity",
      status: "upcoming"
    },
    {
      phase: "Phase 3",
      title: "ADMET + PK/PD Profiling",
      timeline: "Q3 2025", 
      description: "Comprehensive pharmacokinetic and pharmacodynamic studies",
      status: "upcoming"
    },
    {
      phase: "Phase 4",
      title: "IND-Enabling Studies",
      timeline: "Q4 2025",
      description: "Toxicology and safety studies for regulatory submission",
      status: "upcoming"
    },
    {
      phase: "Phase 5",
      title: "Full Patent / IP-NFT Licensing",
      timeline: "Q1 2026",
      description: "Complete intellectual property protection and licensing strategy",
      status: "upcoming"
    }
  ]

  return (
    <div className="flex-1 flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-4xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Development Roadmap
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic pathway from discovery to clinical development
          </p>
        </div>

        <div className="space-y-8">
          {roadmapSteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                  {index + 1}
                </div>
              </div>
              
              <div className="flex-1 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-white text-lg">{step.title}</h3>
                    <p className="text-purple-400 text-sm">{step.phase}</p>
                  </div>
                  <div className="text-cyan-400 mt-2 md:mt-0">
                    {step.timeline}
                  </div>
                </div>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 p-6 rounded-xl border border-green-500/20 text-center">
            <h4 className="text-green-400 mb-2">12-18 Months</h4>
            <p className="text-gray-300 text-sm">
              Preclinical validation and safety studies completion
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-6 rounded-xl border border-blue-500/20 text-center">
            <h4 className="text-blue-400 mb-2">Regulatory Ready</h4>
            <p className="text-gray-300 text-sm">
              IND submission and Phase 1 clinical trial initiation
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 p-6 rounded-xl border border-purple-500/20 text-center">
            <h4 className="text-purple-400 mb-2">Partnership Opportunity</h4>
            <p className="text-gray-300 text-sm">
              Ready for pharmaceutical industry collaboration
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}