import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Brain, FlaskRoundIcon as Flask } from "lucide-react"

export default function Projects({ className }: { className?: string }) {
  const projects = [
    {
      title: "Student Performance Prediction using Machine Learning",
      description:
        "Developed an end-to-end machine learning pipeline to predict student academic performance using regression models.",
      technologies: [
        "Python",
        "Scikit-learn",
        "CatBoost",
        "XGBoost",
        "Flask",
        "Docker",
        "Git",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
      ],
      features: [
        "Conducted data preprocessing with ColumnTransformer (StandardScaler, OneHotEncoder)",
        "Trained and benchmarked multiple regression models (CatBoost, XGBoost, Random Forest, etc.)",
        "Performed hyperparameter tuning with RandomizedSearchCV for optimal performance",
        "Integrated a Flask-based web app with HTML templates for deployment",
        "Used Docker for containerization and Git for version control",
        "Emphasized modular, reusable code and tracked model training logs for reproducibility",
      ],
      githubLink: "https://github.com/Sameermishra123", // Placeholder, please update if specific project link exists
      icon: <Flask className="text-blue-600" size={28} />,
    },
    {
      title: "Skin Disease Classification (Research Paper)",
      description:
        "Designed and implemented custom CNNs for multiclass skin disease classification using TensorFlow and PyTorch.",
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "MobileNetV2",
        "ResNet50",
        "EfficientNetV2",
        "Xception",
        "DenseNet121",
        "Docker",
        "Git",
      ],
      features: [
        "Applied batch normalization, dropout, LeakyReLU, and transfer learning",
        "Used data augmentation to address class imbalance and improve model generalization",
        "Optimized models using Adam optimizer and categorical cross-entropy loss",
        "Managed codebase with Git and ensured reproducibility with Docker environments",
        "Published research on deep learning-based skin disease classification",
      ],
      githubLink: "https://github.com/Sameermishra123", // Placeholder, please update if specific project link exists
      icon: <Brain className="text-purple-600" size={28} />,
    },
    {
      title: "End-to-End ML Project with MLOps",
      description:
        "A complete machine learning project with production-ready deployment, featuring modular architecture, experiment tracking, containerization, and automated CI/CD pipeline.",
      technologies: ["Python", "MLflow", "Docker", "Azure", "GitHub Actions", "CI/CD"],
      features: [
        "Modular code structure with clean architecture",
        "MLflow for experiment tracking & model management",
        "Docker containerization for consistent deployment",
        "CI/CD pipeline with GitHub Actions",
        "Azure App Service deployment with monitoring",
      ],
      liveLink: "https://lnkd.in/gsT8-upe",
      githubLink: "https://github.com/Sameermishra123",
      icon: <Flask className="text-blue-600" size={28} />,
    },
    {
      title: "Automated ETL Pipeline with Apache Airflow",
      description:
        "A robust and scalable ETL workflow that pulls real-time data from News API, processes it, and stores in PostgreSQL database with full containerization.",
      technologies: ["Apache Airflow", "PostgreSQL", "Docker", "Python", "News API"],
      features: [
        "Real-time data ingestion from News API",
        "Scalable ETL workflow with Airflow DAGs",
        "PostgreSQL for structured data storage",
        "Docker containerization for reproducibility",
        "Automated data processing and transformation",
      ],
      githubLink: "https://github.com/Sameermishra123",
      icon: <Brain className="text-purple-600" size={28} />,
    },
  ]

  return (
    <section id="projects" className={`py-16 px-4 scroll-mt-20 ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hands-on applications showcasing my expertise in Machine Learning, Deep Learning, and MLOps.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center mb-2">
                  {project.icon}
                  <CardTitle className="ml-3 text-xl">{project.title}</CardTitle>
                </div>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-800">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-800">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {project.liveLink && (
                    <Button size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
