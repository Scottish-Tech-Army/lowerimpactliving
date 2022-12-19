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
        <title>Low Impact Living</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <div className="flex items-center justify-center h-screen">
          <div className="container">
            <div className="h-96 bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
              <div className="text-center">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  Low Impact<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-600"> Living</span>
                </h2>
                <h3 className='text-xl md:text-3xl mt-10'>Coming Soonish</h3>
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
      </main>
    </>
  );
};

export default Home;
