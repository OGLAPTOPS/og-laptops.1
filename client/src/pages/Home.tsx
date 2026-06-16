import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Smartphone, ArrowRight, Shield, Zap, Award } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              if (!prev.includes(entry.target.id)) {
                return [...prev, entry.target.id];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OG</span>
            </div>
            <span className="text-xl font-bold text-foreground">OG Laptops</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("products")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("products")}
                className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Full Screen Background */}
      <section
        className="relative min-h-screen pt-24 pb-12 md:pb-20 flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663767864590/oW6LBGYH53Wswrzmw9x2k8/hero-bg-premium-D3pvYHWYPzvkJ7TL6NfSGL.webp)',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Premium Laptops.
              <br />
              Built for Performance.
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
              Discover a curated range of high-performance laptops designed for professionals, creators, and everyday leaders.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4">
                <Shield className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-sm font-medium text-white">100% Genuine</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4">
                <Award className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-sm font-medium text-white">Trusted Brand</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4">
                <Smartphone className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-sm font-medium text-white">Expert Support</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4">
                <Zap className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-sm font-medium text-white">Warranty</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection("products")}
              className="bg-white text-foreground hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-lg"
            >
              Explore Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        data-section
        className={`py-20 md:py-32 bg-gray-50 transition-all duration-700 ${
          visibleSections.includes("products")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated selection of laptops tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Student Laptops */}
            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663767864590/oW6LBGYH53Wswrzmw9x2k8/service-laptop-sales-hfG7u3H736uXa4qQYJVrCD.webp"
                  alt="Student Laptops"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Student Laptops</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Affordable, reliable laptops perfect for coding, online classes, and exam preparation
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Professional Laptops */}
            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663767864590/oW6LBGYH53Wswrzmw9x2k8/service-laptop-sales-hfG7u3H736uXa4qQYJVrCD.webp"
                  alt="Professional Laptops"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Professional Laptops</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Powerful systems for business professionals and content creators
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Gaming Laptops */}
            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663767864590/oW6LBGYH53Wswrzmw9x2k8/service-gaming-pc-GxBP7YFaYhrHbERievVGpr.webp"
                  alt="Gaming Laptops"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Gaming Laptops</h3>
                <p className="text-gray-600 text-sm mb-4">
                  High-performance gaming systems with latest processors and graphics
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Custom Builds */}
            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663767864590/oW6LBGYH53Wswrzmw9x2k8/service-new-pc-build-E2WkPzS3bSuhYnmo2Qd8xc.webp"
                  alt="Custom Builds"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Custom Builds</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Fully customized systems tailored to your exact specifications and budget
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        data-section
        className={`py-20 md:py-32 bg-white transition-all duration-700 ${
          visibleSections.includes("services")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From sales to support, we provide complete computer solutions
            </p>
          </div>

          {/* Top Row - 3 Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* New PC Build */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663767864590/oW6LBGYH53Wswrzmw9x2k8/service-new-pc-build-E2WkPzS3bSuhYnmo2Qd8xc.webp"
                  alt="New PC Build"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">New PC Build</h3>
                <p className="text-gray-600 text-sm">
                  Custom-built PCs tailored to your specifications and budget
                </p>
              </div>
            </div>

            {/* Gaming Custom PCs */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663767864590/oW6LBGYH53Wswrzmw9x2k8/service-gaming-pc-GxBP7YFaYhrHbERievVGpr.webp"
                  alt="Gaming Custom PCs"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Gaming Custom PCs</h3>
                <p className="text-gray-600 text-sm">
                  High-performance gaming systems with latest components
                </p>
              </div>
            </div>

            {/* Laptop Sales */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663767864590/oW6LBGYH53Wswrzmw9x2k8/service-laptop-sales-hfG7u3H736uXa4qQYJVrCD.webp"
                  alt="Laptop Sales"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Laptop Sales</h3>
                <p className="text-gray-600 text-sm">
                  Quality laptops for students, professionals, and businesses
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row - 4 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663767864590/oW6LBGYH53Wswrzmw9x2k8/service-repair-U3wqBRwa8CrdTvxNCk23Tf.webp"
                  alt="Service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-1">Service</h3>
                <p className="text-gray-600 text-sm">
                  Expert repair and maintenance for all devices
                </p>
              </div>
            </div>

            {/* Upgrades */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663767864590/oW6LBGYH53Wswrzmw9x2k8/service-upgrades-AXpWYzmEnW4a6XEdjbNNpr.webp"
                  alt="Upgrades"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-1">Upgrades</h3>
                <p className="text-gray-600 text-sm">
                  SSD, RAM, and component upgrades to boost performance
                </p>
              </div>
            </div>

            {/* Software Solutions */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663767864590/oW6LBGYH53Wswrzmw9x2k8/service-software-HMgGbGu3bF9JSUthsf7Q69.webp"
                  alt="Software Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-1">Software Solutions</h3>
                <p className="text-gray-600 text-sm">
                  Virus removal, data recovery, and system optimization
                </p>
              </div>
            </div>

            {/* Hardware Solutions */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663767864590/oW6LBGYH53Wswrzmw9x2k8/service-hardware-Kq78NBnogPiaetEnxdPaiv.webp"
                  alt="Hardware Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-1">Hardware Solutions</h3>
                <p className="text-gray-600 text-sm">
                  Complete hardware support and technical assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        data-section
        className={`py-20 md:py-32 bg-gray-50 transition-all duration-700 ${
          visibleSections.includes("about")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose OG Laptops?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to providing quality products and exceptional service to every customer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Quality */}
            <div className="text-center">
              <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Quality</h3>
              <p className="text-gray-600">
                We source only the best laptops and components, ensuring durability and performance
              </p>
            </div>

            {/* Affordability */}
            <div className="text-center">
              <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Affordability</h3>
              <p className="text-gray-600">
                Competitive pricing without compromising on quality. We offer flexible payment options
              </p>
            </div>

            {/* Reliability */}
            <div className="text-center">
              <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Reliability</h3>
              <p className="text-gray-600">
                Dedicated after-sales support and fast on-call assistance available 6 days a week
              </p>
            </div>
          </div>

          {/* Support Banner */}
          <div className="mt-16 bg-foreground text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-2">Buy with Confidence</h3>
            <p className="text-white/90">
              Dedicated After-Sales Support & Fast On-Call Assistance, 6 Days a Week
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        data-section
        className={`py-20 md:py-32 bg-white transition-all duration-700 ${
          visibleSections.includes("contact")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reach out to us today for any inquiries or to schedule a consultation
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Phone</h3>
              <a
                href="tel:9902422717"
                className="text-lg font-semibold text-foreground hover:text-foreground/80 transition-colors"
              >
                99024 22717
              </a>
            </div>

            {/* Email */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Email</h3>
              <a
                href="mailto:oglaptops@gmail.com"
                className="text-lg font-semibold text-foreground hover:text-foreground/80 transition-colors break-all"
              >
                oglaptops@gmail.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.925-2.603 2.557-2.603 4.686 0 1.814.603 3.583 1.73 5.062L3.007 19.338l4.26-1.41c1.514.82 3.224 1.252 4.934 1.252 5.32 0 9.659-4.286 9.659-9.541 0-2.363-.92-4.684-2.56-6.326-1.64-1.641-3.956-2.547-6.36-2.547" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">WhatsApp</h3>
              <a
                href="https://wa.me/919902422717"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-foreground hover:text-foreground/80 transition-colors"
              >
                Message Us
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Visit Us</h3>
            <p className="text-lg font-semibold text-foreground mb-3">Bengaluru, Karnataka</p>
            <p className="text-gray-700 font-medium mb-2">Behind Pai International Rajajinagar</p>
            <p className="text-gray-600 text-sm mb-2">208 1st Main Road, Chord Rd, Stage 2</p>
            <p className="text-gray-600 text-sm mb-2">Mahalakshmi Layout</p>
            <p className="text-gray-600 text-sm mb-4">Bengaluru, Karnataka 560086</p>
            <p className="text-gray-600 text-sm">Available 6 days a week for consultations and support</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-foreground font-bold text-sm">OG</span>
                </div>
                <span className="text-2xl font-bold">OG Laptops</span>
              </div>
              <p className="text-white/80">
                Quality laptops and professional computer services for students, professionals, and businesses
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="hover:text-white transition-colors"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-white transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a
                    href="tel:9902422717"
                    className="hover:text-white transition-colors"
                  >
                    Phone: 99024 22717
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:oglaptops@gmail.com"
                    className="hover:text-white transition-colors break-all"
                  >
                    Email: oglaptops@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919902422717"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp: Message Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            {/* Social Media Links */}
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="https://wa.me/919902422717"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                title="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.925-2.603 2.557-2.603 4.686 0 1.814.603 3.583 1.73 5.062L3.007 19.338l4.26-1.41c1.514.82 3.224 1.252 4.934 1.252 5.32 0 9.659-4.286 9.659-9.541 0-2.363-.92-4.684-2.56-6.326-1.64-1.641-3.956-2.547-6.36-2.547" />
                </svg>
              </a>
              <a
                href="mailto:oglaptops@gmail.com"
                className="text-white/80 hover:text-white transition-colors"
                title="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a
                href="tel:9902422717"
                className="text-white/80 hover:text-white transition-colors"
                title="Phone"
              >
                <Smartphone className="w-6 h-6" />
              </a>
            </div>

            <div className="text-center text-white/80">
              <p>&copy; 2026 OG Laptops. All rights reserved.</p>
              <p className="mt-2 text-sm">
                Providing quality laptops and professional computer services since 2026
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
