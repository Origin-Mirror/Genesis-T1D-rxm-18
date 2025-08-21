'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './components/ui/button'
import { ProjectSummarySlide } from './components/ProjectSummarySlide'
import { UnmetNeedSlide } from './components/UnmetNeedSlide'
import { SolutionSlide } from './components/SolutionSlide'
import { ValidationSlide } from './components/ValidationSlide'
import { NoveltySlide } from './components/NoveltySlide'
import { RoadmapSlide } from './components/RoadmapSlide'
import { FundingSlide } from './components/FundingSlide'
import { ContactSlide } from './components/ContactSlide'

const slides = [
  { id: 'project', title: 'Project Summary', component: ProjectSummarySlide },
  { id: 'need', title: 'Unmet Need', component: UnmetNeedSlide },
  { id: 'solution', title: 'Our Solution', component: SolutionSlide },
  { id: 'validation', title: 'Validation', component: ValidationSlide },
  { id: 'novelty', title: 'Novelty & IP', component: NoveltySlide },
  { id: 'roadmap', title: 'Roadmap', component: RoadmapSlide },
  { id: 'funding', title: 'Funding', component: FundingSlide },
  { id: 'contact', title: 'Contact', component: ContactSlide },
]

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Genesis Molecular Engine
              </h1>
              <div className="text-sm text-gray-400">
                {currentSlide + 1} / {slides.length}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="text-cyan-400 hover:text-cyan-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="text-cyan-400 hover:text-cyan-300"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide Content */}
      <main className="pt-20 min-h-screen flex flex-col">
        <CurrentSlideComponent />
      </main>

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center space-x-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index
                    ? 'bg-cyan-400'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                title={slide.title}
              />
            ))}
          </div>
          <div className="text-center mt-2">
            <h3 className="text-sm text-cyan-400">{slides[currentSlide].title}</h3>
          </div>
        </div>
      </footer>
    </div>
  )
}