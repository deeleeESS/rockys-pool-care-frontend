import Image from 'next/future/image'

import CleaningImage from '../images/poolside.jpg'
import { Container } from '../components/Container'

export function StoryWithStats() {
  return (
    <section className="relative overflow-hidden bg-vanilla pt-16 pb-[532px] sm:pb-[500px] sm:pt-24 md:pb-64">
      <Container>
        <div className="flex flex-col sm:items-center">
          <p className="flex items-center space-x-3.5 text-xl font-medium text-amber-900/70">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={3}
              viewBox="0 0 28 3"
              fill="none"
            >
              <line
                y1="1.5"
                x2={28}
                y2="1.5"
                stroke="currentColor"
                strokeOpacity="0.65"
                strokeWidth={3}
              />
            </svg>

            <span>Our Story of Quality Service</span>
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-snug text-slate-900 sm:max-w-xl sm:text-center sm:text-5xl sm:leading-snug md:mx-auto xl:mx-0">
              Revitalizing Pools, Renewing Memories
          </h1>
        </div>
        <div className="mt-12 flex flex-col md:mt-8 md:flex-row md:divide-x md:divide-gray-secondary-400/60">
          <div className="md:w-1/2 md:py-8 md:pr-6 lg:pr-16">
            <p className="text-lg leading-relaxed text-slate-700">
            At Rocky&apos;s Pool Care, we understand that a clean and well-maintained pool is the centerpiece
            of any outdoor oasis. We have built our reputation on delivering exceptional service and ensuring
            that our customers&apos; pools are sparkling, safe, and ready to be enjoyed all year round.
            </p>
            <p className="mt-8 text-lg leading-relaxed text-slate-700">
              As a second-generation business owner, we are excited to continue the legacy and passion for pool
              care that my father has instilled in us. With our deep understanding of the business and our
              commitment to customer satisfaction, we are dedicated to carrying forward the high standards that
              have made us a trusted name in the industry.
            </p>
          </div>
          <div className="mt-8 sm:mt-0 md:w-1/2 md:py-8 md:pl-6 lg:pl-16">
            <p className="text-lg leading-relaxed text-slate-700">
              With our comprehensive range of services, we can address all your pool maintenance needs. Whether
              you require regular pool cleaning to keep your pool in pristine condition, chemical balancing to
              ensure a safe and healthy swimming environment, equipment repairs to keep everything running smoothly,
              or pool opening and closing services to transition seamlessly between seasons, we have the expertise and resources to handle it all.

              As a team, we take immense pride in our work. We continually stay updated with the latest industry trends,
              techniques, and technologies to provide you with the best possible service. Our technicians are trained
              professionals who bring their knowledge and passion to every job they undertake. You can trust that your pool will be in capable hands.
            </p>
          </div>
        </div>
        <div className="relative mt-16 sm:mt-20">
          <div className="aspect-w-2 aspect-h-1">
            <Image
              className="object-cover object-center h-screen"
              src={CleaningImage}
              alt="Pool Side View"
            />
          </div>
          <div className="absolute top-full left-6 right-6 flex max-w-4xl -translate-y-12 flex-col divide-y divide-gray-secondary-400/60 bg-amber-100 px-10 py-10 md:left-[unset] md:top-[unset] md:right-0 md:-bottom-1/4 md:w-full md:flex-row md:divide-y-0 md:divide-x md:px-8 lg:p-12">
            <div className="pb-10 md:w-1/3 md:pb-0 md:pr-10 lg:pr-12">
              <p className="text-center text-4xl font-semibold text-slate-900 lg:text-5xl">
                10+
              </p>
              <p className="mt-4 text-center text-md leading-snug text-slate-600">
                Years working on empowering podcasters
              </p>
            </div>
            <div className="py-10 md:w-1/3 md:py-0 md:px-10 lg:px-12">
              <p className="text-center text-4xl font-semibold text-slate-900 lg:text-5xl">
                $1.5M
              </p>
              <p className="mt-4 text-center text-md leading-snug text-slate-600">
                Capital raised by our investors
              </p>
            </div>
            <div className="pt-10 md:w-1/3 md:pt-0 md:pl-10 lg:pl-12">
              <p className="text-center text-4xl font-semibold text-slate-900 lg:text-5xl">
                120+
              </p>
              <p className="mt-4 text-center text-md leading-snug text-slate-600">
                Team members working on Wavy
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
