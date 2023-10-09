import Image from 'next/future/image'
import clsx from 'clsx'

import { Container } from '../components/Container'
import logoBuzzfeed from '../images/logos/buzzfeed.svg'
import logoDailyNews from '../images/logos/daily-news.svg'
import logoEntrepreneur from '../images/logos/entrepreneur.svg'
import logoQuartz from '../images/logos/quartz.svg'
import logoWired from '../images/logos/wired.svg'
import Link from 'next/link'

const companies = [
  { name: 'Buzzfeed', logo: logoBuzzfeed },
  { name: 'Daily News', logo: logoDailyNews },
  { name: 'Entrepreneur', logo: logoEntrepreneur },
  { name: 'Quartz', logo: logoQuartz },
  { name: 'Wired', logo: logoWired },
]

export function LogosRow() {
  return (
    <div className="bg-blue-500 text-white py-4 px-6 rounded-lg shadow-md flex items-center justify-between">
      <h2 className="text-lg font-semibold">Get a free quote today!</h2>
      <Link href="/quote">
        <a className="px-4 py-2 bg-white text-blue-500 font-semibold rounded shadow hover:bg-gray-100 transition-colors duration-200">Request Quote</a>
      </Link>
    </div>
  );
}
