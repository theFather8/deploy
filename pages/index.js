import Link from 'next/link';
import {
  ArrowSmallRightIcon,
  HomeIcon,
  CheckIcon,
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
        <section>
          <div className="max-w-7xl mx-auto mt-64 text-center flex flex-col gap-3">
            <h3 className="text-lg font-bold text-indigo-500">Pricing</h3>
            <h1 className="text-6xl font-bold">
              Pricing plans for teams of all sizes
            </h1>
            <p className="font-semibold text-xl text-slate-600 mt-5 w-4/5 mx-auto">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus error facere necessitatibus mollitia fugiat quis porro
              alias modi veritatis quo.
            </p>
          </div>
          <div className="w-full mx-auto flex justify-center mt-32 gap-4">
            {/* first card */}
            <div className="border-2 border-gray-200 rounded-3xl w-3/12">
              <div className="p-11">
                <div className="w-11/12">
                  <h2 className="text-2xl font-semibold">Freelancer</h2>
                  <p className="text-lg text-slate-600 font-semibold my-5">
                    The essentials to provide your best work for clients.
                  </p>
                </div>
                <div className="flex my-5 items-end gap-2 mt-7">
                  <h1 className="text-5xl font-bold">$24</h1>
                  <p className="text-lg text-slate-600 font-bold">/month</p>
                </div>
                <div className="my-10">
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-3 text-lg text-slate-600 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> 5
                      products
                    </li>
                    <li className="flex gap-3 text-lg text-slate-600 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> Up to
                      1,000 subscribers
                    </li>
                    <li className="flex gap-3 text-lg text-slate-600 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> Basic
                      analytics
                    </li>
                    <li className="flex gap-3 text-lg text-slate-600 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> 48-hour
                      support response time
                    </li>
                  </ul>
                </div>
                <div className="text-center border-2 border-indigo-200 rounded-lg flex justify-center items-end mt-20">
                  <button className="p-2 font-bold text-lg text-indigo-500">
                    Buy plan
                  </button>
                </div>
              </div>
            </div>
            {/* 2nd card */}
            <div className="border-2 border-gray-200 rounded-3xl w-3/12">
              <div className="p-11">
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-indigo-500">
                      Startup
                    </h2>
                    <span className="text-sm font-bold text-indigo-500 border-2 rounded-full border-gray-200 bg-gray-200 px-2 py-1">
                      Most popular
                    </span>
                  </div>
                  <p className="text-lg text-slate-600 font-semibold my-5">
                    A plan that scales with your rapidly growing business.
                  </p>
                </div>
                <div className="flex my-5 items-end gap-2 mt-7">
                  <h1 className="text-5xl font-bold">$32</h1>
                  <p className="text-lg text-slate-600 font-bold">/month</p>
                </div>
                <div className="my-10">
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-3 text-lg text-slate-600 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> 5
                      products
                    </li>
                    <li className="flex gap-3 text-lg text-slate-600 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> Up to
                      1,000 subscribers
                    </li>
                    <li className="flex gap-3 text-lg text-slate-600 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> Basic
                      analytics
                    </li>
                    <li className="flex gap-3 text-lg text-slate-600 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> 48-hour
                      support response time
                    </li>
                    <li className="flex gap-3 text-lg text-slate-600 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" />{' '}
                      Marketing automations
                    </li>
                  </ul>
                </div>
                <div className="text-center border-2 border-indigo-500  bg-indigo-500 rounded-lg flex justify-center items-end">
                  <button className="p-2 font-bold text-lg text-white">
                    Buy plan
                  </button>
                </div>
              </div>
            </div>
            {/* 3rd card */}
            <div className="border-2 border-gray-200 rounded-3xl w-3/12">
              <div className="p-11">
                <div className="w-11/12">
                  <h2 className="text-2xl font-semibold">Enterprise</h2>
                  <p className="text-lg text-slate-600 font-semibold my-5">
                    Dedicated support and infrastructure for your company.
                  </p>
                </div>
                <div className="flex my-5 items-end gap-2 mt-7">
                  <h1 className="text-5xl font-bold">$48</h1>
                  <p className="text-lg text-slate-600 font-bold">/month</p>
                </div>
                <div className="my-10">
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-3 text-lg text-slate-600 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" />{' '}
                      Unlimited products
                    </li>
                    <li className="flex gap-3 text-lg text-slate-600 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" />{' '}
                      Unlimited subscribers
                    </li>
                    <li className="flex gap-3 text-lg text-slate-600 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> Advanced
                      analytics
                    </li>
                    <li className="flex gap-3 text-lg text-slate-600 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> 1-hour,
                      dedicated support response time
                    </li>
                    <li className="flex gap-3 text-lg text-slate-600 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" />{' '}
                      Marketing automations
                    </li>
                  </ul>
                </div>
                <div className="text-center border-2 border-indigo-200 rounded-lg flex justify-center items-end">
                  <button className="p-2 font-bold text-lg text-indigo-500">
                    Buy plan
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* FQA */}
          <div className="w-full mx-auto">
            <div className="w-9/12 mx-auto mt-44 pb-12 border-b-2 border-gray-200">
              <h1 className="text-3xl font-bold ">
                Frequently asked questions
              </h1>
            </div>
            <div className="w-9/12 mx-auto mt-8 flex justify-between">
              <h1 className="text-xl font-bold">
                What{"'"}s the best thing about Switzerland?
              </h1>
              <div className="w-1/2">
                <p className="text-xl text-slate-600 font-semibold">
                  I don{"'"}t know, but the flag is a big plus. Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Rerum doloribus
                  deleniti sunt!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-7xl mx-auto text-center pt-96 pb-96 border-b-2 border-gray-200">
            <div className="flex flex-col gap-1">
              <h1 className="text-5xl font-bold">Boost your productivity.</h1>
              <h1 className="text-5xl font-bold">Start using our app today.</h1>
              <p className="text-xl font-semibold text-slate-600 w-3/6 mx-auto mt-8">
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
      <footer>
        <div className="max-w-7xl mx-auto mt-36">
          <div className="flex justify-between items-center w-11/12">
            <div className="bg-indigo-500 border-2 w-9 h-9 rounded-full"></div>
            <ul className="flex flex-col gap-7">
              <li className="text-lg font-bold mb-8">Solutions</li>
              <li className="text-lg font-semibold text-slate-600">Hosting</li>
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
            <ul className="flex flex-col gap-7">
              <li className="text-lg font-bold">Support</li>
              <li className="text-lg font-bold">Support</li>
              <li className="text-lg font-bold">Company</li>
              <li className="text-lg font-bold">Legal</li>
            </ul>
            <ul className="flex flex-col gap-7">
              <li className="text-lg font-bold">Company</li>
              <li className="text-lg font-bold">Support</li>
              <li className="text-lg font-bold">Company</li>
              <li className="text-lg font-bold">Legal</li>
            </ul>
            <ul className="flex flex-col gap-7">
              <li className="text-lg font-bold">Legal</li>
              <li className="text-lg font-bold">Support</li>
              <li className="text-lg font-bold">Company</li>
              <li className="text-lg font-bold">Legal</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
