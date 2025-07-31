import React from 'react'

function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-bgTwo">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-4xl font-bold text-secondary mb-6 tracking-tight">
              Our Portfolio
            </h2>
            <p className="text-xl md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our latest work and see how we bring your vision to life through our lens
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              { title: 'Elegant Wedding', category: 'Wedding', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { title: 'Family Portrait', category: 'Portrait', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { title: 'Corporate Event', category: 'Event', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { title: 'Product Showcase', category: 'Commercial', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { title: 'Wedding Film', category: 'Videography', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { title: 'Creative Portrait', category: 'Portrait', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="opacity-100 md:opacity-0 absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-8 text-white w-full">
                    <h3 className="text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
                    <p className="text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="bg-secondary hover:bg-white text-primary hover:text-black cursor-pointer px-12 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View Full Portfolio
            </button>
          </div>
        </div>
      </section>
    )
}

export default Portfolio
