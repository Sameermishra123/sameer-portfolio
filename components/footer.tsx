export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            SAMEER MISHRA
          </h3>
          <p className="text-gray-400 mt-2">Data Scientist • Data Engineer</p>
        </div>

        <div className="border-t border-gray-800 pt-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Sameer Mishra. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
