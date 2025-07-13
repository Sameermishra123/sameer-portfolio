import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills({ className }: { className?: string }) {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C++", "SQL"],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "ML/AI Frameworks & Libraries",
      skills: ["Scikit-learn", "PyTorch", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Deployment & Web Frameworks",
      skills: ["Flask", "Streamlit"],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Data Engineering & Orchestration",
      skills: ["Apache Airflow", "Kafka", "PostgreSQL"], // Added Kafka
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "MLOps & DevOps",
      skills: ["MLOps", "Docker", "Git", "CI/CD tools", "GitHub Actions", "MLflow"], // Added MLOps, Git Actions
      color: "from-red-500 to-red-600",
    },
    {
      title: "Cloud Platforms",
      skills: ["Azure"], // Added Azure as a dedicated category
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Technical Concepts",
      skills: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Deep Learning",
        "Data Analysis",
        "Generative AI",
        "Large Language Models (LLM)",
      ],
      color: "from-teal-500 to-teal-600",
    },
  ]

  return (
    <section id="skills" className={`py-16 px-4 bg-white scroll-mt-20 ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building scalable data science and engineering solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <CardTitle className={`text-lg bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
