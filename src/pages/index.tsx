import { type NextPage } from "next";
import Head from "next/head";
import { useId, useState } from "react";
import { AuthShowcase } from "../components/auth-showcase";
import { api } from "../utils/api";
import { 
  ArrowPathIcon,
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
      <main>
        {/* Header */}
        <header className="header bg-teal px-6 py-3 shadow-xl ">
          <div className="container mx-auto grid grid-cols-12 gap-6">
            <a href="#" className="col-span-2 hover:bg-white/25 border-4 border-white rounded-lg ease-in-out duration-200 block p-1 pt-2">
              {/* <img src="images/icons/synchronize.svg" title="synchronize.svg" className="h-8 w-8 mr-4 text-center float-left ml-5" /> */}
              <ArrowPathIcon className="h-8 w-8 -mt-1 ml-4 text-white inline-block mr-2"/>
              <span className="text-white p-1 pt-0.5 inline-block text-lg">WASTE SWAP</span>
            </a>
            <form className="col-span-7 block relative">
              <input type="text" placeholder="Search products" className="border-4 block bg-white p-3 rounded-3xl mr-4 w-full" />
              <input type="submit" value="Go" className="rounded-3xl absolute top-1 right-1 bg-orange p-3 px-4 text-white font-bold"/>
            </form>
            <nav className="col-span-3 text-right p-1 pt-2">
              <AuthShowcase/>
            </nav>
          </div>
        </header>

        <div className="welcome container mx-auto">
            <div className="p-24">
              <h1 className="text-6xl mb-8 font-bold">Hero header</h1>
              <p className="text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida molestie libero, ac mattis ante mollis pharetra. Phasellus ornare ipsum venenatis diam lobortis, sit amet imperdiet nisi hendrerit. Duis et dui aliquam, pulvinar justo sed, congue elit. Nulla laoreet lobortis neque eu lacinia. Donec id tellus condimentum, aliquet turpis ac, imperdiet nulla. Integer porta tristique efficitur. Aliquam luctus nisl sed ligula pellentesque condimentum. </p>
            </div>
        </div>

        {/* Hero */}
        <section className="hero">
          {/* <img src="images/hero.jpg" title="synchronize.svg" className="w-full fixed top-0 left-0 right-0 z-0" /> */}
          <div className="container mx-auto">
            {/* <div className="z-1">
              <h1 className="text-4xl mb-8 font-semibold">Hero header</h1>
              <p className="text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida molestie libero, ac mattis ante mollis pharetra. Phasellus ornare ipsum venenatis diam lobortis, sit amet imperdiet nisi hendrerit. Duis et dui aliquam, pulvinar justo sed, congue elit. Nulla laoreet lobortis neque eu lacinia. Donec id tellus condimentum, aliquet turpis ac, imperdiet nulla. Integer porta tristique efficitur. Aliquam luctus nisl sed ligula pellentesque condimentum. </p>
            </div> */}
            <div className="bg-white p-24 backdrop-opacity-80">
              {/* <h1 className="text-4xl mb-8 mtext-white invisible">Search:</h1> */}
              <form className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <input type="text" className="col-span-3 shadow-xl px-6 py-4 block rounded-md border" placeholder="eg. wooden panels" />
                <input type="submit" value="Go" className="bg-teal text-white border border-teal font-bold px-8 py-4 block rounded-md ease-in-out duration-200 hover:bg-white hover:text-teal" />
              </form>
            </div>
          </div>
        </section>


        {/* Main content wrapper */}
        <div className="container mx-auto">

          {/* Featured products */}
          <h2 className="text-2xl px-8 py-4 border-b-4 border-teal font-semibold">Featured products</h2>
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
          </section>

          {/* Looking to sell products? */}
          <section className="hero bg-white my-8 p-8 shadow-xl grid grid-cols-1 md:grid-cols-4 gap-8 rounded-md">
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
          </section>

          {/* Discover more */}
          <h2 className="text-2xl px-8 py-4 border-b-4 border-teal font-semibold">Discover more</h2>
          <section className="p-8 grid grid-cols-2 md:grid-cols-6 gap-8">
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
        <footer className="mt-0 bg-teal">
          <div className="container mx-auto p-8 grid grid-cols-2 md:grid-cols-6 gap-8 ">
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
