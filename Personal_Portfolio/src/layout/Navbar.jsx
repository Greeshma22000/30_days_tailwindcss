import React from 'react'

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#testimonials", label: "Testimonials"},
  ];

const Navbar = () => {
  return (
    <header>
        <nav>
          <a href="">
            PM<span>.</span>
          </a>

          {/* Desktop Navigation */}
          <div>
            <div>
              {navLinks.map((link, index) => (
                <a href={link.href} key={index}>{link.label}</a>
              ))}
            </div>
          </div>
        </nav>
    </header>
  )
}

export default Navbar