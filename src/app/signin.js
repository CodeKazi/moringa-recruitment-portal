import React from 'react'

const SignIn = () => {
  return (
    <div className='relative w-[1440px] h-[1024px] bg-white flex flex-col'>
        <div className='absolute box-border flex flex-col items-start px-0 py-[165px] gap-10 w-[1440px] h-[80px] left-0 top-0 bg-[#ffffff] border-b-1 border-b-solid border-b-black border-b-opacity-25'>
            <div className="w-[100px] h-[80px] bg-[url('/public/next.svg')] flex-none order-none self-stretch grow-0"/>
        </div>
        <div className='absolute box-border w-[790px] h-[655px] left-[325px] top-[211px] border-solid border-1 border-[#101f3c]'>
            <div className=" w-[333px] h-[130px] left-[553px] top-[230px] bg-[url('/public/next.svg')]"/>
            <form action='.' method='post' className='absolute inline-flex flex-col items-center justify-center'>
                <label htmlFor="none"
                    className='w-[118px] h-[44px] left-[450px] top-[360px] not-italic font-semibold text-3xl leading-[44px] text-[#101f3ccc] font-["inter"]'
                >
                    Sign In
                </label>
                <label htmlFor="email"
                    className=' w-[32px] h-[6px] not-italic font-normal text-xl  leading-6 text-[#000000bf] font-["inter"]'
                >
                    Email Address
                </label>
                <input type="email"
                    id="email"
                    name="email"
                    className='box-border w-[540px] h-[12px] rounded flex-none order-1 flex-grow-0 border-[#101f3ccc]'
                ></input>
                <label htmlFor="password"
                    className='w-[32px] h-[6px] not-italic font-normal text-xl leading-6  text-[#000000bf] font-["inter"]'
                >
                    Password
                </label>
                <input type="password"
                    id="password"
                    name="password"
                    className='box-border w-[540px] h-[12px] rounded flex-none order-1 flex-grow-0 border-[#101f3ccc]'
                ></input>
                <button type="submit"
                    className='flex flex-col justify-center items-center w-48 h-16 left-[250px] top-[660px] px-10 py-[6px] bg-gray-900 rounded gap-10'
                >
                    <p class='w-[76px] h-[26px] not-italic font-medium text-xl leading-6 text-white  font-["inter"]'>
                        Login
                    </p>
                    {/* Login */}
                </button>
            </form>
            <a href='/signup'
                className=' w-[32px] h-[5px] left-[450px] top-[724px] not-italic font-normal text-base leading-5 text-black underline font-["inter"]'
            >
                Forgot Password?
            </a>
        </div>
        <div className=' box-border flex flex-col items-start px-0 py-[165px] gap-10 w-[1440px] h-[80px] left-0 top-0 bg-[#ffffff] border-b-1 border-b-solid border-b-black border-b-opacity-25'>
            <div className="w-[100px] h-[80px] bg-[url('/public/next.svg')] flex-none order-none self-stretch grow-0"/>
        </div>
    </div>
  )
}

export default SignIn

//not-italic font-semibold text-[36px]