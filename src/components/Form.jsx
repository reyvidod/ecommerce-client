export const LoginForm = () => {
  return (
    <section className="h-screen bg-stone-200">
      <div className="h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
              Login with your
              <br />
              <span className="text-red-900">Bodimaji Account</span>
              <br />
            </h1>
            <h1 className="text-5xl md:text-3xl xl:text-3xl font-regular tracking-tight mb-12">
              Welcome back
            </h1>
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                  placeholder="Username"
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>

              <button
                type="submit"
                className="inline-block px-7 py-3 bg-red-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-red-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign in
              </button>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>

              <a
                class="px-7 py-3 bg-white text-black font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Continue with Google
              </a>

              <div class="py-3 flex items-center justify-between pb-6">
                <p class="mb-0 mr-2">Don't have an account?</p>
                <button
                  type="button"
                  class="inline-block px-6 py-2 border-2 border-red-600 text-red-900 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export const RegisterForm = () => {
  return (
    <section className="h-screen bg-stone-200">
      <div className="h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
              Create Your
              <br />
              <span className="text-red-900">Bodimaji Account</span>
              <br />
            </h1>
            <h1 className="text-5xl md:text-3xl xl:text-3xl font-regular tracking-tight mb-12">
              Be the part of Bodimaji
            </h1>
            <form>
              <div className="mb-6">
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                    placeholder="Name"
                  />
                </div>
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                  placeholder="Confirm Password"
                />
              </div>

              <button
                type="submit"
                className="inline-block px-7 py-3 bg-red-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-red-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Register
              </button>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>

              <a
                class="px-7 py-3 bg-white text-black font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Continue with Google
              </a>

              <div class="py-3 flex items-center justify-between pb-6">
                <p class="mb-0 mr-2">Already have an account?</p>
                <button
                  type="button"
                  class="inline-block px-6 py-2 border-2 border-red-600 text-red-900 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
