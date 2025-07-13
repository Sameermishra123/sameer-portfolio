import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Code } from "lucide-react"

export default function Achievements({ className }: { className?: string }) {
  return (
    <section id="achievements" className={`py-16 px-4 scroll-mt-20 ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Highlights of my dedication to problem-solving and research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Code className="text-blue-600 mr-3" size={28} />
                <h3 className="text-xl font-semibold">LeetCode Problem Solving</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Solved <strong>200+ algorithmic problems</strong> on LeetCode, ranking in the top 10% among peers and
                strengthening algorithmic and coding skills.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Trophy className="text-purple-600 mr-3" size={28} />
                <h3 className="text-xl font-semibold">Published Research</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Published research on deep learning-based skin disease classification, applying advanced neural network
                techniques in TensorFlow and PyTorch.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
