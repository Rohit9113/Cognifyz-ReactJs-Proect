import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-cyan-900 via-blue-900 to-gray-800 text-gray-200 p-10 text-center relative overflow-hidden animate-fadeInUp">
      <h2 className="text-3xl font-bold mb-4 tracking-wide text-cyan-400 drop-shadow-md">
        Please give me feedback of this tast on mail
      </h2>
      <p className="mb-6 text-gray-300 max-w-xl mx-auto">
        Follow us on social media and never miss an update!
      </p>

      <div className="flex justify-center space-x-8 mb-8">
        {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub].map(
          (Icon, idx) => (
            <a
              key={idx}
              href="#"
              aria-label="social link"
              className="text-gray-200 p-3 rounded-full border-2 border-transparent hover:border-cyan-400 hover:text-cyan-400 shadow-md hover:shadow-cyan-400 transition-transform transform hover:scale-110 hover:rotate-6"
            >
              <Icon size={24} />
            </a>
          )
        )}
      </div>

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </footer>
  );
}
