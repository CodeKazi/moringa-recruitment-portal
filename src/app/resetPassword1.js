import React from 'react'

const ResetPassword = () => {
  return (
    <div className='relative w-full h-full lg:h-[1024px] bg-white flex flex-col items-center'>
        <div className='absolute box-border flex flex-col items-start lg:px-[100px] pt-5 lg:pt-3 lg:pb-[100px] gap-10 lg:w-[1440px] lg:h-[80px] lg:left-0 lg:top-0 border-b-1 border-b-solid border-b-black border-b-opacity-25'>
            <div className="w-[95px] h-[65px] bg-[url('/assets/moringa0.png')] flex-none order-none self-stretch grow-0"/>
        </div>
        <div className='relative flex flex-col items-center justify-center border max-w-full lg:w-[790px] h-2/3 lg:h-[655px] top-[100px] lg:top-[211px] border-solid border-1 border-moringa_blue/25'>
            <div className="w-[333px] h-[130px] bg-[url('/assets/moringa1.png')]"/>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <p className='h-10 text-3xl font-semibold tracking-normal text-left text-[#101F3CCC]'>
                    Reset Password
                </p>
                <form className="space-y-6" action="#" method="POST">
                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Enter new password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password1"
                        name="password1"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-moringa_blue sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirm password
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
                        className="flex w-48 h-10 justify-center rounded-md bg-[#101f3c] px-3 py-1.5 text-sm font-semibold leading-6 text-white mb-4"
                    >
                        Reset
                    </button>
                    </div>
                </form>
            </div> 
        </div>
    </div>
  )
}

export default ResetPassword
