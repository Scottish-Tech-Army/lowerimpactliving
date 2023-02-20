import { type NextPage } from "next";
import Head from "next/head";
import { useId, useState } from "react";
import { AuthShowcase } from "../components/auth-showcase";
import { api } from "../utils/api";

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
      </Head>
      <main className="bg-teal/25">

        {/* Header */}
        
        <header className="header bg-white shadow-md">
          <div className="container px-6 py-3 mx-auto grid grid-cols-12 gap-6">
            <div className="col-span-6">
              <a href="#" className="float-left logo hover:bg-teal/25 border-4 border-white rounded-lg ease-in-out duration-200 block p-2 mt-1 text-primary1">
                <ArrowPathIcon className="h-8 w-8 -mt-1 text-primary1 inline-block mr-2"/>
                <span className=" p-1 pt-0.5 inline-block text-lg text-darkteal bold">Waste Swap</span>
              </a>
            </div>
            <nav className="float-right text-right p-1 pt-3 col-span-6">
              <AuthShowcase/>
            </nav>
          </div>
        </header>

        {/* <div className="container mx-auto shadow-2xl bg-white p-24"> */}
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
        {/* </div> */}

        <div className="hero bg-primary1/70 text-center shadow-xl">
          <div className=" max-w-[2220px] mx-auto">
            <div className="overlay p-24 px-4 md:px-56 block container mx-auto">
              {/* <h1 className="welcome text-5xl mb-8 font-light leading-normal text-center text-white">Welcome to <span className="text-white">Waste Swap</span>, a place to <span className="text-white inline-block">Buy</span> something, <span className="text-white inline-block">Sell</span> everything or <span className="text-white inline-block">Swap</span> anything.</h1> */}
              {/* <p className="text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida molestie libero, ac mattis ante mollis pharetra. Phasellus ornare ipsum venenatis diam lobortis, sit amet imperdiet nisi hendrerit. Duis et dui aliquam, pulvinar justo sed, congue elit. Nulla laoreet lobortis neque eu lacinia. Donec id tellus condimentum, aliquet turpis ac, imperdiet nulla. Integer porta tristique efficitur. Aliquam luctus nisl sed ligula pellentesque condimentum. </p> */}
              
              {/* <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div> */}
              
              <div className="relative">
                <form className="main-search grid grid-cols-1 md:grid-cols-12 relative">
                  <label className="text-3xl col-span-3 p-6 font-bold text-white text-center bg-white/20">Search:</label>
                  <input type="text" className="text-3xl col-span-9 shadow-xl p-6 border" placeholder="eg. wooden panels" />
                  {/* <input type="submit" value="Go" className="bg-teal text-white border border-teal font-bold px-8 py-4 block rounded-md ease-in-out duration-200 hover:bg-white hover:text-teal" /> */}
                  <button className="hero-search rounded-full bg-primary1 absolute hover:bg-primary1/80 transition-all"><MagnifyingGlassIcon className="h-8 w-8 ml-2 text-white inline-block mr-2"/></button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Main content wrapper */}
        <div className="container mx-auto shadow-2xl bg-white p-24">
          <h2 className="text-4xl mb-0 md:mb-8 text-primary6 font-medium text-center">What is Waste Swap?</h2>
          <p className="text-xl">Donec consectetur gravida est at vestibulum. Cras pellentesque purus a pretium venenatis. Fusce accumsan tempor orci, nec egestas nunc. Integer accumsan dictum dui, sit amet facilisis eros congue eget. Duis accumsan dolor orci, vitae vestibulum enim euismod et.</p>

        </div>

        <div className="container mx-auto shadow-2xl bg-white">
          <div className="bg-primary3/20 p-24">
            <h2 className="text-4xl mb-0 md:mb-8 text-primary6 font-medium text-center">How does it work?</h2>
            <section className="three-points md:grid md:grid-cols-3 md:gap-8 md:place-content-evenly max-w-full md:max-w-full lg:max-w-4xl mx-auto">
                <a href="#" className="point-1 scale-75 md:scale-100 overflow-hidden -mb-6 md:mb-0 mx-auto text-white ease-in-out duration-200 hover:scale-105 shadow-xl border-8 border-primary1/70 rounded-full">
                  {/* <UserPlusIcon className="h-8 w-8 ml-2 text-white inline-block mr-2"/> */}
                  <span className="text-xl font-medium px-1 py-2 bg-primary1/70 text-white absolute bottom-0 left-0 right-0">Register</span>
                </a>
                <a href="#" className="point-2 scale-75 md:scale-100 overflow-hidden -mb-6 md:mb-0 mx-auto text-white ease-in-out duration-200 hover:scale-105 shadow-xl border-8 border-primary1/70 rounded-full">
                  {/* <ArrowPathIcon className="h-8 w-8 ml-2 text-white inline-block mr-2"/> */}
                  <span className="text-xl font-medium px-1 py-2 bg-primary1/70 text-white absolute bottom-0 left-0 right-0">Swap</span>
                </a>
                <a href="#" className="point-3 scale-75 md:scale-100 overflow-hidden -mb-6 md:mb-0 mx-auto text-white ease-in-out duration-200 hover:scale-105 shadow-xl border-8 border-primary1/70 rounded-full">
                  {/* <ShoppingCartIcon className="h-8 w-8 ml-2 text-white inline-block mr-2"/> */}
                  <span className="text-xl font-medium px-1 py-2 bg-primary1/70 text-white absolute bottom-0 left-0 right-0">Shop</span>
                </a>
            </section>
          </div>

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

          {/* Looking to sell products? */}

          <section className="grid grid-cols-1 md:grid-cols-2">
            <div className="hero-story p-56">
            </div>
            <div className="p-24">
              <h2 className="text-4xl text-primary6 font-medium mb-8">What's the story behind Waste Swap?</h2>
              <p className="text-xl text-primary6 font-light mb-4">Nulla at pharetra lacus, eget efficitur orci. Integer ut neque in tellus rhoncus commodo sit amet quis orci.</p>
              <p className="text-xl text-primary6 font-light mb-4">Donec consectetur gravida est at vestibulum. Cras pellentesque purus a pretium venenatis. Fusce accumsan tempor orci, nec egestas nunc. Integer accumsan dictum dui, sit amet facilisis eros congue eget. Duis accumsan dolor orci, vitae vestibulum enim euismod et.</p>
              <p className="text-xl text-primary6 font-light mb-4">Praesent egestas odio vulputate tempus auctor. Fusce scelerisque, massa eu elementum dignissim, urna lectus molestie odio, et varius mauris quam in leo. Pellentesque vehicula tempor nulla, a semper metus consectetur quis. Nunc ut dignissim eros, sed euismod eros. </p>
            </div>
          </section>

          {/* Discover more */}
          <div className="bg-primary3/10 p-24">
          <h2 className="text-4xl text-primary6 font-light text-center mb-12">What sort of thing is available?</h2>
            <section className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                ['images/lines-2147453__340.jpg', 'Lots of cable drums', '/products/product1'],
                ['images/wetsuits-59112__340.jpg', 'Various sized wetsuits', '/products/product2'],
                ['images/green-72772__340.jpg', 'Many drainage pipes', '/products/product3'],
                ['images/scrapyard-352912__340.jpg', 'Sections of fencing', '/products/product4'],
                // ['images/building-rubble-2816007__340.jpg', 'Discover Product 5', '/products/product5'],
                // ['images/pipes-8106__340.jpg', 'Discover Product 6', '/products/product6'],
              ].map(([discoverImage, discoverProduct, discoverUrl]) => (
                <a key={discoverProduct} href={discoverUrl} className="rounded-b-md shadow-xl block hover:underline hover:text-darkteal ease-in-out duration-200 hover:scale-105">
                  <img className="" src={discoverImage} alt={discoverProduct} />
                  <span className="p-4 block rounded-y text-center">{discoverProduct}</span>
                </a>
              ))}
            </section>
          </div>

          {/* Ready to sign up? */}
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

          {/* <section className="hero bg-white my-8 p-8 shadow-xl grid grid-cols-1 md:grid-cols-4 gap-8 rounded-md">
            <div className="col-span-1">
              <img src="images/tube-898660__340.jpg" alt="Looking to sell?" />
            </div>
            <div className="col-span-2">
              <h2 className="text-4xl mb-8 font-semibold">Looking to sell?</h2>
              <p className="text-xl mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida molestie libero, ac mattis ante mollis pharetra. Phasellus ornare ipsum venenatis diam lobortis, sit amet imperdiet nisi hendrerit. Duis et dui aliquam, pulvinar justo sed, congue elit. Nulla laoreet lobortis neque eu lacinia. Donec id tellus condimentum, aliquet turpis ac, imperdiet nulla. Integer porta tristique efficitur. Aliquam luctus nisl sed ligula pellentesque condimentum. </p>
            </div>
            <div className="col-span-1">
              <h2 className="text-4xl mb-6 font-semibold invisible">&nbsp;</h2>
              <button className="w-3/5 bg-dark-blue text-white border border-dark-blue hover:bg-white font-bold px-8 py-4 block rounded-md border ease-in-out duration-200 hover:text-dark-blue mb-4">Sign up</button>
              <button className="w-3/5 bg-dark-green text-white border border-dark-green hover:bg-white font-bold px-8 py-4 block rounded-md border ease-in-out duration-200 hover:text-dark-blue ">Log in</button>
            </div>
          </section> */}
        </div>

        {/* Footer */}
        <footer className="mt-0 bg-white ">
          <div className="container mx-auto px-24 py-8 grid grid-cols-2 md:grid-cols-3 text-darkteal gap-12">
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
            {/* <nav className="col-span-1">

            </nav> */}
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
