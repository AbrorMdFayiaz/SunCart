"use client";
import { authClient } from "@/app/lib/auth-client";
import { Button, Card, Form, Input, Label, TextField } from "@heroui/react";
import { router } from "better-auth/api";
import { createAuthClient } from "better-auth/react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FaSun } from "react-icons/fa";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "" },
  });
  const onSubmit = async (formHookData) => {
    // react hook form
    console.log(formHookData , "ab")


    // better auth
    const  { data, error } = await authClient.signIn.email({
        email:formHookData.email, // user email address
        password:formHookData.password, // user password -> min 8 characters by default
        callbackURL: "/products" // A URL to redirect to after the user verifies their email (optional)
    }, 
);




  };

  const googleSignInHandler = async () => {
    const authClient = createAuthClient();
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data, "google sign in data");
  };


  return (
    <div className=''>
            <Card className="mx-auto max-w-md text-center">
      <Card.Header className='space-y-5 pb-5'>
        {/* logo icon */}
        <div className='mx-auto p-3.5 rounded-2xl bg-linear-to-br from-orange-300 to-violet-600 w-fit text-white'><FaSun className='text-3xl'/></div>
        {/*  */}
        <Card.Title className='text-3xl font-black'>Welcome Back</Card.Title>
        <Card.Description>Sign in to your SunCart account to continue</Card.Description>
      </Card.Header>
        <Form onSubmit={handleSubmit(onSubmit)} className="text-left">
          <Card.Content>
            <div className="flex flex-col gap-4 ">
              {/* email */}
              <TextField name="email" type="email">
                <Label>Email Address</Label>
                <Input
                  className=""
                  placeholder="email@example.com"
                  variant="secondary"
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs" role="warning">
                    {errors.email.message}
                  </p>
                )}
              </TextField>
              {/* password */}
              <TextField name="password" type="password">
                <Label>Password</Label>
                <Input
                  placeholder="password"
                  variant="secondary"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must contain at least 8 characters",
                    },

                    maxLength: {
                      value: 20,
                      message: "Password cannot exceed 64 characters",
                    },

                    validate: {
                      uppercase: (value) =>
                        /[A-Z]/.test(value) ||
                        "Password must contain at least one uppercase letter",

                      number: (value) =>
                        /\d/.test(value) ||
                        "Password must contain at least one number",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs" role="warning">
                    {errors.password.message}
                  </p>
                )}
              </TextField>
            </div>
          </Card.Content>
          <Card.Footer className="mt-4 flex flex-col gap-2">
            <Button
              className="w-full rounded-2xl bg-linear-to-br from-orange-300 to-violet-600 border-none"
              type="submit"
            >
              Sign In
            </Button>
            <div className="divider text-xs text-gray-400 font-bold">
              OR CONTINUE WITH
            </div>
          </Card.Footer>
        </Form>
            <button onClick={()=>googleSignInHandler()} className="btn bg-white text-black border-[#e5e5e5] rounded-2xl w-full hover:bg-base-300">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Continue with Google
            </button>
            <h1 className="text-sm pt-2">
              Don't have an account?
              <Link href={"/signup"} className="text-orange-500 font-semibold">
                {" "}
                Regester here
              </Link>
            </h1>
    </Card>
    </div>
  )
}

export default page
