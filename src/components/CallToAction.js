import Image from 'next/future/image'

import { Container } from '../components/Container'
import ctaImage1 from '../images/stock/cta-image-01.jpg'
import ctaImage2 from '../images/stock/cta-image-02.jpg'
import { Button } from '../components/Button'

export function CallToAction() {
  return (
    <section className="overflow-hidden bg-white py-20 md:py-28 lg:py-32">
      <Container className="relative items-center md:grid md:grid-cols-12 md:gap-12">
        <div className="mx-auto max-w-lg md:col-span-6 md:mx-0 lg:pr-12">
          <h2 className="text-center text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl sm:leading-tight md:text-left">
              Ultimate Relaxation with Pristine Pools
          </h2>
          <p className="mt-6 text-center text-[17px] leading-relaxed text-slate-700 sm:text-lg sm:leading-relaxed md:text-left ">
          At Rocky&apos;s Pool Cre, we are dedicated to providing the highest quality pool care to our clients.
          With years of experience and a commitment to excellence, we have built a reputation as one of the top year-round pool service
          companies in the industry.
          </p>
          <div className="mt-10 flex w-full justify-center md:justify-start">
            <Button href="/signup">Get your free quote today</Button>
          </div>
        </div>
        <div className="col-span-6 hidden grid-cols-12 md:grid">
          <Image
            src={ctaImage2}
            className="col-span-5 my-auto ml-px h-auto w-full"
          />
          <Image src={ctaImage1} className="col-span-7 h-auto w-full" />
        </div>
      </Container>
    </section>
  )
}
