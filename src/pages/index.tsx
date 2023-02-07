import { type NextPage } from "next";
import Head from "next/head";
import { useId, useState } from "react";
import { AuthShowcase } from "../components/auth-showcase";
import { api } from "../utils/api";
import {MantineProvider, Avatar, Group, Button, Text, Rating, Blockquote } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

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
        
        <header className="header px-6 py-3 shadow">
          <div className="container mx-auto grid grid-cols-12 gap-6">
            <a href="#" className="col-span-2 hover:bg-white/25 border-4 border-white rounded-lg ease-in-out duration-200 block p-1 pt-2 text-primary1">
              <ArrowPathIcon className="h-8 w-8 -mt-1 ml-4 text-primary1 inline-block mr-2"/>
              <span className="p-1 pt-0.5 inline-block text-lg text-primary1 bold">WASTE SWAP</span>
            </a>
            {/* <form className="col-span-7 block relative">
              <input type="text" placeholder="Search products" className="border-4 block bg-white p-3 rounded-3xl mr-4 w-full" />
              <input type="submit" value="Go" className="rounded-3xl absolute top-1 right-1 bg-mustard p-3 px-4 text-white font-bold"/>
            </form> */}
            <nav className="col-span-10 text-right p-1 pt-2">
              <AuthShowcase/>
            </nav>
          </div>
        </header>

        <div className="welcome bg-primary1">
          <div className="overlay">
            <div className="p-32 px-4 md:px-56 block container mx-auto">
              <h1 className="text-5xl mb-8 font-light leading-normal text-center text-white">Welcome to <span className="text-white">Waste Swap</span>, a place to <span className="text-white inline-block">Buy</span> something, <span className="text-white inline-block">Sell</span> everything or <span className="text-white inline-block">Swap</span> anything.</h1>
              {/* <p className="text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida molestie libero, ac mattis ante mollis pharetra. Phasellus ornare ipsum venenatis diam lobortis, sit amet imperdiet nisi hendrerit. Duis et dui aliquam, pulvinar justo sed, congue elit. Nulla laoreet lobortis neque eu lacinia. Donec id tellus condimentum, aliquet turpis ac, imperdiet nulla. Integer porta tristique efficitur. Aliquam luctus nisl sed ligula pellentesque condimentum. </p> */}
              <div className="relative">
                <form className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
                  <label className="text-3xl mb-2 col-span-2 p-6 font-bold text-white text-center">Search:</label>
                  <input type="text" className="col-span-10 shadow-xl p-6 rounded-md rounded-full border" placeholder="eg. wooden panels" />
                  {/* <input type="submit" value="Go" className="bg-teal text-white border border-teal font-bold px-8 py-4 block rounded-md ease-in-out duration-200 hover:bg-white hover:text-teal" /> */}
                  <button className="hero-search rounded-full bg-primary3 w-20 h-20 absolute"><MagnifyingGlassIcon className="h-8 w-8 ml-2 text-white inline-block mr-2"/></button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Hero */}
        {/* <section className="hero mb-36 bg-primary3">
          <div className="container mx-auto">
            <div className="p-24 relative">
              <form className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <h1 className="text-3xl mb-2 col-span-2 p-6 font-bold text-white">Search:</h1>
                <input type="text" className="col-span-10 shadow-xl p-6 rounded-md rounded-r-full border" placeholder="eg. wooden panels" />
                <button className="hero-search rounded-full bg-primary1 w-20 h-20 absolute"><MagnifyingGlassIcon className="h-8 w-8 ml-2 text-white inline-block mr-2"/></button>
              </form>
            </div>
          </div>
        </section> */}

        {/* Main content wrapper */}
        <div className="container mx-auto shadow-2xl bg-white p-8">
          <h2 className="text-4xl text-primary6 font-light text-center">How does it work?</h2>
          <section className="three-points p-0 grid grid-cols-2 md:grid-cols-5 gap-8 mb-28">
            <div></div>
            <a href="#" className="point-1 block bg-primary1 text-white hover:underline hover:text-white/70 ease-in-out duration-200 hover:scale-105 shadow-xl border-b-8 border-primary3 rounded-full">
              {/* <UserPlusIcon className="h-8 w-8 ml-2 text-white inline-block mr-2"/> */}
              <span className="p-4 block rounded-y ">Sign up</span>
            </a>
            <a href="#" className="point-2 block bg-primary1 text-white hover:underline hover:text-white/70 ease-in-out duration-200 hover:scale-105 shadow-xl border-b-8 border-primary3 rounded-full">
              {/* <ArrowPathIcon className="h-8 w-8 ml-2 text-white inline-block mr-2"/> */}
              <span className="p-4 block rounded-y ">Swap</span>
            </a>
            <a href="#" className="point-3 block bg-primary1 text-white hover:underline hover:text-white/70 ease-in-out duration-200 hover:scale-105 shadow-xl border-b-8 border-primary3 rounded-full">
              {/* <ShoppingCartIcon className="h-8 w-8 ml-2 text-white inline-block mr-2"/> */}
              <span className="p-4 block rounded-y ">Shop</span>
            </a>
            <div></div>
          </section>

          {/* Featured products */}
          {/* <h2 className="text-2xl px-8 py-4 border-b-4 border-teal font-semibold">Featured products</h2>
          <section className="p-8 grid grid-cols-2 md:grid-cols-6 gap-8">
            {[
              ['images/pipes-8106__340.jpg', 'Featured product 1', '/products/product1'],
              ['images/wetsuits-59112__340.jpg', 'Featured product 2', '/products/product2'],
              ['images/building-rubble-2816007__340.jpg', 'Featured product 3', '/products/product3'],
              ['images/scrapyard-352912__340.jpg', 'Featured product 4', '/products/product4'],
              ['images/lines-2147453__340.jpg', 'Featured product 5', '/products/product5'],
              ['images/green-72772__340.jpg', 'Featured product 6', '/products/product6'],
            ].map(([featuredImage, featuredProduct, featuredUrl]) => (
              <a key={featuredProduct} href={featuredUrl} className="rounded-b-md shadow-xl block hover:underline hover:text-teal ease-in-out duration-200 hover:scale-105">
                <img className="" src={featuredImage} alt={featuredProduct} />
                <span className="p-4 block rounded-y ">{featuredProduct}</span>
              </a>
            ))}
          </section> */}

          {/* Looking to sell products? */}

          <section className="hero grid grid-cols-1 md:grid-cols-2 gap-8 border-4 border-teal p-8 rounded-xl mb-16">
            <div className="col-span-1">
              <img src="images/pallets.jpg" alt="Looking to sell?" />
            </div>
            <div>
            <h2 className="text-4xl text-primary6 font-light mb-2">What do customer think?</h2>
            <Blockquote color="teal" cite="- Mark Smith" className="text-lg text-primary6 font-light ">
              Life is like an npm install - you never know what you are going to get.
            </Blockquote>

            {/* <p className="text-xl text-primary6 font-light mb-4">Lorraine. No, Doc. That's good advice, Marty. I, I don't know. Good morning, Mom.</p> */}
            <p className="text-xl text-primary6 font-light mb-4">Donec consectetur gravida est at vestibulum. Cras pellentesque purus a pretium venenatis. Fusce accumsan tempor orci, nec egestas nunc. Integer accumsan dictum dui, sit amet facilisis eros congue eget. Duis accumsan dolor orci, vitae vestibulum enim euismod et.</p>
            <p className="text-xl text-primary6 font-light mb-4">Praesent egestas odio vulputate tempus auctor. Fusce scelerisque, massa eu elementum dignissim, urna lectus molestie odio, et varius mauris quam in leo. Pellentesque vehicula tempor nulla, a semper metus consectetur quis. Nunc ut dignissim eros, sed euismod eros. </p>
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

          {/* Discover more */}
          <h2 className="text-4xl text-primary6  font-light text-center">Recent additions</h2>
          <section className="p-8 grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
            {[
              ['images/lines-2147453__340.jpg', 'Discover Product 1', '/products/product1'],
              ['images/wetsuits-59112__340.jpg', 'Discover Product 2', '/products/product2'],
              ['images/green-72772__340.jpg', 'Discover Product 3', '/products/product3'],
              ['images/scrapyard-352912__340.jpg', 'Discover Product 4', '/products/product4'],
              ['images/building-rubble-2816007__340.jpg', 'Discover Product 5', '/products/product5'],
              ['images/pipes-8106__340.jpg', 'Discover Product 6', '/products/product6'],
            ].map(([discoverImage, discoverProduct, discoverUrl]) => (
              <a key={discoverProduct} href={discoverUrl} className="rounded-b-md shadow-xl block hover:underline hover:text-teal ease-in-out duration-200 hover:scale-105">
                <img className="" src={discoverImage} alt={discoverProduct} />
                <span className="p-4 block rounded-y ">{discoverProduct}</span>
              </a>
            ))}
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-0 bg-primary1">
          <div className="container mx-auto p-8 grid grid-cols-2 md:grid-cols-6 gap-8">
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
