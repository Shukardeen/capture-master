import React from 'react'

function About() {
    return (
        <section id="about" className="py-24 bg-bgOne">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-4xl font-bold text-secondary mb-8 tracking-tight">
                About Capture Master
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Founded with a passion for capturing life's most precious moments, Brothers's Creation has been at the forefront of photography and videography excellence for over a decade.
              </p>
              <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
                Our team of experienced professionals combines artistic vision with technical expertise to deliver stunning visual stories that will be cherished for generations to come.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-4xl font-bold text-secondary mb-3">500+</div>
                  <div className="text-gray-600 font-medium">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-4xl font-bold text-secondary mb-3">1000+</div>
                  <div className="text-gray-600 font-medium">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-4xl font-bold text-secondary mb-3">10+</div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-4xl font-bold text-secondary mb-3">50+</div>
                  <div className="text-gray-600 font-medium">Awards Won</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Photography Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-sm">
                <p className="text-gray-700 italic text-lg leading-relaxed">"Every moment is a story waiting to be told through our lens."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About
