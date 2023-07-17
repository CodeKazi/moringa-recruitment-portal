import React from 'react'

const SignIn = () => {
  return (
    <div className='relative w-full h-[1024px] bg-white flex flex-col'>
        <div className='absolute box-border flex flex-col items-start px-[100px] pt-3 pb-[100px] gap-10 w-[1440px] h-[80px] left-0 top-0 border-b-1 border-b-solid border-b-black border-b-opacity-25'>
            <div className="w-[95px] h-[65px] bg-[url('/assets/moringa0.png')] flex-none order-none self-stretch grow-0"/>
        </div>
        <div className='relative flex flex-col items-center justify-center border max-w-full lg:w-[790px]  h-2/3 lg:h-[655px]  top-[100px] lg:top-[211px] border-solid border-1 border-moringa_blue/25'>
            <div className=" w-[333px] h-[130px] bg-[url('/assets/moringa1.png')]"/>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <p className='w-32 text-4xl font-semibold tracking-normal text-left text-[#101F3CCC]'>
                    Sign In
                </p>
                <form className="space-y-6" action="#" method="POST">
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-moringa_blue sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-moringa_blue sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div>
                    <button
                        type="submit"
                        className="flex w-48 h-10 justify-center rounded-md bg-[#101f3c] px-3 py-1.5 text-sm font-semibold leading-6 text-white"
                    >
                        Sign in
                    </button>
                    </div>
                </form>
            </div> 
            <div className='pt-2'>   
                <a href='/signup'
                    className='w-32 text-base font-normal leading-5 tracking-normal text-left text-black underline'
                >
                    Forgot Password?
                </a>
            </div>
        </div>
    </div>
  )
}

export default SignIn

//not-italic font-semibold text-[36px]