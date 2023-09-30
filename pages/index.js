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
          <h1 className="font-bold text-7xl mb-10 w-3/4 mx-auto">
            Deploy to the cloud with confidence
          </h1>
          <p className="font-semibold text-xl text-slate-600 mb-11 w-3/4 mx-auto">
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
        <div className="lg-container w-5/6 mx-auto mt-28 mb-20 border-2 border-gray-200 rounded-3xl">
          <div className="lg-container w-auto m-5">
            <img
              src="/img/project-app-screenshot.png"
              alt="photo-1"
              className="border-2 border-gray-200 rounded-lg shadow-2xl"
            />
          </div>
        </div>
        <div className="lg-container w-4/5 mx-auto mt-36">
          <ul className="flex justify-between px-6 mb-20">
            <li>
              <img
                src="/img/transistor.svg"
                alt="transistor"
                className="w-48"
              />
            </li>
            <li>
              <img src="/img/reform.svg" alt="reform" className="w-48" />
            </li>
            <li>
              <img src="/img/tuple.svg" alt="tuple" className="w-48" />
            </li>
            <li>
              <img src="/img/savvycal.svg" alt="savvycal" className="w-48" />
            </li>
            <li>
              <img src="/img/statamic.svg" alt="statamic" className="w-48" />
            </li>
          </ul>
        </div>
        <div className="lg-container text-center flex justify-center mb-64">
          <p className="text-slate-600 text-lg font-semibold border-2 border-gray-200 rounded-full px-4 py-1">
            Transistor saves up to $40,000 per year, per employee by working
            with us.{' '}
            <Link href="#" className="text-indigo-500 font-bold">
              Read our case study{' '}
              <ArrowSmallRightIcon className="w-6 text-indigo-500 stroke-2 inline" />
            </Link>
          </p>
        </div>
        <div className="lg-container text-center">
          <h5 className="text-lg font-bold text-indigo-500 mb-2">
            Deploy faster
          </h5>
          <div className="lg-container w-2/5 mx-auto">
            <h1 className="text-4xl font-bold mb-8">
              Everything you need to deploy your app
            </h1>
            <p className="font-semibold text-xl text-slate-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi vivvera elit nunc.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
