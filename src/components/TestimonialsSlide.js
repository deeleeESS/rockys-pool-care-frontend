import Image from 'next/future/image'
import { useEffect } from 'react'

import Podcast01 from '../images/podcasts/podcast-01.jpeg'
import Podcast02 from '../images/podcasts/podcast-02.jpeg'
import Podcast03 from '../images/podcasts/podcast-03.jpeg'
import Podcast04 from '../images/podcasts/podcast-04.png'
import Podcast05 from '../images/podcasts/podcast-05.jpeg'
import Podcast06 from '../images/podcasts/podcast-06.png'
import Podcast07 from '../images/podcasts/podcast-07.jpeg'
import Podcast08 from '../images/podcasts/podcast-08.jpeg'
import Podcast09 from '../images/podcasts/podcast-09.jpeg'
import Podcast10 from '../images/podcasts/podcast-10.jpeg'
import Podcast11 from '../images/podcasts/podcast-11.jpeg'
import Podcast12 from '../images/podcasts/podcast-12.jpeg'
import Podcast13 from '../images/podcasts/podcast-13.jpeg'
import Podcast14 from '../images/podcasts/podcast-14.jpeg'

const testimonials = [
  [
    {
      person: 'Tim Ferriss',
      podcast: 'The Tim Ferriss Show',
      image: Podcast01,
      quote:
        "I couldn't be happier with the pool cleaning service provided by this company. They are always reliable and do a fantastic job keeping my pool in top shape.",
    },
    {
      person: 'Lex Fridman',
      podcast: 'Lex Fridman Podcast',
      image: Podcast02,
      quote:
      "After struggling to maintain my pool on my own, I decided to give this company a try. I'm so glad I did! Their weekly service has saved me so much time and my pool has never looked better.",
    },
  ],
  [
    {
      person: 'Eric Weinstein',
      podcast: 'The Portal',
      image: Podcast03,
      quote:
      "I highly recommend this pool cleaning service. The team is professional, friendly, and always goes above and beyond to make sure my pool is clean and well-maintained.",
    },
    {
      person: 'Joe Rogan',
      podcast: 'The Joe Rogan Experience',
      image: Podcast04,
      quote:
      "I've been using this pool cleaning service for over a year now and have never been disappointed. They are always on time, thorough, and do an excellent job.",
    },
  ],
  [
    {
      person: 'Cal Newport',
      podcast: 'Deep Questions with Cal Newport',
      image: Podcast05,
      quote:
      "If you're looking for a reliable and affordable pool cleaning service, look no further. This company has exceeded my expectations in every way.",
    },
    {
      person: 'Jocko Willink',
      podcast: 'Jocko Podcast',
      image: Podcast06,
      quote:
      "I was hesitant to hire a pool cleaning service at first, but after seeing the results from this company, I'm so glad I did. My pool has never looked better!",
    },
  ]
]

export function TestimonialsSlide() {
  useEffect(() => {
    if (
      (navigator.userAgent.indexOf('Opera') ||
        navigator.userAgent.indexOf('OPR')) != -1
    ) {
      return
    } else if (navigator.userAgent.indexOf('Edg') != -1) {
      return
    } else if (navigator.userAgent.indexOf('Chrome') != -1) {
      return
    } else if (navigator.userAgent.indexOf('Safari') != -1) {
      // There is an issue with safari not lazy loading off-screen images that come into view with CSS animations. Hence, we make sure to eager load these images.
      document.querySelectorAll('.podcast-image').forEach((img) => {
        img.loading = 'eager'
      })
    }
  }, [])

  return (
    <section className="overflow-hidden bg-vanilla ">
      <h2 className="max-w-xl px-4 mx-auto text-4xl font-semibold leading-tight text-center text-slate-900 sm:max-w-2xl sm:px-6 sm:text-5xl sm:leading-tight lg:px-8">
        See what others say about us
      </h2>
      <div className="relative mt-20">
        <div className="flex items-center gap-6 px-12 animate w-max animate-infiniteScroll sm:gap-8 lg:gap-12">
          {[...Array(2)].map((_, index) => (
            <div
              key={`testimonials-row-${index}`}
              className="flex justify-around w-1/2 gap-6 sm:gap-8 lg:gap-12"
            >
              {testimonials.map((testimonialGroup, groupIndex) => (
                <div
                  key={`testimonial-group-${index}-${groupIndex}`}
                  className="w-full space-y-6 sm:space-y-8"
                >
                  {testimonialGroup.map((testimonial) => (
                    <div
                      key={`${testimonial.person}-${index}`}
                      className="w-80 border border-gray-secondary-400/60 bg-gray-secondary-50 px-6 py-8 sm:w-96 sm:p-8 lg:w-[512px] lg:p-10"
                    >
                      <div className="flex ">
                        <div className="w-12 h-12 shrink-0 bg-gray-secondary-100 lg:h-14 lg:w-14">
                          <Image
                            className="object-cover object-center w-full h-full podcast-image"
                            width={56}
                            height={56}
                            src={testimonial.image}
                            alt={testimonial.person}
                          />
                        </div>
                        <div className="ml-4">
                          <p className="font-medium text-md text-slate-900 lg:text-lg">
                            {testimonial.person}
                          </p>

                          {/* <p className="text-slate-600/90 sm:text-md lg:text-lg">
                            {testimonial.podcast}
                          </p> */}
                        </div>
                      </div>
                      <div className="relative">
                        <svg
                          className="absolute z-0 w-10 h-10 transform -left-3 -top-3 text-purple-dark/20 sm:-left-4 sm:-top-4 sm:h-12 sm:w-12 lg:-left-6 lg:-top-6 lg:h-16 lg:w-16"
                          height="48"
                          width="48"
                          viewBox="0 0 48 48"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path
                              d="M21.66145,33.81676c0,4.29661-3.96109,8.22346-8.91304,8.22346C4.56585,42.04022,1,35.98671,1,27.90615 c0-9.27484,9.34862-18.21943,17.83035-21.94637l2.26574,3.64916C14.10766,12.9954,8.88433,17.58691,8.14413,25.28492h2.89106 c3.09587,0,6.31198,0.4991,8.45903,2.72402C21.02498,29.59761,21.66145,31.62025,21.66145,33.81676z M47,33.81676 c0,4.29661-3.96109,8.22346-8.91304,8.22346c-8.18256,0-11.74842-6.05352-11.74842-14.13408 c0-9.27484,9.34862-18.21943,17.83035-21.94637l2.26574,3.64916c-6.98843,3.38646-12.21176,7.97797-12.95195,15.67598 c3.15316,0,5.76908-0.11425,8.09925,0.71955C45.21084,27.30299,47,30.10812,47,33.81676z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                        <p className="relative z-10 mt-8 leading-relaxed text-md text-slate-700 lg:mt-10 lg:text-lg">
                          {testimonial.quote}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
