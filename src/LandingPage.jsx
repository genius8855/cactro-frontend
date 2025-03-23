import React from 'react'
// import { ClerkProvider } from '@clerk/clerk-react'
// import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/clerk-react";

function LandingPage() {

    // const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

    // if (!PUBLISHABLE_KEY) {
    //     throw new Error('Add your Clerk Publishable Key to the .env file')
    // }
    return (
        <div className="bg-[#F4EDE4] min-h-screen font-sans">
            {/* Navbar */}
            <nav className="flex flex-wrap justify-between items-center px-6 py-4">
                <div className="flex items-center space-x-4">
                    <img src="/Slack_logo.svg" alt="Slack Logo" className="h-6" />
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-700">Product</a>
                        <a href="#" className="text-gray-700">Enterprise</a>
                        <a href="#" className="text-gray-700">Resources</a>
                        <a href="#" className="text-gray-700">Pricing</a>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-gray-700">Sign in</button>
                    <button className="border px-4 py-2 rounded-lg">Talk to Sales</button>
                    <button className="bg-purple-700 text-white px-4 py-2 rounded-lg">Try for Free</button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="flex flex-col md:flex-row text-left mt-12 px-6 gap-12">
                <div className='px-6 md:px-32 py-10 text-center md:text-left'>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Slack is where the future works</h1>
                    <p className="text-gray-700 mt-4 max-w-2xl mx-auto md:mx-0">
                        Transform the way you work with one place for everyone and everything you need to get stuff done.
                    </p>
                    <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                        <button className="bg-purple-700 text-white px-6 py-3 rounded-lg">Try for Free</button>
                        <button className="border px-6 py-3 rounded-lg flex items-center">
                            <img src="/google_logo.svg" alt="Google" className="h-5 mr-2" /> Sign Up with Google
                        </button>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src='/slack_channels.jpg' alt='Slack Channels' className='w-72 md:w-96' />
                </div>
            </header>

            {/* Logos Section */}
            <section className="flex flex-wrap justify-center gap-6 mt-12 px-6">
                <img src="/adobe_logo.svg" alt="Adobe Company Logo" className="h-8" />
                <img src="/accenture_logo.svg" alt="Accenture Official Logo" className="h-8" />
                <img src="/microsoft_logo.svg" alt="Microsoft Corporation Logo" className="h-8" />
                <img src="/walmart_logo.svg" alt="Walmart Global Logo" className="h-8" />
                <img src="/paypal_logo.svg" alt="PayPal Payment Services Logo" className="h-8" />
            </section>

            {/* Future Section */}
            <section className="flex flex-col md:flex-row items-center justify-center mt-16 px-6">
                <div className="w-full md:w-1/2">
                    <iframe width="100%" height="250" className="md:h-80"
                        src="https://www.youtube.com/embed/gGGuS_7llzo?si=xlV4LqAWzxev_uik"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Now is your moment to build a better tomorrow</h2>
                    <p className="text-gray-700 mt-4">
                        We've seen what the future can be. Now it's time to decide what it will be.
                    </p>
                    <button className="mt-6 text-purple-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 border-2 border-purple-700">
                        Watch Video
                    </button>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="mt-12 bg-white py-6 text-center text-gray-700">
                <p>© 2025 Slack. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default LandingPage