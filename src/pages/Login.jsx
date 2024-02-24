import React from "react";
import ecoLogo from "../assets/ECOMARKET.png";
import fondoo from "../assets/fondoMarket.png";

const Login = () => {
  return (
    <div>
       <img src={fondoo} className="absolute top-0 left-0 bottom-0 leading-5 flex items-center justify-center h-full w-full overflow-hidden"/>
    
    <div class=" absolute top-0 left-0 bottom-0 leading-5 flex items-center justify-center h-full w-full overflow-hidden">
    
      <div class="p-12 bg-lime-50 mx-auto rounded-3xl w-96 drop-shadow-2xl ">
        <div class="mb-7 flex justify-center items-center">
          <img
            src={ecoLogo}
            className="object-cover w-36 h-28 "
            alt="logo-ecomarket"
          />
          {/* <h3 class="font-semibold text-2xl text-gray-800">Sign In </h3>
          <p class="text-gray-400">
            Don'thave an account?
            <a href="#" class="text-sm text-purple-700 hover:text-purple-700">
              Sign Up
            </a>
          </p> */}
        </div>

        <div class="space-y-6">
          <div class="">
            <input
              class=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
              type=""
              placeholder="Email"
            />
          </div>

          <div class="relative">
            <input
              placeholder="Contraseña"
              class="text-sm text-gray-200 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
            />
            <div class="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5"></div>
          </div>

          <div class="flex items-center justify-between">
            <div class="text-sm ml-auto">
              <a href="#" class="text-orange-700 hover:text-orange-600">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="w-full flex justify-center bg-orange-500  hover:bg-orange-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
            >
              Sign in
            </button>
          </div>
          <div class="flex items-center justify-center space-x-2 my-5">
            <span class="h-px w-16 bg-gray-100"></span>
            <span class="text-gray-300 font-normal">or</span>
            <span class="h-px w-16 bg-gray-100"></span>
          </div>
          <div class="flex justify-center gap-5 w-full ">
            <button
              type="submit"
              class="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500"
            >
              <svg
                class="w-4 mr-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#EA4335"
                  d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                />
                <path
                  fill="#34A853"
                  d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                />
                <path
                  fill="#4A90E2"
                  d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"
                />
              </svg>
              <span>Google</span>
            </button>

            <button
              type="submit"
              class="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500 px-"
            >
              <span>Facebook</span>
            </button>
          </div>
        </div>
        <div class="mt-7 text-center text-gray-300 text-xs">
          <span>
            Copyright © 2024
            <a
              href="https://codepen.io/uidesignhub"
              rel=""
              target="_blank"
              title="Codepen aji"
              class=" ml-3 text-orange-700 hover:text-orange-600 "
            >
              Términos y Condiciones
            </a>
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
