import Link from 'next/link';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <>
      <header>
        <nav className="h-20 flex justify-between items-center px-4 py-4 font-bold m-1 text-lg">
          <div className="bg-indigo-500 w-9 h-9 rounded-full"></div>
          <div className="flex">
            <ul className="flex gap-12">
              <li>Product</li>
              <li>Features</li>
              <li>Marketplace</li>
              <li>Company</li>
            </ul>
          </div>
          <Link href="#" className="inline-flex gap-1 items-center">
            Login{' '}
            <ArrowSmallRightIcon className="h-6 w-6 text-black stroke-2 pt-1" />
          </Link>
        </nav>
      </header>
      <main>
        <div className="lg-container mx-44 mt-36 text-center">
          <h1 className="font-bold text-7xl mb-10">
            Deploy to the cloud with confidence
          </h1>
          <p className="font-semibold text-xl text-slate-600 mb-11">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            voluptas asperiores aliquam eveniet voluptatem veniam eaque placeat,
            harum, itaque vitae nostrum, corrupti sint praesentium.
          </p>
          <div className="flex gap-3 justify-center items-center text-lg font-bold">
            <button className="bg-indigo-500 rounded-md p-3 text-white">
              Get started
            </button>
            <button className="flex items-center">
              Learn more{' '}
              <ArrowSmallRightIcon className="h-6 w-6 text-black stroke-2 pt-1" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
