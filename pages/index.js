import Link from 'next/link';
import {
  ArrowSmallRightIcon,
  HomeIcon,
  CheckIcon,
  Bars3Icon,
} from '@heroicons/react/24/solid';
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
        <nav className="h-20 md:flex hidden justify-between items-center px-4 py-4 font-bold m-1 text-lg">
          <div className="bg-indigo-500 w-9 h-9 rounded-full" />
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
        <nav className="flex md:hidden justify-between items-center px-4 py-4">
          <div className="bg-indigo-500 w-9 h-9 rounded-full" />
          <Bars3Icon className="h-10 text-black" />
        </nav>
      </header>
      <main>
        <div className="lg-container max-w-7xl mx-auto mt-36 text-center">
          <h1 className="font-bold md:text-6xl text-4xl mb-10 md:w-3/4 mx-auto">
            Deploy to the cloud with confidence
          </h1>
          <p className="font-semibold text-xl text-slate-600 mb-11 md:w-3/4 mx-auto px-5 xl:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            voluptas asperiores aliquam eveniet voluptatem veniam eaque placeat,
            harum, itaque vitae nostrum, corrupti sint praesentium.
          </p>
          <div className="flex gap-7 justify-center items-center text-lg font-bold">
            <button className="bg-indigo-500 rounded-md py-3 px-4 text-white">
              Get started
            </button>
            <button className="flex items-center">
              Learn more{' '}
              <ArrowSmallRightIcon className="h-6 w-6 text-black stroke-2 pt-1" />
            </button>
          </div>
        </div>
        <div className="lg-container max-w-7xl  mx-auto mt-28 mb-20 px-5 xl:px-0">
          <div className="lg-container w-full p-2 md:p-5 border-2 border-gray-200 rounded-xl ">
            <img
              src="/img/project-app-screenshot.png"
              alt="photo-1"
              className="border-2 border-gray-200 rounded-lg shadow-2xl"
            />
          </div>
        </div>
        <div className="lg-container max-w-7xl mx-auto px-5 xl:px-0">
          <ul className="flex flex-wrap gap-10 justify-center items-center">
            <li>
              <img
                src="/img/transistor.svg"
                alt="transistor"
                className="h-10 md:h-16"
              />
            </li>
            <li>
              <img
                src="/img/reform.svg"
                alt="reform"
                className="h-10 md:h-16"
              />
            </li>
            <li>
              <img src="/img/tuple.svg" alt="tuple" className="h-10 md:h-16" />
            </li>
            <li>
              <img
                src="/img/savvycal.svg"
                alt="savvycal"
                className="h-10 md:h-16"
              />
            </li>
            <li>
              <img
                src="/img/statamic.svg"
                alt="statamic"
                className="h-10 md:h-16"
              />
            </li>
          </ul>
        </div>
        <div className="lg-container text-center flex justify-center py-20">
          <div className="border-2 border-gray-200 rounded-full px-4 py-1 flex flex-col lg:flex lg:flex-row gap-1 items-center">
            <p className="text-slate-600 text-lg font-semibold md:block hidden">
              Transistor saves up to $40,000 per year, per employee by working
              with us.{' '}
            </p>
            <Link href="#" className="text-indigo-500 font-bold">
              Read our case study{' '}
              <ArrowSmallRightIcon className="w-6 text-indigo-500 stroke-2 inline" />
            </Link>
          </div>
        </div>
        <div className="lg-container max-w-7xl mx-auto  px-5 xl:px-0 pt-20 md:pt-44 ">
          <h5 className="text-lg font-bold text-start md:text-center text-indigo-500 mb-2">
            Deploy faster
          </h5>

          <div className="flex flex-col gap-6 text-start md:text-center">
            <h1 className="md:text-5xl text-3xl font-bold">
              Everything you need to deploy your app
            </h1>
            <p className="font-semibold text-xl text-slate-600 md:w-3/5 md:mx-auto">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi vivvera elit nunc.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-20 py-20 md:pt-20 md:pb-52 max-w-5xl mx-auto">
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
                <h1 className="font-semibold text-xl mb-4 mt-1">
                  Simple Queues
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
        </div>
        {/* <div className="lg-container max-w-7xl mx-auto grid lg:grid-cols-2 gap-x-8 gap-y-20 px-5 xl:px-0 py-20">
       
        </div> */}
        <div className="md:max-w-[1500px] mx-auto  xl:px-0 relative h-[500px] overflow-hidden md:rounded-3xl bg-black my-10">
          <div className="w-full h-full">
            <img
              src="/img/girl.avif"
              alt="girl"
              className="grayscale w-full h-full object-cover opacity-80"
            />
          </div>

          <div className="absolute inset-0 flex flex-col justify-center md:px-20 px-5 md:w-3/5 gap-10">
            <div className="flex gap-4 items-center">
              <HomeIcon className="md:h-10 h-5 text-white" />
              <h1 className="text-white font-bold md:text-3xl text-xl">
                Workcaution
              </h1>
            </div>
            <p className="text-white font-bold md:text-2xl text-lg">
              {'"'}Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              deserunt doloribus laboriosam quidem porro laudantium itaque nobis
              illo ipsa placeat, nihil repudiandae debitis. Dolorum excepturi
              inventore exercitationem sapiente unde sequi!{'"'}
            </p>
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-bold md:text-xl text-lg">
                Judith Black
              </h3>
              <p className="text-white md:text-xl text-lg">CEO of Tuple</p>
            </div>
          </div>
        </div>
        <section className="py-20 md:pt-52">
          <div className="max-w-7xl mx-auto  text-center flex flex-col gap-2 px-5 xl:px-0">
            <h3 className="text-lg font-bold text-indigo-500">Pricing</h3>
            <div className="flex flex-col gap-4">
              <h1 className="md:text-6xl text-4xl font-bold">
                Pricing plans for teams of all sizes
              </h1>
              <p className="font-semibold text-xl text-slate-600 md:w-9/12 mx-auto">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus error facere necessitatibus mollitia fugiat quis
                porro alias modi veritatis quo.
              </p>
            </div>
          </div>
          {/* cards */}
          <div className="max-w-[1500px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 justify-center mt-20 md:mt-32 gap-4 px-5 xl:px-0">
            {/* first card */}
            <div className="border-2 border-gray-200 rounded-3xl py-10 px-8 md:px-11 md:py-11 flex flex-col justify-between">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-semibold">Freelancer</h2>
                  <p className="text-slate-600 font-semibold">
                    The essentials to provide your best work for clients.
                  </p>
                </div>
                <div className="flex items-end gap-1">
                  <h1 className="text-5xl font-bold">$24</h1>
                  <p className="text-slate-600 font-bold">/month</p>
                </div>
                <div className="flex flex-col">
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-3">
                      <CheckIcon className="h-6 w-6" /> 5 products
                    </li>
                    <li className="flex gap-3">
                      <CheckIcon className="h-6 w-6" /> Up to 1,000 subscribers
                    </li>
                    <li className="flex gap-3">
                      <CheckIcon className="h-6 w-6" /> Basic analytics
                    </li>
                    <li className="flex gap-3">
                      <CheckIcon className="h-6 w-6" /> 48-hour support response
                      time
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-10">
                <div className="flex justify-center border-2 border-gray-200 rounded-md ">
                  <button className="px-2 py-1 text-lg font-bold">
                    Buy plan
                  </button>
                </div>
              </div>
            </div>

            {/* 2nd card */}
            <div className="border-2 border-gray-200 rounded-3xl py-10 px-8 md:px-11 md:py-11 flex flex-col justify-between">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-semibold">Freelancer</h2>
                  <p className="text-slate-600 font-semibold">
                    The essentials to provide your best work for clients.
                  </p>
                </div>
                <div className="flex items-end gap-1">
                  <h1 className="text-5xl font-bold">$24</h1>
                  <p className="text-slate-600 font-bold">/month</p>
                </div>
                <div className="flex flex-col">
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-3">
                      <CheckIcon className="h-6 w-6" /> 5 products
                    </li>
                    <li className="flex gap-3">
                      <CheckIcon className="h-6 w-6" /> Up to 1,000 subscribers
                    </li>
                    <li className="flex gap-3">
                      <CheckIcon className="h-6 w-6" /> Basic analytics
                    </li>
                    <li className="flex gap-3">
                      <CheckIcon className="h-6 w-6" /> 48-hour support response
                      time
                    </li>
                    <li className="flex gap-3">
                      <CheckIcon className="h-6 w-6" /> 48-hour support response
                      time
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-10">
                <div className="flex justify-center border-2 border-gray-200 rounded-md ">
                  <button className="px-2 py-1 text-lg font-bold">
                    Buy plan
                  </button>
                </div>
              </div>
            </div>
            {/* 3rd card */}
            <div className="border-2 border-gray-200 rounded-3xl py-10 px-8 md:px-11 md:py-11 flex flex-col justify-between">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-semibold">Freelancer</h2>
                  <p className="text-slate-600 font-semibold">
                    The essentials to provide your best work for clients.
                  </p>
                </div>
                <div className="flex items-end gap-1">
                  <h1 className="text-5xl font-bold">$24</h1>
                  <p className="text-slate-600 font-bold">/month</p>
                </div>
                <div className="flex flex-col">
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-3">
                      <CheckIcon className="h-6 w-6" /> 5 products
                    </li>
                    <li className="flex gap-3">
                      <CheckIcon className="h-6 w-6" /> Up to 1,000 subscribers
                    </li>
                    <li className="flex gap-3">
                      <CheckIcon className="h-6 w-6" /> Basic analytics
                    </li>
                    <li className="flex gap-3">
                      <CheckIcon className="h-6 w-6" /> 48-hour support response
                      time
                    </li>
                    <li className="flex gap-3">
                      <CheckIcon className="h-6 w-6" /> 48-hour support response
                      time
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-10">
                <div className="flex justify-center border-2 border-gray-200 rounded-md ">
                  <button className="px-2 py-1 text-lg font-bold">
                    Buy plan
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* FQA */}
        </section>
        <section className="py-20 md:pt-32">
          <div className="max-w-[1500px] mx-auto px-5 xl:px-0">
            <div className="pb-12 border-b-2 border-gray-200">
              <h1 className="text-3xl font-bold ">
                Frequently asked questions
              </h1>
            </div>
            <div className=" mt-8 grid md:grid-cols-2">
              <h1 className="text-xl font-bold">
                What{"'"}s the best thing about Switzerland?
              </h1>

              <p className="md:text-xl text-slate-600 font-semibold md:mt-0 mt-4">
                I don{"'"}t know, but the flag is a big plus. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Rerum doloribus deleniti
                sunt!
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-64">
          <div className="max-w-7xl mx-auto text-center ">
            <div className="flex flex-col md:gap-1">
              <h1 className="md:text-5xl text-3xl font-bold">
                Boost your productivity.
              </h1>
              <h1 className="md:text-5xl text-3xl font-bold">
                Start using our app today.
              </h1>
              <p className="md:text-xl font-semibold text-slate-600 md:w-3/6 mx-auto mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                veritatis beatae labore totam eaque fuga ipsam voluptas!
              </p>
            </div>
            <div className="flex gap-7 justify-center items-center text-lg font-bold mt-12">
              <button className="bg-indigo-500 rounded-md py-3 px-4 text-white">
                Get started
              </button>
              <button className="flex items-center">
                Learn more{' '}
                <ArrowSmallRightIcon className="h-6 w-6 text-black stroke-2 pt-1" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="md:block hidden ">
        <div className="max-w-7xl mx-auto py-36 border-t">
          <div className="flex justify-between items-start w-11/12">
            <div className="bg-indigo-500 border-2 w-9 h-9 rounded-full"></div>
            <div className="flex gap-28">
              <ul className="flex flex-col gap-6">
                <li className="text-lg font-bold mb-4">Solutions</li>
                <li className="text-lg font-semibold text-slate-600">
                  Hosting
                </li>
                <li className="text-lg font-semibold text-slate-600">
                  Data services
                </li>
                <li className="text-lg font-semibold text-slate-600">
                  Uptime Monitoring
                </li>
                <li className="text-lg font-semibold text-slate-600">
                  Enterprise Services
                </li>
              </ul>
              <ul className="flex flex-col gap-6">
                <li className="text-lg font-bold mb-4">Support</li>
                <li className="text-lg font-semibold text-slate-600">
                  Pricing
                </li>
                <li className="text-lg font-semibold text-slate-600">
                  Documentation
                </li>
                <li className="text-lg font-semibold text-slate-600">Guides</li>
                <li className="text-lg font-semibold text-slate-600">
                  API reference
                </li>
              </ul>
              <ul className="flex flex-col gap-6">
                <li className="text-lg font-bold mb-4">Company</li>
                <li className="text-lg font-semibold text-slate-600">About</li>
                <li className="text-lg font-semibold text-slate-600">Blog</li>
                <li className="text-lg font-semibold text-slate-600">Jobs</li>
                <li className="text-lg font-semibold text-slate-600">Press</li>
                <li className="text-lg font-semibold text-slate-600">
                  Partners
                </li>
              </ul>
              <ul className="flex flex-col gap-6">
                <li className="text-lg font-bold mb-4">Legal</li>
                <li className="text-lg font-semibold text-slate-600">Claim</li>
                <li className="text-lg font-semibold text-slate-600">
                  Privacy
                </li>
                <li className="text-lg font-semibold text-slate-600">Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer className="md:hidden block px-5 ">
        <div className="py-20  border-t">
          <div className="bg-indigo-500 border-2 w-9 h-9 rounded-full" />
          <div className="grid grid-cols-2 gap-10 pt-14">
            <div className="flex flex-col gap-4">
              <p className=" font-bold text-sm">Solutions</p>
              <ul className="flex flex-col gap-3">
                <li className=" font-semibold text-sm text-slate-600">
                  Hosting
                </li>
                <li className=" font-semibold text-sm text-slate-600">
                  Data services
                </li>
                <li className=" font-semibold text-sm text-slate-600">
                  Uptime Monitoring
                </li>
                <li className="text-sm font-semibold text-slate-600">
                  Enterprise Services
                </li>
              </ul>

              <p className="text-sm font-bold mt-5">Support</p>
              <ul className="flex flex-col gap-3">
                <li className="text-sm font-semibold text-slate-600">
                  Pricing
                </li>
                <li className="text-sm font-semibold text-slate-600">
                  Documentation
                </li>
                <li className="text-sm font-semibold text-slate-600">Guides</li>
                <li className="text-sm font-semibold text-slate-600">
                  API reference
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-bold">Company</p>
              <ul className="flex flex-col gap-3">
                <li className="text-sm font-semibold text-slate-600">About</li>
                <li className="text-sm font-semibold text-slate-600">Blog</li>
                <li className="text-sm font-semibold text-slate-600">Jobs</li>
                <li className="text-sm font-semibold text-slate-600">Press</li>
                <li className="text-sm font-semibold text-slate-600">
                  Partners
                </li>
              </ul>
              <p className="text-sm font-bold mt-5">Legal</p>
              <ul className="flex flex-col gap-3">
                <li className="text-sm font-semibold text-slate-600">Claim</li>
                <li className="text-sm font-semibold text-slate-600">
                  Privacy
                </li>
                <li className="text-sm font-semibold text-slate-600">Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
