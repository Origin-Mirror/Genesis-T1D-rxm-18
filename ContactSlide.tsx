export function ContactSlide() {
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-4xl bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Let's Revolutionize Treatment Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Partner with Genesis Molecular Engine to bring breakthrough therapies to patients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 rounded-xl border border-cyan-500/20">
              <h3 className="text-cyan-400 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white">Ebenezer Babasola</h4>
                  <p className="text-gray-300">Founder & Chief Scientific Officer</p>
                </div>
                <div>
                  <p className="text-purple-400">Genesis Molecular Engine</p>
                  <p className="text-gray-300">Toronto, Canada</p>
                </div>
                <div>
                  <a 
                    href="mailto:ebenezer@genesismolecular.com" 
                    className="inline-block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 underline"
                  >
                    ebenezer@genesismolecular.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-purple-400 mb-4">Next Steps</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span>Schedule partnership discussion</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span>Review detailed technical data</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full" />
                  <span>Finalize funding agreement</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 p-8 rounded-xl border border-green-500/20">
              <h3 className="text-green-400 mb-6">Why Partner With Us</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                  <div>
                    <h4 className="text-white text-sm">Proven AI Technology</h4>
                    <p className="text-xs text-gray-400">Genesis Molecular Engine with validated results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2" />
                  <div>
                    <h4 className="text-white text-sm">Strong IP Portfolio</h4>
                    <p className="text-xs text-gray-400">Novel compounds with comprehensive protection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
                  <div>
                    <h4 className="text-white text-sm">Experienced Team</h4>
                    <p className="text-xs text-gray-400">Scientific expertise and industry connections</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
              <h4 className="text-white mb-4">Ready to Transform Healthcare?</h4>
              <p className="text-gray-300 text-sm mb-6">
                Join us in developing the next generation of autoimmune therapeutics
              </p>
              <a 
                href="mailto:ebenezer@genesismolecular.com?subject=VitaDAO Partnership Inquiry"
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300"
              >
                Start the Conversation
              </a>
            </div>
          </div>
        </div>

        <div className="text-center py-8 border-t border-gray-700">
          <p className="text-gray-400">
            © 2025 Genesis Molecular Engine. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}