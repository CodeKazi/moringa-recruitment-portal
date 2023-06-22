import React from 'react'

const ResetPassword = () => {
  return (
    <div className='relative w-[1440px] h-[1024px] bg-white flex flex-col'>
        <div className='bg-[#4f3f5f] absolute box-border flex flex-col items-start px-[100px] pt-3 pb-[100px] gap-10 w-[1440px] h-[80px] left-0 top-0 border-b-1 border-b-solid border-b-black border-b-opacity-25'>
            <div className="bg-[#8d8d8d] w-[100px] h-[80px] bg-[url('/public/next.svg')] flex-none order-none self-stretch grow-0"/>
        </div>
        <div className='bg-[#565656] relative flex flex-col items-center justify-center box-border w-[790px] h-[655px] left-[325px] top-[211px] border-solid border-1 border-[#101f3c]'>
            <div className="bg-[#484848] w-[333px] h-[130px] bg-[url('/public/next.svg')]"/>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <p className='h-10 text-3xl font-semibold tracking-normal text-left text-[#101F3CCC]'>
                Reset Password
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
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div>
                        <div className='h-10 text-sm font-light leading-5 tracking-normal text-left text-black'>
                            We will send you an email with intructions on how to reset your password
                        </div>
                    </div>

                    <div>
                    <button
                        type="submit"
                        className="flex w-48 h-10 justify-center rounded-md bg-[#101f3c] px-3 py-1.5 text-sm font-semibold leading-6 text-white"
                    >
                        Email Me
                    </button>
                    </div>
                </form>
            </div> 
        </div>
    </div>
  )
}

export default ResetPassword