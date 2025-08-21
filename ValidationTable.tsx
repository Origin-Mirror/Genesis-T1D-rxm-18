export function ValidationTable() {
  const validationData = [
    {
      parameter: "Molecular Weight",
      value: "216.17 Da",
      target: "< 500 Da",
      status: "Pass"
    },
    {
      parameter: "LogP",
      value: "2.34",
      target: "< 5",
      status: "Pass"
    },
    {
      parameter: "QED Score",
      value: "0.83",
      target: "> 0.5",
      status: "Excellent"
    },
    {
      parameter: "Docking Score",
      value: "−9.1 kcal/mol",
      target: "< −7",
      status: "Strong"
    },
    {
      parameter: "ADMET",
      value: "Favorable",
      target: "Low Risk",
      status: "Pass"
    },
    {
      parameter: "Synthetic Accessibility",
      value: "2.8",
      target: "< 4",
      status: "Pass"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Excellent":
        return "text-green-400"
      case "Strong":
        return "text-cyan-400"
      case "Pass":
        return "text-blue-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-700 overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 px-6 py-4">
        <h3 className="text-white">Computational Validation Results</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-800/50">
              <th className="px-6 py-3 text-left text-cyan-400">Parameter</th>
              <th className="px-6 py-3 text-left text-purple-400">Value</th>
              <th className="px-6 py-3 text-left text-pink-400">Target</th>
              <th className="px-6 py-3 text-left text-green-400">Status</th>
            </tr>
          </thead>
          <tbody>
            {validationData.map((row, index) => (
              <tr key={index} className="border-t border-gray-700/50 hover:bg-gray-800/30 transition-colors">
                <td className="px-6 py-4 text-gray-300">{row.parameter}</td>
                <td className="px-6 py-4 text-white">{row.value}</td>
                <td className="px-6 py-4 text-gray-400">{row.target}</td>
                <td className={`px-6 py-4 ${getStatusColor(row.status)}`}>
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}