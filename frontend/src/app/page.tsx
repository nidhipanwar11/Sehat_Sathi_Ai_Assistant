import ScrollBar from "@/components/contact/scrollbar";
import "./globals.css";  
import BlogPost from "@/components/navBar/Blog";
import ContactUs from "@/components/navBar/contactUs";
import HomePage from "@/components/navBar/home";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden"> {/* Prevents body scrollbar */}
        <ScrollBar/> {/* Adds the custom scrollbar styles */}

        {/* Scrollable Content */}
        <div className="custom-scrollbar h-screen overflow-y-auto">
          <HomePage />
          <BlogPost />
          <ContactUs />
        </div>
      </body>
    </html>
  );
}
