import { Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image" // Import Image component

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            {/* Replaced Avatar with Image */}
            <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/sameer-mishra-profile.png"
                alt="Sameer Mishra Profile Picture"
                width={144} // Equivalent to w-36 (144px)
                height={144} // Equivalent to h-36 (144px)
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SAMEER MISHRA
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 font-medium">DATA SCIENTIST • DATA ENGINEER</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate B.Tech CSE student with a strong foundation in Python, C++, and problem-solving. Eager to
              contribute to innovative projects and build impactful, scalable solutions in the tech industry.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="mailto:sameermishra280202@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 shadow-md bg-transparent"
              asChild
            >
              <a href="/sameer-mishra-resume.pdf" download="Sameer_Mishra_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Sameermishra123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
              aria-label="GitHub profile"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/sameer-mishra-850b97249"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:sameermishra280202@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
              aria-label="Email Sameer"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
