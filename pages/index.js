import Link from 'next/link';
import { ArrowSmallRightIcon, HomeIcon } from '@heroicons/react/24/solid';
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ArrowPathIcon,
  FingerPrintIcon,
} from '@heroicons/react/24/outline';

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
        <div className="lg-container max-w-7xl mx-auto mt-36 text-center">
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
        <div className="lg-container max-w-7xl  mx-auto mt-28 mb-20 border-2 border-gray-200 rounded-3xl">
          <div className="lg-container w-auto m-5">
            <img
              src="/img/project-app-screenshot.png"
              alt="photo-1"
              className="border-2 border-gray-200 rounded-lg shadow-2xl"
            />
          </div>
        </div>
        <div className="lg-container max-w-7xl mx-auto mt-36">
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
          <div className="lg-container max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold mb-8">
              Everything you need to deploy your app
            </h1>
            <p className="font-semibold text-xl text-slate-600 w-3/4 mx-auto">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi vivvera elit nunc.
            </p>
          </div>
        </div>
        <div className="lg-container mt-36 max-w-7xl mx-auto grid lg:grid-cols-2 gap-x-8 gap-y-20">
          <div className="flex gap-6">
            <div className="flex-none">
              <CloudArrowUpIcon className="bg-indigo-500 text-white h-12 w-12 p-2 rounded-lg" />
            </div>
            <div className="flex-1">
              <h1 className="font-semibold text-xl mb-4 mt-1">
                Push to deploy
              </h1>
              <p className="font-semibold text-xl text-slate-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                porro error aperiam totam perspiciatis, laudantium veritatis
                officia!
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-none">
              <LockClosedIcon className="bg-indigo-500 text-white h-12 w-12 p-2 rounded-lg" />
            </div>
            <div className="flex-1">
              <h1 className="font-semibold text-xl mb-4 mt-1">
                SSL certificates
              </h1>
              <p className="font-semibold text-xl text-slate-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                porro error aperiam totam perspiciatis, laudantium veritatis
                officia!
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-none">
              <ArrowPathIcon className="bg-indigo-500 text-white h-12 w-12 p-2 rounded-lg" />
            </div>
            <div className="flex-1">
              <h1 className="font-semibold text-xl mb-4 mt-1">Simple Queues</h1>
              <p className="font-semibold text-xl text-slate-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                porro error aperiam totam perspiciatis, laudantium veritatis
                officia!
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-none">
              <FingerPrintIcon className="bg-indigo-500 text-white h-12 w-12 p-2 rounded-lg" />
            </div>
            <div className="flex-1">
              <h1 className="font-semibold text-xl mb-4 mt-1">
                Advanced security
              </h1>
              <p className="font-semibold text-xl text-slate-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                porro error aperiam totam perspiciatis, laudantium veritatis
                officia!
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1500px] mx-auto mt-64 relative h-[500px] overflow-hidden rounded-3xl bg-black">
          <img
            src="/img/girl.avif"
            alt="girl"
            className="grayscale w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-20 w-3/5 gap-10">
            <div className="flex gap-4 items-center">
              <HomeIcon className="h-10 text-white" />
              <h1 className="text-white font-bold text-3xl">Workcaution</h1>
            </div>
            <p className="text-white font-bold text-2xl">
              {'"'}Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              deserunt doloribus laboriosam quidem porro laudantium itaque nobis
              illo ipsa placeat, nihil repudiandae debitis. Dolorum excepturi
              inventore exercitationem sapiente unde sequi!{'"'}
            </p>
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-bold text-xl">Judith Black</h3>
              <p className="text-white text-xl">CEO of Tuple</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
