function Footer () {
    return(
        <div>
            <footer className="bg-black text-gray-400 py-12"> 
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 ">
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                        <p>Music school is premier institute dedicated to learning the art and science of music. We nurture Talent from the ground up fosterinf a vibrant community of musicians </p>
                    </div>

                    <div>
                        <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                        <ul>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-300">Home</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-300">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-300">Course</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-white text-lg font-semibold mb-4">Follow us</h2>
                        <div className="flex flex-col">
                            <a href="#" className="hover:text-white transition-colors duration-300">YouTube</a>
                            <a href="#" className="hover:text-white transition-colors duration-300">Facebook</a>
                            <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                        <p>New Delhi, Delhi, India</p>
                        <p>Email: music@gmail.com</p>
                        <p>Phone: (123)456-7890</p>
                    </div>
                    
                </div>
                
                <div className="w-full flex justify-center">
                    <p className="text-center text-sm pt-8">© 2025 test. All rights reserved</p>
                </div>
            </footer>
        </div>
    )
};

export default Footer;
