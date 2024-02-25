import React from "react";
import backGround from "../assets/fondoMarket.png";
import ecoLogo from "../assets/ECOMARKET.png";
import { PiEye, PiEyeClosedDuotone } from "react-icons/pi";

const Register = () => {
  return (
    <div>
      <img
        src={backGround}
        className="absolute object-cover top-0 left-0 bottom-0 leading-5 flex items-center justify-center h-full w-full overflow-hidden"
      />

      <div className=" absolute top-0 left-0 bottom-0 leading-5 flex items-center justify-center h-full w-full overflow-hidden">
        <div className="p-12 bg-lime-50 mx-auto rounded-3xl w-96 drop-shadow-2xl ">
          <div className="mb-7 flex justify-center items-center text-start flex-col ">
            <img
              src={ecoLogo}
              className="object-cover w-36 h-28 "
              alt="logo-ecomarket"
            />
            <h3 class="font-semibold text-2xl text-gray-800">
              Crear nueva cuenta{" "}
            </h3>
            {/* <p class="text-gray-400">
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
            </div>
            <div class="relative">
              <input
                placeholder="Contraseña"
                class="text-sm text-gray-200 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <button
                type="submit"
                class="w-full flex justify-center bg-orange-500  hover:bg-orange-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
              >
                Unirme
              </button>
            </div>
          </div>
          <div className="mt-7 text-center text-gray-300 text-xs">
            <span>
              Copyright © 2024
              <a
                href="https://codepen.io/uidesignhub"
                rel=""
                target="_blank"
                title="Codepen aji"
                className=" ml-3 text-orange-700 hover:text-orange-600 "
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

export default Register;
