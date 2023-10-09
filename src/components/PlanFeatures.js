import clsx from 'clsx'

import { Container } from '../components/Container'
import { Button } from '../components/Button'

const features = [
  {
    name: 'Skimming and debris removal for a clean pool surface',
    description:
      'clearing the Way: Removing Debris to Unveil a Spotless Pool Surface',
    className:
      "sm:after:content-[''] sm:after:right-0 sm:after:h-5/6 sm:after:w-px sm:after:absolute sm:after:bg-gray-secondary-400/60",
    icon: function CloudIcon() {
      return (
        <svg
          className="h-10 w-10 sm:h-12 sm:w-12"
          xmlns="http://www.w3.org/2000/svg"
          width={64}
          height={64}
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M61.3333 57.3334H49.3333C48.9797 57.3334 48.6406 57.1929 48.3905 56.9429C48.1405 56.6928 48 56.3537 48 56.0001C48 55.6465 48.1405 55.3073 48.3905 55.0573C48.6406 54.8072 48.9797 54.6667 49.3333 54.6667H61.3333C61.687 54.6667 62.0261 54.8072 62.2761 55.0573C62.5262 55.3073 62.6667 55.6465 62.6667 56.0001C62.6667 56.3537 62.5262 56.6928 62.2761 56.9429C62.0261 57.1929 61.687 57.3334 61.3333 57.3334Z"
            fill="#9EADB2"
          />
          <path
            d="M37.3333 49.3333C35.7971 49.3352 34.3084 49.8667 33.1183 50.8382C31.9282 51.8097 31.1095 53.1618 30.8 54.6666H2.66666C2.31304 54.6666 1.9739 54.8071 1.72385 55.0571C1.4738 55.3072 1.33333 55.6463 1.33333 55.9999C1.33333 56.3535 1.4738 56.6927 1.72385 56.9427C1.9739 57.1928 2.31304 57.3333 2.66666 57.3333H30.8C31.0523 58.5691 31.65 59.7081 32.5237 60.6178C33.3975 61.5276 34.5114 62.1708 35.7361 62.4728C36.9608 62.7747 38.246 62.723 39.4425 62.3237C40.639 61.9244 41.6977 61.1938 42.4955 60.2168C43.2934 59.2398 43.7977 58.0566 43.9499 56.8044C44.1021 55.5523 43.896 54.2826 43.3554 53.1429C42.8149 52.0033 41.9621 51.0403 40.8961 50.366C39.8301 49.6916 38.5947 49.3335 37.3333 49.3333Z"
            fill="#9EADB2"
          />
          <path
            d="M53.176 20.2667C52.6411 15.5026 50.5156 11.058 47.1429 7.65103C43.7702 4.24407 39.3473 2.07375 34.5889 1.49074C29.8304 0.907727 25.0144 1.94608 20.919 4.43804C16.8235 6.92999 13.6879 10.73 12.0187 15.224C8.61546 16.1899 5.67607 18.3533 3.74218 21.3156C1.80828 24.2778 1.01021 27.8392 1.49504 31.3434C1.97987 34.8477 3.71493 38.0586 6.38047 40.3844C9.046 42.7103 12.4624 43.9944 16 44H50.6667C53.6297 43.9984 56.4874 42.9007 58.6894 40.9181C60.8915 38.9355 62.2822 36.2084 62.5938 33.2617C62.9053 30.3151 62.1157 27.3574 60.3769 24.9582C58.6381 22.559 56.0732 20.8878 53.176 20.2667ZM39.3733 25.1307L28.7067 31.7973C28.5048 31.9235 28.2729 31.9933 28.035 31.9995C27.7971 32.0058 27.5618 31.9482 27.3536 31.8329C27.1455 31.7175 26.972 31.5485 26.8512 31.3434C26.7304 31.1383 26.6667 30.9047 26.6667 30.6667V17.3333C26.6667 17.0953 26.7304 16.8617 26.8512 16.6566C26.972 16.4515 27.1455 16.2825 27.3536 16.1671C27.5618 16.0518 27.7971 15.9942 28.035 16.0005C28.2729 16.0067 28.5048 16.0765 28.7067 16.2027L39.3733 22.8693C39.5663 22.9889 39.7255 23.1558 39.8359 23.3541C39.9463 23.5524 40.0043 23.7757 40.0043 24.0027C40.0043 24.2297 39.9463 24.4529 39.8359 24.6512C39.7255 24.8496 39.5663 25.0164 39.3733 25.136V25.1307Z"
            fill="#334155"
          />
        </svg>
      )
    },
  },
  {
    name: 'Vacuuming and brushing to eliminate dirt and sediment',
    description:
      'Banishing the Build-up: Deep Cleaning for a Pristine Pool Bottom',
    className:
      "before:top-0 before:w-full before:h-px before:absolute before:bg-gray-secondary-400/60 before:content-[''] sm:before:h-0",
    icon: function ClipsIcon() {
      return (
        <svg
          className="h-10 w-10 sm:h-12 sm:w-12"
          xmlns="http://www.w3.org/2000/svg"
          width={64}
          height={64}
          viewBox="0 0 64 64"
          fill="none"
        >
          <g clipPath="url(#clip0_24_170)">
            <path
              d="M10 54C8.4087 54 6.88258 53.3679 5.75736 52.2426C4.63214 51.1174 4 49.5913 4 48V14H2C1.46957 14 0.960859 14.2107 0.585786 14.5858C0.210714 14.9609 0 15.4696 0 16L0 54C0 55.0609 0.421427 56.0783 1.17157 56.8284C1.92172 57.5786 2.93913 58 4 58H54C54.5304 58 55.0391 57.7893 55.4142 57.4142C55.7893 57.0391 56 56.5304 56 56V54H10Z"
              fill="#9EADB2"
            />
            <path
              d="M60 6H12C10.9391 6 9.92172 6.42143 9.17157 7.17157C8.42143 7.92172 8 8.93913 8 10V46C8 47.0609 8.42143 48.0783 9.17157 48.8284C9.92172 49.5786 10.9391 50 12 50H60C61.0609 50 62.0783 49.5786 62.8284 48.8284C63.5786 48.0783 64 47.0609 64 46V10C64 8.93913 63.5786 7.92172 62.8284 7.17157C62.0783 6.42143 61.0609 6 60 6ZM45.542 28.842L31.542 37.842C31.3909 37.9395 31.2162 37.9944 31.0365 38.001C30.8568 38.0075 30.6786 37.9655 30.5207 37.8793C30.3629 37.7931 30.2312 37.6659 30.1396 37.5112C30.0479 37.3564 29.9997 37.1798 30 37V19C29.9997 18.8202 30.0479 18.6436 30.1396 18.4888C30.2312 18.3341 30.3629 18.2069 30.5207 18.1207C30.6786 18.0345 30.8568 17.9925 31.0365 17.999C31.2162 18.0056 31.3909 18.0605 31.542 18.158L45.542 27.158C45.6832 27.2485 45.7994 27.373 45.8799 27.5201C45.9603 27.6673 46.0025 27.8323 46.0025 28C46.0025 28.1677 45.9603 28.3327 45.8799 28.4799C45.7994 28.627 45.6832 28.7515 45.542 28.842Z"
              fill="#334155"
            />
          </g>
          <defs>
            <clipPath id="clip0_24_170">
              <rect width={64} height={64} fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
  },
  {
    name: 'Water chemistry testing and balancing for a safe and healthy swimming environment',
    description:
      'The Science of Safety: Expert Water Testing and Balancing for Optimal Pool Health',
    className:
      "sm:after:content-[''] sm:after:right-0 sm:after:h-5/6 sm:after:w-px sm:after:absolute sm:after:bg-gray-secondary-400/60 before:top-0 before:w-full sm:before:w-5/6 before:h-px before:absolute before:bg-gray-secondary-400/60 before:content-['']",
    icon: function EditingIcon() {
      return (
        <svg
          className="h-10 w-10 sm:h-12 sm:w-12"
          xmlns="http://www.w3.org/2000/svg"
          width={64}
          height={64}
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M60.1573 8.00007L62.5333 3.26274C62.6588 3.01238 62.7022 2.72888 62.6574 2.45245C62.6127 2.17602 62.4821 1.92069 62.284 1.72269C62.086 1.52468 61.8307 1.39404 61.5543 1.34929C61.2779 1.30455 60.9944 1.34797 60.744 1.4734L56 3.84274L51.2627 1.4734C51.0121 1.34551 50.7275 1.30014 50.4496 1.34378C50.1717 1.38743 49.9147 1.51786 49.7154 1.71641C49.5161 1.91496 49.3847 2.17146 49.3401 2.4492C49.2954 2.72694 49.3397 3.0117 49.4667 3.26274L51.8427 8.00007L49.4667 12.7374C49.3372 12.9886 49.2909 13.2745 49.3345 13.5537C49.378 13.833 49.5092 14.0912 49.7091 14.291C49.9089 14.4909 50.1671 14.622 50.4463 14.6656C50.7256 14.7092 51.0114 14.6629 51.2627 14.5334L56 12.1574L60.7373 14.5334C60.9886 14.6629 61.2744 14.7092 61.5537 14.6656C61.8329 14.622 62.0911 14.4909 62.2909 14.291C62.4908 14.0912 62.622 13.833 62.6655 13.5537C62.7091 13.2745 62.6628 12.9886 62.5333 12.7374L60.1573 8.00007Z"
            fill="#9EADB2"
          />
          <path
            d="M26.276 1.72419C26.0783 1.52625 25.8233 1.39554 25.5471 1.35055C25.271 1.30556 24.9877 1.34858 24.7373 1.47352L20 3.84285L15.2627 1.47352C15.0123 1.34809 14.7288 1.30466 14.4524 1.34941C14.1759 1.39415 13.9206 1.52479 13.7226 1.7228C13.5246 1.92081 13.394 2.17613 13.3492 2.45256C13.3045 2.72899 13.3479 3.01249 13.4733 3.26285L15.8427 8.00019L13.4733 12.7375C13.3454 12.9881 13.3001 13.2727 13.3437 13.5506C13.3874 13.8285 13.5178 14.0855 13.7163 14.2848C13.9149 14.4841 14.1714 14.6154 14.4491 14.6601C14.7269 14.7048 15.0116 14.6605 15.2627 14.5335L20 12.1575L24.7373 14.5335C24.9886 14.663 25.2744 14.7093 25.5537 14.6657C25.8329 14.6221 26.0911 14.491 26.2909 14.2911C26.4908 14.0913 26.622 13.8331 26.6655 13.5539C26.7091 13.2746 26.6628 12.9887 26.5333 12.7375L24.1573 8.00019L26.5333 3.26285C26.6574 3.01185 26.6994 2.72814 26.6532 2.45196C26.607 2.17578 26.475 1.92115 26.276 1.72419Z"
            fill="#9EADB2"
          />
          <path
            d="M62.276 37.7241C62.0783 37.5261 61.8233 37.3954 61.5471 37.3504C61.271 37.3054 60.9877 37.3485 60.7373 37.4734L56 39.8427L51.2627 37.4734C51.0121 37.3455 50.7275 37.3001 50.4496 37.3438C50.1717 37.3874 49.9147 37.5179 49.7154 37.7164C49.5161 37.915 49.3847 38.1715 49.3401 38.4492C49.2954 38.7269 49.3397 39.0117 49.4667 39.2627L51.8427 44.0001L49.4667 48.7374C49.3372 48.9886 49.2909 49.2745 49.3345 49.5537C49.378 49.833 49.5092 50.0912 49.7091 50.291C49.9089 50.4909 50.1671 50.622 50.4463 50.6656C50.7256 50.7092 51.0114 50.6629 51.2627 50.5334L56 48.1574L60.7373 50.5334C60.9886 50.6629 61.2744 50.7092 61.5537 50.6656C61.8329 50.622 62.0911 50.4909 62.2909 50.291C62.4908 50.0912 62.622 49.833 62.6655 49.5537C62.7091 49.2745 62.6628 48.9886 62.5333 48.7374L60.1573 44.0001L62.5333 39.2627C62.6574 39.0117 62.6994 38.728 62.6532 38.4518C62.607 38.1757 62.475 37.921 62.276 37.7241Z"
            fill="#9EADB2"
          />
          <path
            d="M47.6093 23.0573L40.9427 16.3906C40.6926 16.1407 40.3535 16.0002 40 16.0002C39.6464 16.0002 39.3074 16.1407 39.0573 16.3906L3.05733 52.3906C2.80737 52.6407 2.66695 52.9797 2.66695 53.3333C2.66695 53.6868 2.80737 54.0259 3.05733 54.276L9.724 60.9426C9.97403 61.1926 10.3131 61.333 10.6667 61.333C11.0202 61.333 11.3593 61.1926 11.6093 60.9426L47.6093 24.9426C47.8593 24.6926 47.9997 24.3535 47.9997 24C47.9997 23.6464 47.8593 23.3073 47.6093 23.0573ZM38.6667 30.1146L33.8853 25.3333L40 19.2186L44.7813 24L38.6667 30.1146Z"
            fill="#334155"
          />
        </svg>
      )
    },
  },
  {
    name: 'Equipment inspection and adjustment to ensure optimal performance',
    description:
      'Fine-Tuning Excellence: Proactive Equipment Maintenance for Peak Pool Performance',
    className:
      "before:top-0 before:w-full sm:before:w-5/6 before:h-px before:absolute before:bg-gray-secondary-400/60 before:content-['']",
    icon: function AudioIcon() {
      return (
        <svg
          className="h-10 w-10 sm:h-12 sm:w-12"
          xmlns="http://www.w3.org/2000/svg"
          width={64}
          height={64}
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M54.6666 29.3333C54.6666 28.596 54.0693 28 53.3333 28C52.5973 28 52 28.596 52 29.3333C52 40.3613 43.028 49.3333 32 49.3333C20.972 49.3333 12 40.3613 12 29.3333C12 28.596 11.4026 28 10.6666 28C9.93065 28 9.33331 28.596 9.33331 29.3333C9.33331 41.3813 18.7893 51.236 30.6666 51.932V60H18.6666C17.9306 60 17.3333 60.596 17.3333 61.3333C17.3333 62.0707 17.9306 62.6667 18.6666 62.6667H45.3333C46.0693 62.6667 46.6666 62.0707 46.6666 61.3333C46.6666 60.596 46.0693 60 45.3333 60H33.3333V51.932C45.2106 51.236 54.6666 41.3813 54.6666 29.3333Z"
            fill="#9EADB2"
          />
          <path
            d="M38.6666 27.9999C38.6666 27.2626 39.264 26.6666 40 26.6666H46.6666V19.9999H40C39.264 19.9999 38.6666 19.4039 38.6666 18.6666C38.6666 17.9293 39.264 17.3333 40 17.3333H46.6666V15.9999C46.6666 7.91325 40.0866 1.33325 32 1.33325C23.9133 1.33325 17.3333 7.91325 17.3333 15.9999V17.3333H24C24.736 17.3333 25.3333 17.9293 25.3333 18.6666C25.3333 19.4039 24.736 19.9999 24 19.9999H17.3333V26.6666H24C24.736 26.6666 25.3333 27.2626 25.3333 27.9999C25.3333 28.7373 24.736 29.3333 24 29.3333H17.3333C17.3333 37.4199 23.9133 43.9999 32 43.9999C40.0866 43.9999 46.6666 37.4199 46.6666 29.3333H40C39.264 29.3333 38.6666 28.7373 38.6666 27.9999Z"
            fill="#334155"
          />
        </svg>
      )
    },
  },
]

export function PlanFeatures() {
  return (
    <section className="relative overflow-hidden bg-vanilla py-16">
      <Container>
        <div className="relative mx-auto w-full max-w-lg items-center sm:max-w-xl md:max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-12 lg:gap-12">
          <div className=" lg:col-span-6">
            <h2 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl sm:leading-tight">
                Regular Maintenance Excellence: Sparkling Pools, Hassle-Free
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700 sm:mt-6">
                Let our diligent team handle the routine maintenance, ensuring your pool
                remains pristine and ready for relaxation.
            </p>
            <div className="mt-8 sm:mt-12">
              <Button
                href="#plan-comparison-table"
                variant="secondary"
                size="md"
              >
                Compare our plans
                <svg
                  className="ml-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <g clipPath="url(#clip0_79_335)">
                    <path
                      d="M13.9999 1.75008C13.9999 1.99683 13.8966 2.24183 13.6936 2.41508L7.56863 7.66508C7.24138 7.94595 6.7575 7.94595 6.43025 7.66508L0.305255 2.41508C-0.0622453 2.10008 -0.104245 1.54708 0.210755 1.18133C0.52488 0.814702 1.077 0.771826 1.44363 1.08683L6.99988 5.8477L12.5561 1.08595C12.9228 0.771826 13.4749 0.813826 13.789 1.18045C13.9308 1.34583 13.9999 1.54795 13.9999 1.75008Z"
                      fill="#64748B"
                    />
                    <path
                      d="M14.0002 7.00008C14.0002 7.24683 13.897 7.49183 13.694 7.66508L7.56896 12.9151C7.24171 13.196 6.75783 13.196 6.43058 12.9151L0.305582 7.66508C-0.0610435 7.35008 -0.103043 6.79708 0.211082 6.43045C0.526082 6.06383 1.07733 6.02095 1.44396 6.33595L7.00021 11.0977L12.5565 6.33595C12.9231 6.02183 13.4752 6.06383 13.7893 6.43045C13.9311 6.59583 14.0002 6.79795 14.0002 7.00008Z"
                      fill="#1E293B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_79_335">
                      <rect
                        width={14}
                        height={14}
                        fill="white"
                        transform="translate(0 14) rotate(-90)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
            </div>
          </div>
          <div className="mt-14 grid sm:-mx-6 sm:grid-cols-2 lg:col-span-6 lg:mx-0 lg:mt-0">
            {features.map((feature) => (
              <div
                key={feature.name}
                className={clsx(
                  feature.className,
                  'relative flex flex-col items-center justify-center py-8 sm:p-6 lg:py-10 lg:px-8 '
                )}
              >
                <div className="flex flex-1 flex-col">
                  <feature.icon />
                  <h3 className="mt-5 text-xl font-semibold leading-tighter text-slate-900 sm:mt-6">
                    {feature.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg items-center sm:max-w-xl md:max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-12 lg:gap-12">
          <div className="mt-14 grid sm:-mx-6 sm:grid-cols-2 lg:col-span-6 lg:mx-0 lg:mt-0">
            {features.map((feature) => (
              <div
                key={feature.name}
                className={clsx(
                  feature.className,
                  'relative flex flex-col items-center justify-center py-8 sm:p-6 lg:py-10 lg:px-8 '
                )}
              >
                <div className="flex flex-1 flex-col">
                  <feature.icon />
                  <h3 className="mt-5 text-xl font-semibold leading-tighter text-slate-900 sm:mt-6">
                    {feature.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className=" lg:col-span-6">
            <h2 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl sm:leading-tight">
                Advanced Solutions for Comprehensive Pool Repairs
           </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700 sm:mt-6">
                Expert Repairs to Keep Your Pool in Prime Condition.
            </p>
            <div className="mt-8 sm:mt-12">
              <Button
                href="#plan-comparison-table"
                variant="secondary"
                size="md"
              >
                Compare our plans
                <svg
                  className="ml-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <g clipPath="url(#clip0_79_335)">
                    <path
                      d="M13.9999 1.75008C13.9999 1.99683 13.8966 2.24183 13.6936 2.41508L7.56863 7.66508C7.24138 7.94595 6.7575 7.94595 6.43025 7.66508L0.305255 2.41508C-0.0622453 2.10008 -0.104245 1.54708 0.210755 1.18133C0.52488 0.814702 1.077 0.771826 1.44363 1.08683L6.99988 5.8477L12.5561 1.08595C12.9228 0.771826 13.4749 0.813826 13.789 1.18045C13.9308 1.34583 13.9999 1.54795 13.9999 1.75008Z"
                      fill="#64748B"
                    />
                    <path
                      d="M14.0002 7.00008C14.0002 7.24683 13.897 7.49183 13.694 7.66508L7.56896 12.9151C7.24171 13.196 6.75783 13.196 6.43058 12.9151L0.305582 7.66508C-0.0610435 7.35008 -0.103043 6.79708 0.211082 6.43045C0.526082 6.06383 1.07733 6.02095 1.44396 6.33595L7.00021 11.0977L12.5565 6.33595C12.9231 6.02183 13.4752 6.06383 13.7893 6.43045C13.9311 6.59583 14.0002 6.79795 14.0002 7.00008Z"
                      fill="#1E293B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_79_335">
                      <rect
                        width={14}
                        height={14}
                        fill="white"
                        transform="translate(0 14) rotate(-90)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg items-center sm:max-w-xl md:max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-12 lg:gap-12">
          <div className=" lg:col-span-6">
            <h2 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl sm:leading-tight">
              Seasonal Pool Cleaning: Renewing Your Pool&apos;s Brilliance
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700 sm:mt-6">
                Reveal the Brilliance: Transform Your Pool with Meticulous Seasonal Cleaning.
            </p>
            <div className="mt-8 sm:mt-12">
              <Button
                href="#plan-comparison-table"
                variant="secondary"
                size="md"
              >
                Compare our plans
                <svg
                  className="ml-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <g clipPath="url(#clip0_79_335)">
                    <path
                      d="M13.9999 1.75008C13.9999 1.99683 13.8966 2.24183 13.6936 2.41508L7.56863 7.66508C7.24138 7.94595 6.7575 7.94595 6.43025 7.66508L0.305255 2.41508C-0.0622453 2.10008 -0.104245 1.54708 0.210755 1.18133C0.52488 0.814702 1.077 0.771826 1.44363 1.08683L6.99988 5.8477L12.5561 1.08595C12.9228 0.771826 13.4749 0.813826 13.789 1.18045C13.9308 1.34583 13.9999 1.54795 13.9999 1.75008Z"
                      fill="#64748B"
                    />
                    <path
                      d="M14.0002 7.00008C14.0002 7.24683 13.897 7.49183 13.694 7.66508L7.56896 12.9151C7.24171 13.196 6.75783 13.196 6.43058 12.9151L0.305582 7.66508C-0.0610435 7.35008 -0.103043 6.79708 0.211082 6.43045C0.526082 6.06383 1.07733 6.02095 1.44396 6.33595L7.00021 11.0977L12.5565 6.33595C12.9231 6.02183 13.4752 6.06383 13.7893 6.43045C13.9311 6.59583 14.0002 6.79795 14.0002 7.00008Z"
                      fill="#1E293B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_79_335">
                      <rect
                        width={14}
                        height={14}
                        fill="white"
                        transform="translate(0 14) rotate(-90)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
            </div>
          </div>
          <div className="mt-14 grid sm:-mx-6 sm:grid-cols-2 lg:col-span-6 lg:mx-0 lg:mt-0">
            {features.map((feature) => (
              <div
                key={feature.name}
                className={clsx(
                  feature.className,
                  'relative flex flex-col items-center justify-center py-8 sm:p-6 lg:py-10 lg:px-8 '
                )}
              >
                <div className="flex flex-1 flex-col">
                  <feature.icon />
                  <h3 className="mt-5 text-xl font-semibold leading-tighter text-slate-900 sm:mt-6">
                    {feature.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
