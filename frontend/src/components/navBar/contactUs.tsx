import Link from "next/link";
import { Mail, Linkedin } from "lucide-react"; // Use appropriate icons

const ContactUs = () => {
  return (
    <footer className="bg-[#0D0D1F] text-white py-8 px-4 md:px-16">
      {/* Social Icons */}
      <div className="flex space-x-6 mb-6">
        <Link href="mailto:info@example.com" className="group">
          <Mail className="w-10 h-10 p-2 rounded-full transition duration-300 group-hover:text-[#df86aa]" />
        </Link>
        <Link href="https://linkedin.com" className="group">
          <Linkedin className="w-10 h-10 p-2 rounded-full transition duration-300 group-hover:text-[#df86aa]" />
        </Link>
      </div>

      {/* Divider Line */}
      <hr className="border-t border-gray-600 w-full mb-6" />

      {/* Footer Text */}
      <div className="flex justify-between text-sm text-gray-400">
        <p>Copyright © 2024 Sehat-Sathi. All rights reserved.</p>
        <Link href="/terms" className="hover:text-white transition">
          Terms and Conditions
        </Link>
      </div>
    </footer>
  );
};

export default ContactUs;
