import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, MapPin } from "lucide-react"

export default function Contact({ className }: { className?: string }) {
  return (
    <section id="contact" className={`py-16 px-4 scroll-mt-20 ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            I'm always open to discussing new opportunities, collaborations, and interesting projects in Data Science
            and ML Engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Get In Touch</CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  Ready to bring data-driven solutions to life? Let's discuss how we can work together on your next
                  project.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-blue-600 mr-3" size={24} />
                    <a
                      href="mailto:sameermishra280202@gmail.com"
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg"
                    >
                      sameermishra280202@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-blue-600 mr-3" size={24} />
                    <span className="text-gray-700 text-lg">India</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:sameermishra280202@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Connect Online</CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  Follow my journey and connect with me on various platforms.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:bg-gray-50 bg-transparent border-gray-300 text-gray-700 hover:text-blue-600 transition-all duration-300"
                    asChild
                  >
                    <a href="https://github.com/Sameermishra123" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-3 h-6 w-6" />
                      GitHub - View my code and projects
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start hover:bg-blue-50 bg-transparent border-gray-300 text-gray-700 hover:text-blue-600 transition-all duration-300"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/sameer-mishra-850b97249"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-3 h-6 w-6 text-blue-600" />
                      LinkedIn - Professional network
                    </a>
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                  <p className="text-sm text-gray-700">
                    <strong>Open to:</strong> Full-time opportunities, internships, freelance projects, and
                    collaborations in Data Science, ML Engineering, and MLOps.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
