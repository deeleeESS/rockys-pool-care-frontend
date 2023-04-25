import Image from 'next/future/image'

import { Container } from '../components/Container'
import { Button } from '../components/Button'
import featureImage1 from '../images/stock/house-pool-04.jpg'
import featureImage2 from '../images/stock/house-pool-02.jpg'

const Waves = () => {
  return (
    <>
      <svg
        id="svg"
        viewBox="0 0 1440 345"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[16px]"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 94.59330143540669,225.27272727272725 189.18660287081337,250.54545454545453 280,245 C 370.8133971291866,239.45454545454547 457.8468899521532,203.09090909090912 566,195 C 674.1531100478468,186.90909090909088 803.425837320574,207.09090909090907 889,210 C 974.574162679426,212.90909090909093 1016.4497607655503,198.54545454545456 1101,194 C 1185.5502392344497,189.45454545454544 1312.7751196172248,194.72727272727272 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fillOpacity="1"
          className="path-0 fill-secondary"
        ></path>
      </svg>
      <svg
        id="svg"
        viewBox="0 0 1440 345"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[8px]"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 94.59330143540669,225.27272727272725 189.18660287081337,250.54545454545453 280,245 C 370.8133971291866,239.45454545454547 457.8468899521532,203.09090909090912 566,195 C 674.1531100478468,186.90909090909088 803.425837320574,207.09090909090907 889,210 C 974.574162679426,212.90909090909093 1016.4497607655503,198.54545454545456 1101,194 C 1185.5502392344497,189.45454545454544 1312.7751196172248,194.72727272727272 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fillOpacity="1"
          className="path-0 fill-primaryDark"
        ></path>
      </svg>
      <svg
        id="svg"
        viewBox="0 0 1440 345"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 94.59330143540669,225.27272727272725 189.18660287081337,250.54545454545453 280,245 C 370.8133971291866,239.45454545454547 457.8468899521532,203.09090909090912 566,195 C 674.1531100478468,186.90909090909088 803.425837320574,207.09090909090907 889,210 C 974.574162679426,212.90909090909093 1016.4497607655503,198.54545454545456 1101,194 C 1185.5502392344497,189.45454545454544 1312.7751196172248,194.72727272727272 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#53B2E8"
          fillOpacity="1"
          className="path-0"
        ></path>
      </svg>
    </>
  );
};

export function FeatureBlocks() {
  return (
    <section className="relative overflow-hidden bg-vanilla pt-32 pb-20 lg:pt-24 lg:pb-60">
      <Container>
        <div className="relative mx-auto w-full max-w-lg sm:max-w-xl lg:mx-0 lg:max-w-none">
          <div className="left-0 top-1/2 z-10 w-full lg:absolute lg:w-1/2 lg:-translate-y-1/2">
            <Image src={featureImage1} className="h-auto w-full" />
            <div className="absolute right-0 top-0 w-64 -translate-y-24 bg-primary opacity-90 p-6 backdrop-blur-sm sm:py-7 lg:left-0 lg:top-[unset] lg:bottom-0 lg:translate-y-24 2xl:-translate-x-16">
              <p className="text-4xl font-semibold text-white xl:text-5xl">
                100+
              </p>
              <p className="mt-5 text-white">
                Pools Serviced with Care
              </p>
            </div>
          </div>
          <div className="w-full border border-gray-secondary-400/60 bg-gray-secondary-50 px-6 py-10 sm:p-14 lg:ml-auto lg:w-7/12 lg:py-32 lg:pl-28 xl:pl-36 xl:pr-20">
            <h2 className="text-3xl font-semibold leading-tight text-primaryDark xl:text-4xl xl:leading-tight">
               Our Consistent Pool Service Keeps Your Pool Sparkling Every Week!
            </h2>
            <p className="mt-6 leading-relaxed text-primaryDark sm:mt-8 sm:text-lg sm:leading-8">
                Our full pool care service with flat monthly fees makes pool ownership a breeze. No more worrying about fluctuating bills,
                scheduling conflicts with different service providers, or unexpected maintenance costs. With our comprehensive service, we
                take care of everything. You can sit back, relax, and enjoy your pool with
                peace of mind knowing that it&apos;s being taken care of by our team of experienced technicians. Say goodbye to the hassle of
                pool ownership and hello to a stress-free experience.
            </p>
            <Button
              href="#"
              variant="ghost"
              size="md"
              className="mt-10 sm:mt-12"
            >
              Learn more
            </Button>
          </div>
        </div>

        <div className="relative mx-auto mt-48 w-full max-w-lg sm:max-w-xl lg:mx-0 lg:mt-32 lg:max-w-none">
          <div className="right-0 top-1/2 z-10 w-full lg:absolute lg:w-1/2 lg:-translate-y-1/2">
            <Image src={featureImage2} className="h-auto w-full" />
            <div className="absolute left-0 top-0 w-64 -translate-y-24 bg-primary opacity-90 p-6 backdrop-blur-sm sm:py-7 lg:right-0 lg:top-[unset] lg:left-[unset] lg:bottom-0 lg:translate-y-24 2xl:translate-x-16">
              <p className="text-4xl font-semibold text-white xl:text-5xl">
                15+
              </p>
              <p className="mt-5 text-white">
                Years in Service
              </p>
            </div>
          </div>
          <div className="w-full border border-gray-secondary-400/60 bg-gray-secondary-50 px-6 py-10 sm:p-14 lg:w-7/12 lg:py-32 lg:pr-28 xl:pl-16 xl:pr-36 ">
            <h2 className="text-3xl font-semibold leading-tight text-primaryDark xl:text-4xl xl:leading-tight">
                Summer-Ready Pool Care Made Easy
            </h2>
            <p className="mt-6 leading-relaxed text-primaryDark sm:mt-8 sm:text-lg sm:leading-8">
            Summer is just around the corner, and now is the perfect time to get your pool in shape for the season. Our full
            pool care service with flat monthly fees ensures that your pool is always ready for summer fun.  With our expert service,
            you can enjoy a sparkling clean pool all season long. Don&apos;t let a dirty or malfunctioning pool ruin your summer plans – trust us
            to keep your pool in pristine condition. Contact us today to schedule your pool service and get ready for a summer of sun, fun, and relaxation.
            </p>
            <Button
              href="#"
              variant="ghost"
              size="md"
              className="mt-10 sm:mt-12"
            >
              Learn more
            </Button>
          </div>
        </div>
      </Container>
      <Waves />
    </section>
  )
}
