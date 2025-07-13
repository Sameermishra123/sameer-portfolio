import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, Database, Lightbulb } from "lucide-react"

export default function About({ className }: { className?: string }) {
  return (
    <section id="about" className={`py-16 px-4 scroll-mt-20 ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A passionate B.Tech CSE student with a strong foundation in Python, C++, and problem-solving. Eager to
            contribute to innovative projects and apply technical expertise to build impactful, scalable solutions in
            the tech industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-600 mr-3" size={28} />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>Bachelor of Technology (Computer Science)</strong>
                <br />
                Bennett University, Greater Noida, India
                <br />
                2022 – 2026 | CGPA: 7.7
                <br />
                Minor in Entrepreneurship & Innovation
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Code className="text-purple-600 mr-3" size={28} />
                <h3 className="text-xl font-semibold">Core Expertise</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Artificial Intelligence • Machine Learning • Deep Learning • Data Structures & Algorithms • Problem
                Solving
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Database className="text-green-600 mr-3" size={28} />
                <h3 className="text-xl font-semibold">Data Science & Engineering</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Data Analysis • Data Preprocessing • Model Training & Benchmarking • Hyperparameter Tuning • ETL
                Pipelines
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Lightbulb className="text-orange-600 mr-3" size={28} />
                <h3 className="text-xl font-semibold">Development & Deployment</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Flask Web Apps • Docker Containerization • Git Version Control • Modular Code • Reproducibility
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
