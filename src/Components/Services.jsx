import React from 'react'

function Services() {
    return (
        <section id="services" className="py-24 bg-bgOne">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 tracking-tight">
              Our Services
            </h2>
            <p className="text-xl md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We offer a comprehensive range of photography and videography services to capture your special moments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              { 
                title: 'Wedding Photography', 
                description: 'Capture your special day with our elegant and timeless wedding photography services. Every moment preserved with artistic excellence.',
                icon: '💒',
                features: ['Engagement Sessions', 'Wedding Day Coverage', 'Album Design', 'Digital Delivery']
              },
              { 
                title: 'Portrait Photography', 
                description: 'Professional portraits for individuals, families, and corporate needs. Showcasing your best self in every frame.',
                icon: '📸',
                features: ['Studio Sessions', 'Outdoor Portraits', 'Family Photos', 'Professional Headshots']
              },
              { 
                title: 'Event Photography', 
                description: 'Document your important events with our comprehensive coverage. From corporate gatherings to personal celebrations.',
                icon: '🎉',
                features: ['Corporate Events', 'Birthday Parties', 'Anniversaries', 'Special Occasions']
              },
              { 
                title: 'Commercial Photography', 
                description: 'High-quality product and commercial photography for businesses. Elevate your brand with stunning visuals.',
                icon: '🏢',
                features: ['Product Photography', 'Real Estate', 'Food Photography', 'Brand Photography']
              },
              { 
                title: 'Videography Services', 
                description: 'Professional video production for weddings, events, and commercial projects. Bringing stories to life through motion.',
                icon: '🎬',
                features: ['Wedding Films', 'Event Videos', 'Commercial Videos', 'Music Videos']
              },
              { 
                title: 'Photo Editing', 
                description: 'Professional post-processing and editing to enhance your images. Transforming good photos into extraordinary ones.',
                icon: '🎨',
                features: ['Color Correction', 'Retouching', 'Background Removal', 'Creative Effects']
              }
            ].map((service, index) => (
              <div key={index} className="group bg-[#f6f3ed] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 lg:p-10 border border-gray-100 hover:border-secondary transform hover:-translate-y-2">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      <svg className="w-5 h-5 text-secondary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Services
