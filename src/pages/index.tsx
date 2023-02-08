import { type NextPage } from "next";
import Head from "next/head";
import { useId, useState } from "react";
import { AuthShowcase } from "../components/auth-showcase";
import { api } from "../utils/api";;

import { 
  ArrowPathIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserPlusIcon,
 } from '@heroicons/react/24/solid';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;600&display=swap" rel="stylesheet"></link>
      </Head>
      <main className="bg-teal/25">

        {/* Header */}
        <header className="header shadow">
          <div className="container mx-auto h-20">
            <a href="#" className="float-left col-span-2 bg-white/100 rounded hover:bg-white/70 ease-in-out duration-200 block p-5 text-primary1">
              <ArrowPathIcon className="h-8 w-8 -mt-1 text-primary1 inline-block mr-2"/>
              <span className="p-1 pt-1 inline-block text-lg text-primary1 font-bold text-2xl">WASTE SWAP</span>
            </a>
            <nav className="float-right p-1 pt-2">
              <AuthShowcase/>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <div className="welcome bg-primary1">
          <div className="overlay">
            <div className=" py-8 md:py-12 lg:py-24 xl:py-32 px-4 md:px-6 lg:px-32 xl:px-52 block container mx-auto">
              <h1 className="text-3xl md:text-5xl mb-8 font-light leading-normal text-center text-white">Welcome to <span className="text-white">Waste Swap</span>, a place to <span className="text-white inline-block">Buy</span> something, <span className="text-white inline-block">Sell</span> everything or <span className="text-white inline-block">Swap</span> anything.</h1>
              <div className="relative">
                <form className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
                  <label className="hidden md:inline-block text-3xl mb-2 col-span-2 p-6 font-bold text-white text-center">Search:</label>
                  <input type="text" className="p-6 md:p-6 lg:p-6 col-span-10 shadow-xl p-6 rounded-md rounded-full border" placeholder="eg. wooden panels" />
                  {/* <input type="submit" value="Go" className="bg-teal text-white border border-teal font-bold px-8 py-4 block rounded-md ease-in-out duration-200 hover:bg-white hover:text-teal" /> */}
                  <button className="hero-search rounded-full bg-primary3 absolute"><MagnifyingGlassIcon className="h-8 w-8 ml-2 text-white inline-block mr-2"/></button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Main content wrapper */}
        <div className="container mx-auto shadow-2xl bg-white p-8">
          <h2 className="text-2xl mb-6 md:text-4xl text-primary6 font-light text-center">How does it work?</h2>
          <section className="three-points p-0 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 xl:mx-56 text-center">
            <a href="#" className="point-1 grid grid-cols-2 sm:grid-cols-1 block text-white hover:underline hover:text-white/70 ease-in-out duration-200 hover:scale-105 rounded-full mx-auto">
              {/* <UserPlusIcon className="h-8 w-8 ml-2 text-white inline-block mr-2"/> */}
              <span className="image inline-block h-200 w-200 bg-primary1 rounded-full shadow-xl border-b-8 border-primary3 "></span>
              <span className="desc pt-24 sm:pt-4 sm:p-4 block rounded-y text-primary1 text-xl font-bold">Sign up</span>
            </a>
            <a href="#" className="point-2 grid grid-cols-2 sm:grid-cols-1 block text-white hover:underline hover:text-white/70 ease-in-out duration-200 hover:scale-105 rounded-full mx-auto">
              {/* <ArrowPathIcon className="h-8 w-8 ml-2 text-white inline-block mr-2"/> */}
              <span className="image inline-block h-200 w-200 bg-primary1 rounded-full shadow-xl border-b-8 border-primary3 "></span>
              <span className="desc pt-24 sm:pt-4 sm:p-4 block rounded-y text-primary1 text-xl font-bold">Swap</span>
            </a>
            <a href="#" className="point-3 grid grid-cols-2 sm:grid-cols-1 block text-white hover:underline hover:text-white/70 ease-in-out duration-200 hover:scale-105 rounded-full mx-auto">
              {/* <ShoppingCartIcon className="h-8 w-8 ml-2 text-white inline-block mr-2"/> */}
              <span className="image inline-block h-200 w-200 bg-primary1 rounded-full shadow-xl border-b-8 border-primary3 "></span>
              <span className="desc pt-24 sm:pt-4 sm:p-4 block rounded-y text-primary1 text-xl font-bold">Shop</span>
            </a>
          </section>

          {/* Featured products */}
          {/* <h2 className="text-2xl md:text-4xl text-primary6  font-light text-center">Featured products</h2>
          <section className="p-0 pt-4 py-8 grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-4">
            {[
              ['images/pipes-8106__340.jpg', 'Featured product 1', '/products/product1'],
              ['images/wetsuits-59112__340.jpg', 'Featured product 2', '/products/product2'],
              ['images/building-rubble-2816007__340.jpg', 'Featured product 3', '/products/product3'],
              ['images/scrapyard-352912__340.jpg', 'Featured product 4', '/products/product4'],
              ['images/lines-2147453__340.jpg', 'Featured product 5', '/products/product5'],
              ['images/green-72772__340.jpg', 'Featured product 6', '/products/product6'],
            ].map(([featuredImage, featuredProduct, featuredUrl]) => (
              <a key={featuredProduct} href={featuredUrl} className="grid grid-cols-2 md:grid-cols-1 rounded-b-md shadow-xl block hover:underline hover:text-teal ease-in-out duration-200 hover:scale-105">
                <img className="" src={featuredImage} alt={featuredProduct} />
                <span className="p-4 block rounded-y ">{featuredProduct}</span>
              </a>
            ))}
          </section> */}

          {/* What do customers think? */}
          <section className="hero grid grid-cols-1 lg:grid-cols-2 gap-8 border-4 border-teal p-8 rounded-xl mb-6">
            <div className="col-span-1">
              <img src="images/customers.jpg" alt="Customer discussing with staff member" />
            </div>
            <div>
            <h2 className="text-2xl md:text-4xl text-primary6 font-light mb-2 text-center md:text-left">What do customers think?</h2>
            <p className="text-lg md:text-xl text-primary6 font-light mb-4 text-center md:text-left"><span className="inline mr-4 font-bold text-primary1">"</span><i>Donec consectetur gravida est at vestibulum. Cras pellentesque purus a pretium venenatis. Fusce accumsan tempor orci, nec egestas nunc. Integer accumsan dictum dui, sit amet facilisis eros congue eget. Duis accumsan dolor orci, vitae vestibulum enim euismod et.</i><span className="inline ml-4 font-bold text-primary1">"</span><span className="block font-bold mt-2 text-center md:text-left">Martin Jones</span></p>
            <p className="text-lg md:text-xl text-primary6 font-light mb-4 text-center md:text-left"><span className="inline mr-4 font-bold text-primary1">"</span><i>Praesent egestas odio vulputate tempus auctor. Fusce scelerisque, massa eu elementum dignissim, urna lectus molestie odio, et varius mauris quam in leo. Pellentesque vehicula tempor nulla, a semper metus consectetur quis. Nunc ut dignissim eros, sed euismod eros.</i><span className="inline ml-4 font-bold text-primary1">"</span><span className="block font-bold mt-2 text-center md:text-left">Jane Stevens</span></p>
            </div>
          </section>

          {/* Discover more */}
          <h2 className="text-2xl mb-6 md:text-4xl text-primary6 font-light text-center">Recent additions</h2>
          <section className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-4">
            {[
              ['images/lines-2147453__340.jpg', 'Discover Product 1', '/products/product1'],
              ['images/wetsuits-59112__340.jpg', 'Discover Product 2', '/products/product2'],
              ['images/green-72772__340.jpg', 'Discover Product 3', '/products/product3'],
              ['images/scrapyard-352912__340.jpg', 'Discover Product 4', '/products/product4'],
              ['images/building-rubble-2816007__340.jpg', 'Discover Product 5', '/products/product5'],
              ['images/pipes-8106__340.jpg', 'Discover Product 6', '/products/product6'],
            ].map(([discoverImage, discoverProduct, discoverUrl]) => (
              <a key={discoverProduct} href={discoverUrl} className="grid grid-cols-2 md:grid-cols-1 rounded-b-md shadow-xl block hover:underline hover:text-teal ease-in-out duration-200 hover:scale-105">
                <img className="" src={discoverImage} alt={discoverProduct} />
                <span className="p-4 block rounded-y ">{discoverProduct}</span>
              </a>
            ))}
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-0 bg-primary1">
          <div className="container mx-auto p-8 grid grid-cols-0 sm:grid-cols-3 gap-8">
            <nav className="p-[pad] col-span-1">
              <h2 className="text-lg font-semibold text-white border-b-2 border-white pb-2 mb-2">About Low Impact</h2>
              {[
                ['Link 1', '/dashboard'],
                ['Link 2', '/team'],
                ['Link 3', '/projects'],
                ['Link 4', '/reports'],
              ].map(([title, url]) => (
                <a key={title} href={url} className="block hover:underline text-white hover:text-white ease-in-out duration-200">{title}</a>
              ))}
            </nav>
            <nav className="p-[pad] col-span-1">
              <h2 className="text-lg font-semibold text-white border-b-2 border-white pb-2 mb-2">Get in touch</h2>
              {[
                ['Email', '/dashboard'],
                ['Facebook', '/team'],
                ['Twitter', '/projects'],
                ['Discord', '/reports'],
              ].map(([title, url]) => (
                <a key={title} href={url} className="block hover:underline text-white hover:text-white ease-in-out duration-200">{title}</a>
              ))}
            </nav>
            <nav className="p-[pad] col-span-1">
            <h2 className="text-lg font-semibold text-white border-b-2 border-white pb-2 mb-2">More</h2>
            {[
                ['Link 9', '/dashboard'],
                ['Link 10', '/team'],
                ['Link 11', '/projects'],
                ['Link 12', '/reports'],
              ].map(([title, url]) => (
                <a key={title} href={url} className="block hover:underline text-white hover:text-white ease-in-out duration-200">{title}</a>
              ))}
            </nav>
            <nav className="p-[pad] col-span-1">

            </nav>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
