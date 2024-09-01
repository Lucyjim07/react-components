const Navbar = () => {
  const navlinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <div className="bg-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo o nombre de la marca */}
          <div className="flex items-center">
            <a href="#" className="text-white">
              Navbar
            </a>
          </div>
          {/* Links de navegación */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navlinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className="text-gray-300 hover:bg-gray-600 transition-all duration-500 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
