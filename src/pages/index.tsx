import { type NextPage } from "next";
import Head from "next/head";
import { useId, useState } from "react";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const id = useId();
  const [emailInput, setInput] = useState('');
  const [hasError, setHasError] = useState(false);

  const mutation = trpc.organisation.create.useMutation({
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
        <header className="bg-teal px-6 py-8 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <a href="#" className="logo w-60 h-26 overflow-hidden block bg-white rounded-xl border-8 border-light-blue hover:bg-teal indent-96 ease-in-out duration-200">Logo</a>
          <nav className="text-right p-6">
            <a href="#" className="bg-white px-4 py-2 rounded-md mr-4 hover:bg-light-blue hover:text-white ease-in-out duration-200">Sign up</a>
            <a href="#" className="bg-white px-4 py-2 rounded-md mr-4 hover:bg-light-blue hover:text-white ease-in-out duration-200">Log in</a>
            <input type="text" placeholder="Search products" className="bg-white px-4 py-2 rounded-md mr-4" />
          </nav>
        </header>

        {/* Hero */}
        <section className="hero bg-white m-6 px-6 py-8 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6 rounded-md">
          <div className="p-6">
            <h1 className="text-4xl mb-6 font-semibold">Hero header</h1>
            <p className="text-xl mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida molestie libero, ac mattis ante mollis pharetra. Phasellus ornare ipsum venenatis diam lobortis, sit amet imperdiet nisi hendrerit. Duis et dui aliquam, pulvinar justo sed, congue elit. Nulla laoreet lobortis neque eu lacinia. Donec id tellus condimentum, aliquet turpis ac, imperdiet nulla. Integer porta tristique efficitur. Aliquam luctus nisl sed ligula pellentesque condimentum. </p>
          </div>
          <div className="p-6">
            <h1 className="text-4xl mb-6">Search:</h1>
            <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <input type="text" className="col-span-3 shadow-xl px-6 py-4 block rounded-xl border" placeholder="eg. wooden panels" />
              <input type="submit" value="Go" className="bg-teal text-white border border-teal hover:bg-white font-bold shadow-xl px-6 py-4 block rounded-xl border ease-in-out duration-200 hover:text-teal" />
            </form>
          </div>
        </section>

        {/* Featured products */}
        <h2 className="text-2xl ml-6 mr-6 p-6 border-b-4 border-teal font-semibold">Featured products</h2>
        <section className="m-6 px-6 py-8 grid grid-cols-2 md:grid-cols-6 gap-6 mt-0">
          {[
            ['images/pipes-8106__340.jpg', 'Featured product 1', '/products/product1'],
            ['images/wetsuits-59112__340.jpg', 'Featured product 2', '/products/product2'],
            ['images/building-rubble-2816007__340.jpg', 'Featured product 3', '/products/product3'],
            ['images/scrapyard-352912__340.jpg', 'Featured product 4', '/products/product4'],
            ['images/lines-2147453__340.jpg', 'Featured product 5', '/products/product5'],
            ['images/green-72772__340.jpg', 'Featured product 6', '/products/product6'],
          ].map(([featuredImage, featuredProduct, featuredUrl]) => (
            <a href={featuredUrl} className="rounded-b-xl shadow-xl block hover:underline hover:text-teal ease-in-out duration-200 hover:scale-105">
              <img className="" src={featuredImage} alt={featuredProduct} />
              <span className="p-6 block rounded-y ">{featuredProduct}</span>
            </a>
          ))}
        </section>

        {/* Looking to sell products? */}

        <section className="hero bg-white m-6 px-6 py-8 shadow-xl grid grid-cols-1 md:grid-cols-4 gap-6 rounded-md">
          <div className="p-6 col-span-1">
            <img src="images/tube-898660__340.jpg" alt="Looking to sell?" />
          </div>
          <div className="p-6 col-span-2">
            <h2 className="text-4xl mb-6 font-semibold">Looking to sell?</h2>
            <p className="text-xl mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida molestie libero, ac mattis ante mollis pharetra. Phasellus ornare ipsum venenatis diam lobortis, sit amet imperdiet nisi hendrerit. Duis et dui aliquam, pulvinar justo sed, congue elit. Nulla laoreet lobortis neque eu lacinia. Donec id tellus condimentum, aliquet turpis ac, imperdiet nulla. Integer porta tristique efficitur. Aliquam luctus nisl sed ligula pellentesque condimentum. </p>
          </div>
          <div className="p-6 col-span-1">
            <h2 className="text-4xl mb-6 font-semibold">&nbsp;</h2>
            <button className="w-3/5 rounded bg-light-blue text-white p-2 px-6 mb-6 hover:bg-dark-blue ease-in-out duration-200">Sign up</button>
            <button className="w-3/5 rounded bg-light-green text-white p-2 px-6 hover:bg-dark-green ease-in-out duration-200">Log in</button>
          </div>
        </section>

        <h2 className="text-2xl ml-6 mr-6 p-6 border-b-4 border-teal font-semibold">Discover more</h2>
        <section className="m-6 px-6 py-8 grid grid-cols-2 md:grid-cols-6 gap-6 mt-0">
          {[
            ['images/lines-2147453__340.jpg', 'Discover Product 1', '/products/product1'],
            ['images/wetsuits-59112__340.jpg', 'Discover Product 2', '/products/product2'],
            ['images/green-72772__340.jpg', 'Discover Product 3', '/products/product3'],
            ['images/scrapyard-352912__340.jpg', 'Discover Product 4', '/products/product4'],
            ['images/building-rubble-2816007__340.jpg', 'Discover Product 5', '/products/product5'],
            ['images/pipes-8106__340.jpg', 'Discover Product 6', '/products/product6'],
          ].map(([discoverImage, discoverProduct, discoverUrl]) => (
            <a href={discoverUrl} className="rounded-b-xl shadow-xl block hover:underline hover:text-teal ease-in-out duration-200 hover:scale-105">
              <img className="" src={discoverImage} alt={discoverProduct} />
              <span className="p-6 block rounded-y ">{discoverProduct}</span>
            </a>
          ))}
        </section>
        <footer className="px-6 py-8 shadow grid grid-cols-1 md:grid-cols-3 gap-6 border-t-4 bg-teal">
          <nav className="px-6">
            {[
              ['Link 1', '/dashboard'],
              ['Link 2', '/team'],
              ['Link 2', '/projects'],
              ['Link 4', '/reports'],
            ].map(([title, url]) => (
              <a href={url} className="block hover:underline hover:text-teal ease-in-out duration-200">{title}</a>
            ))}
          </nav>
          <nav className="px-6">
            {[
              ['Link 1', '/dashboard'],
              ['Link 2', '/team'],
              ['Link 2', '/projects'],
              ['Link 4', '/reports'],
            ].map(([title, url]) => (
              <a href={url} className="block hover:underline hover:text-teal ease-in-out duration-200">{title}</a>
            ))}
          </nav>
          <nav className="px-6">
            {[
              ['Link 1', '/dashboard'],
              ['Link 2', '/team'],
              ['Link 2', '/projects'],
              ['Link 4', '/reports'],
            ].map(([title, url]) => (
              <a href={url} className="block hover:underline hover:text-teal ease-in-out duration-200">{title}</a>
            ))}
          </nav>
        </footer>
      </main>


      {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <div className="flex items-center justify-center h-screen">
          <div className="container">
            <div className="h-96 bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
              <div className="text-center">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  Low Impact<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-600"> Living</span>
                </h2>
                <h3 className='text-teal text-xl md:text-3xl mt-10'>Coming Soon</h3>
                {
                  !mutation.data?.data.email ?
                    hasError ?
                      <div className="flex p-4 mt-7 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Info</span>
                        <div>
                          Looks like you have already used {emailInput}...
                        </div>
                      </div>
                      :
                      <div>
                        <div>
                          <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                          <input id={id} value={emailInput} onInput={e => setInput((e as any).target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="myemail@email.com" required />
                        </div>
                        <button onClick={registerBusiness} disabled={mutation.isLoading} className="disabled:cursor-not-allowed relative inline-flex items-center justify-center p-0.5 mt-7 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                          <span className="relative text-gray-900 px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                            {mutation.isLoading ? 'Saving...' : 'Request early access!'}
                          </span>
                        </button>
                      </div> :
                    <div>
                      <p className="mt-7">
                        At launch an email will be sent to:
                      </p>
                      <p className="m-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-600">{mutation.data?.data.email}</p>
                    </div>
                }
              </div>
            </div>
          </div>
        </div>
      </main> */}
    </>
  );
};

export default Home;
