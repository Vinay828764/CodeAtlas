import React from "react";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  // form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <main className="flex h-screen items-center justify-center ">
        <div id="">
          <div className="modal-box w-96 border rounded-md p-7 shadow-lg">
            <form action="" onSubmit={handleSubmit(onSubmit)} method="dialog">
              <a
                href="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                X
              </a>
              <h3 className="font-bold text-2xl py-2 ">Signup</h3>
              <div>
                <div>
                <label htmlFor="" className="font-bold text-xl">
                  Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="enter your name"
                  className="w-80 px-2 py-1"
                  {...register("name", { required: true  })}
                />
                 {errors.name && <span className="text-red-500">This field is required</span>}
                </div>
                <br /> <br />
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
                  {...register("password", { required: true  })}

                />
                 {errors.password && <span className="text-red-500">This field is required</span>}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button
                  href="/"
                  className="btn btn-outline my-5 px-2 py-0 lg:py-2 lg:px-4 duration-300 rounded-md cursor-pointer min-h-2 h-10"
                >
                  Signup
                </button>
                <p>
                  Have Account?
                  <button
                    className="text-blue-500 px-2 cursor-pointer underline"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Signup;
