import type {
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from "next"
import { getCsrfToken } from "next-auth/react"
import Link from 'next/link'

export default function SignIn({
    csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (

        <div className="container mx-auto">
            <div className="flex just justify-between pt-5 pb-8"><img src='../images/logo-lil.png' /> <button type="submit" className="btn-primary ring-6 ring-black-500 w-min">Login</button></div>
            <div className="flex justify-center align-center p-8 min-h-screen align-middle">
                <div className="content-card bg-white px-20 py-12 w-5/12 h-min z-10 m-5">
                    <form method="post" action="/api/auth/callback/credentials" className="flex ...">
                        <div className="flex flex-wrap">
                            <div className="basis-full pb-3">
                                <h1 className="font-bold">Start Listing</h1>
                            </div>
                            <div className="basis-full">
                                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                                <label className="w-full block">
                                    Email
                                </label>
                                <input name="username" type="text" className="input-field w-full" />
                            </div>
                            <div className="basis-full pt-4">
                                <label className="w-full block">
                                    Name
                                </label>
                                <input name="name" type="password" className="input-field w-full" />
                            </div>
                            <div className="basis-full pt-8">
                                <label className="w-full block">
                                    Password
                                </label>
                                <input name="password" type="password" className="input-field w-full" />
                            </div>
                            <div className="basis-full pt-4">
                                <label className="w-full block">
                                    Confirm password
                                </label>
                                <input name="password" type="password" className="input-field w-full" />
                            </div>
                            <div className="basis-full pt-8">
                                <button type="submit" className="btn-primary w-full">Sign up</button>
                            </div>
                            <div className="basis-full pt-3 justify-center">
                                <Link className="flex justify-center w-full link-primary" href="/about">Already have account?</Link>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="bg-cover bg-no-repeat bg-cente min-w-100 p-9 w-96 content-card" style={{ "background": "url('../images/available-1.jpg')", "marginLeft": "-80px", "height": "600px", "width": "600px" }}></div>
            </div>

        </div>

    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    }
}