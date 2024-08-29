import React from "react";
import { useForm } from "react-hook-form";
function Login() {
  // form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box w-96">
            <form action="" method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <a
                href="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                X
              </a>

              <h3 className="font-bold text-2xl py-2 ">Login</h3>
              <div className="login-form">
                <div>
                <label htmlFor="" className="font-bold text-xl">
                  Email
                </label>
                <br />
                <input
                  type="text"
                  placeholder="enter your email"
                  className="w-80 px-2 py-1"
                  {...register("Email", { required: true  })}
                />
                {errors.Email && <span className="text-red-500">This field is required</span>}
                </div>
                <br /> <br />
                <div>
                <label htmlFor="" className="font-bold text-xl">
                  Password
                </label>
                <br />
                <input
                  type="Password"
                  placeholder="enter Password"
                  className="w-80 px-2 py-1"
                  {...register("Password", { required: true  })}
                />
                {errors.Password && <span className="text-red-500">This field is required</span>}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button
                  href="/"
                  className="btn btn-outline my-5 px-2 py-0 lg:py-2 lg:px-4 duration-300 rounded-md cursor-pointer min-h-2 h-10"
                >
                  Login
                </button>
                <p>
                  Not registered?{" "}
                  <a
                    href="/signup"
                    className="text-blue-500 px-2 underline cursor-pointer"
                  >
                    <span>Signup</span>
                  </a>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
