import Image from 'next/future/image'
import Wave from 'react-wavify';
import { Container } from '../components/Container'

import { useSpring, animated } from 'react-spring'

export function AboutHero() {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  return (
    <div className="pool-brush"></div>
    // <animated.section 
    //   className="relative pt-16 overflow-hidden sm:pt-24"
    //   style={fade}
    // >
    //   <div className="water" />
    //   <Container>
    //     <div className="flex flex-col items-center">
    //       <p className="flex items-center text-xl font-medium space-x-3.5 text-primaryDark/90">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width={28}
    //           height={3}
    //           viewBox="0 0 28 3"
    //           fill="none"
    //         >
    //           <line
    //             y1="1.5"
    //             x2={28}
    //             y2="1.5"
    //             stroke="currentColor"
    //             strokeOpacity="0.65"
    //             strokeWidth={3}
    //           />
    //         </svg>
    //         <span>About Rocky&apos;s Pool Care</span>
    //       </p>
    //       <h1 className="mt-5 text-4xl font-semibold leading-snug text-center text-primaryDark sm:mt-6 sm:text-5xl sm:leading-snug md:mx-auto md:max-w-4xl xl:mx-0">
    //         We are a small, family-owned pool cleaning business dedicated to providing excellent pool care services.
    //       </h1>
    //     </div>
    //   </Container>
    //   <div className="relative">
    //     <div className="absolute inset-0 flex flex-col" aria-hidden="true">
    //       <div className="flex-1 bg-primaryLight" />
    //       <div className="flex-1 w-full bg-primary" />
    //       <div className="flex-1 bg-primaryLight" />
    //     </div>
    //     <Container className="relative">
    //       <div className="grid grid-cols-12 gap-3 mt-16 sm:mt-24 lg:gap-5">
    //         {/* Add your Image components here */}
    //       </div>
    //     </Container>
    //     <div className="h-16 bg-primary sm:h-24"></div>
    //   </div>
    // </animated.section>
  )
}