import { type NextPage } from "next";
import Head from "next/head";
import { useId, useState } from "react";
import { AuthShowcase } from "../components/auth-showcase";
import { api } from "../utils/api";

import { 
  ArrowPathIcon, MagnifyingGlassIcon,
 } from '@heroicons/react/24/solid';
import { listing } from "../../database/entities/listing";

const Home: NextPage = () => {
  const id = useId();
  const [emailInput, setInput] = useState('');
  const [hasError, setHasError] = useState(false);

  const mutation = api.organisation.create.useMutation({
    onError(error) {
      setHasError(true);
    }
  })


  function registerBusiness() {
    mutation.mutate({ email: emailInput });
  }

  return (
    <>
      <Head>
        <title>Low impact living</title>
        <meta name="description" content="Low impact living" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-teal/25">

        {/* Header */}
        
        <header className="header bg-white shadow-md">
          <div className="container px-6 py-3 mx-auto grid grid-cols-12 gap-6">
            <div className="col-span-6">
              <a href="#" className="float-left logo hover:bg-teal/25 border-4 border-white rounded-lg ease-in-out duration-200 block p-2 mt-1 text-primary1">
                <ArrowPathIcon className="h-8 w-8 -mt-1 text-primary1 inline-block mr-2"/>
                <span className=" p-1 pt-0.5 inline-block text-lg text-dark-teal bold">Waste Swap</span>
              </a>
            </div>
            <nav className="float-right text-right p-1 pt-3 col-span-6">
              <AuthShowcase/>
            </nav>
          </div>
        </header>

        {/* Welcome hero */}

        <div className="bg-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 ">
            <div className="py-24 px-7 text-center md:text-left">
              <h1 className="text-5xl text-dardteal font-medium">Welcome to Waste Swap</h1>
              <p className="text-2xl pt-3 font-light text-dardteal mt-4">Aliquam laoreet aliquet pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus ut tortor nec lectus pharetra finibus.</p>
              <p className="text-2xl pt-6 font-light text-primary1">Buy | Swap | Sell</p>
            </div>
            <div className="hero-swap p-56">
            </div>
          </div>
        </div>

        {/* Search */}

        <div className="bg-primary1/70 text-center shadow-xl">
          <div className="max-w-[2220px] mx-auto">
            <div className="overlay p-24 px-4 md:px-56 block container mx-auto">
              <div className="relative">
                <form className="main-search grid grid-cols-1 md:grid-cols-12 relative">
                  <label className="text-3xl col-span-3 p-6 font-bold text-white text-center bg-white/40">Search:</label>
                  <input type="text" className="text-3xl col-span-9 shadow-xl p-6 border" placeholder="eg. wooden panels" />
                  <button className="rounded-full bg-primary1 absolute hover:bg-primary1/80 transition-all"><MagnifyingGlassIcon className="h-8 w-8 ml-2 text-white inline-block mr-2"/></button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* What is Waste Swap */}

        <div className="container mx-auto shadow-2xl bg-white p-24">
          <h2 className="text-4xl mb-0 md:mb-8 text-primary6 font-medium text-center">What is Waste Swap?</h2>
          <p className="text-xl">Donec consectetur gravida est at vestibulum. Cras pellentesque purus a pretium venenatis. Fusce accumsan tempor orci, nec egestas nunc. Integer accumsan dictum dui, sit amet facilisis eros congue eget. Duis accumsan dolor orci, vitae vestibulum enim euismod et.</p>
        </div>

        {/* How does it work? */}

        <div className="container mx-auto shadow-2xl bg-white">
          <div className="bg-primary3/20 p-24">
            <h2 className="text-4xl mb-0 md:mb-8 text-primary6 font-medium text-center">How does it work?</h2>
            <section className="three-points md:grid md:grid-cols-3 md:gap-8 md:place-content-evenly max-w-full md:max-w-full lg:max-w-4xl mx-auto">
                <a href="#" className="point-1 scale-75 md:scale-100 overflow-hidden -mb-6 md:mb-0 mx-auto text-white ease-in-out duration-200 hover:scale-105 shadow-xl border-8 border-primary1/70 rounded-full">
                  <span className="text-xl font-medium px-1 py-2 bg-primary1/70 text-white absolute bottom-0 left-0 right-0">Register</span>
                </a>
                <a href="#" className="point-2 scale-75 md:scale-100 overflow-hidden -mb-6 md:mb-0 mx-auto text-white ease-in-out duration-200 hover:scale-105 shadow-xl border-8 border-primary1/70 rounded-full">
                  <span className="text-xl font-medium px-1 py-2 bg-primary1/70 text-white absolute bottom-0 left-0 right-0">Swap</span>
                </a>
                <a href="#" className="point-3 scale-75 md:scale-100 overflow-hidden -mb-6 md:mb-0 mx-auto text-white ease-in-out duration-200 hover:scale-105 shadow-xl border-8 border-primary1/70 rounded-full">
                  <span className="text-xl font-medium px-1 py-2 bg-primary1/70 text-white absolute bottom-0 left-0 right-0">Shop</span>
                </a>
            </section>
          </div>

          {/* What's the story behind Waste Swap? */}

          <section className="grid grid-cols-1 md:grid-cols-2">
            <div className="hero-story p-56">
            </div>
            <div className="p-24">
              <h2 className="text-4xl text-primary6 font-medium mb-8">What&rsquo;s the story behind Waste Swap?</h2>
              <p className="text-xl text-primary6 font-light mb-4">Nulla at pharetra lacus, eget efficitur orci. Integer ut neque in tellus rhoncus commodo sit amet quis orci.</p>
              <p className="text-xl text-primary6 font-light mb-4">Donec consectetur gravida est at vestibulum. Cras pellentesque purus a pretium venenatis. Fusce accumsan tempor orci, nec egestas nunc. Integer accumsan dictum dui, sit amet facilisis eros congue eget. Duis accumsan dolor orci, vitae vestibulum enim euismod et.</p>
              <p className="text-xl text-primary6 font-light mb-4">Praesent egestas odio vulputate tempus auctor. Fusce scelerisque, massa eu elementum dignissim, urna lectus molestie odio, et varius mauris quam in leo. Pellentesque vehicula tempor nulla, a semper metus consectetur quis. Nunc ut dignissim eros, sed euismod eros. </p>
            </div>
          </section>

          {/* What sort of thing is available? */}

          <div className="bg-primary3/10 p-24">
            <h2 className="text-4xl text-primary6 font-light text-center mb-12">What sort of thing is available?</h2>
            <section className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                ['images/available-1.jpg', 'Lots of cable drums', '/products/product1'],
                ['images/available-2.jpg', 'Various sized wetsuits', '/products/product2'],
                ['images/available-3.jpg', 'Many drainage pipes', '/products/product3'],
                ['images/available-4.jpg', 'Sections of fencing', '/products/product4'],
              ].map(([discoverImage, discoverProduct, discoverUrl]) => (
                <a key={discoverProduct} href={discoverUrl} className="rounded-b-md shadow-xl block hover:underline hover:text-dark-teal ease-in-out duration-200 hover:scale-105">
                  <img className="" src={discoverImage} alt={discoverProduct} />
                  <span className="p-4 block rounded-y text-center">{discoverProduct}</span>
                </a>
              ))}
            </section>
          </div>

          {/* Ready to get started? */}

          <section className="grid grid-cols-1 md:grid-cols-2 mb-12">
            <div className="p-24">
              <h2 className="text-4xl text-primary6 font-light mb-8">Ready to get started?</h2>
              <p className="text-xl text-primary6 font-light mb-8">Nulla at pharetra lacus, eget efficitur orci. Integer ut neque in tellus rhoncus commodo sit amet quis orci.</p>
              <button className="w-3/5 bg-dark-blue text-white border border-dark-blue hover:bg-white font-bold px-8 py-4 block rounded-md border ease-in-out duration-200 hover:text-dark-blue mb-4">Sign up</button>
              <button className="w-3/5 bg-dark-green text-white border border-dark-green hover:bg-white font-bold px-8 py-4 block rounded-md border ease-in-out duration-200 hover:text-dark-blue ">Log in</button>
            </div>
            <div className="hero-start p-56">
            </div>
          </section>
        </div>

        {/* Footer */}

        <footer className="mt-0 bg-white ">
          <div className="container mx-auto px-24 py-8 grid grid-cols-2 md:grid-cols-3 text-dark-teal gap-12">
            <nav className="col-span-1">
              <h2 className="text-lg font-semibold border-b-2 border-teal pb-2 mb-2">About Low Impact</h2>
              {[
                ['Link 1', '/dashboard'],
                ['Link 2', '/team'],
                ['Link 3', '/projects'],
                ['Link 4', '/reports'],
              ].map(([title, url]) => (
                <a key={title} href={url} className="block hover:underline ease-in-out duration-200">{title}</a>
              ))}
            </nav>
            <nav className="col-span-1">
              <h2 className="text-lg font-semibold border-b-2 border-teal pb-2 mb-2">Get in touch</h2>
              {[
                ['Email', '/dashboard'],
                ['Facebook', '/team'],
                ['Twitter', '/projects'],
                ['Discord', '/reports'],
              ].map(([title, url]) => (
                <a key={title} href={url} className="block hover:underline ease-in-out duration-200">{title}</a>
              ))}
            </nav>
            <nav className="col-span-1">
            <h2 className="text-lg font-semibold border-b-2 border-teal pb-2 mb-2">More</h2>
            {[
                ['Link 9', '/dashboard'],
                ['Link 10', '/team'],
                ['Link 11', '/projects'],
                ['Link 12', '/reports'],
              ].map(([title, url]) => (
                <a key={title} href={url} className="block hover:underline ease-in-out duration-200">{title}</a>
              ))}
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
