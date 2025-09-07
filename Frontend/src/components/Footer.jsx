import { X, Linkedin, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#281051] text-gray-100">
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">

                
                <h2 className="text-lg font-semibold">JobHunt</h2>

               
                <ul className="flex space-x-6 text-sm mt-3 md:mt-0">
                    <li><a href="/" className="hover:text-white">Jobs</a></li>
                    <li><a href="/" className="hover:text-white">Companies</a></li>
                    <li><a href="/" className="hover:text-white">About</a></li>
                    <li><a href="/" className="hover:text-white">Contact</a></li>
                </ul>

                
                <div className="flex space-x-3 mt-3 md:mt-0">
                    <a href="https://x.com/santoshhh__25" target="_blank"
                        rel="noopener noreferrer" className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition">
                        <X size={16} />
                    </a>
                    <a href="https://linkedin.com/in/santoshdhamala" target="_blank"
                        rel="noopener noreferrer" className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition">
                        <Linkedin size={16} />
                    </a>
                    <a href="https://github.com/Santoshhh-25" target="_blank"
                        rel="noopener noreferrer" className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition">
                        <Github size={16} />
                    </a>
                </div>
            </div>

           
            <div className="text-center text-xs py-3 bg-[#281051]">
                © {new Date().getFullYear()} JobHunt. All rights reserved.
            </div>
        </footer>
    );
}
