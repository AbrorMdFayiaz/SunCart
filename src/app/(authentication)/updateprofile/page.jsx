"use client";
import { authClient } from "@/app/lib/auth-client";
import { Button, Card, Form, Input, Label, TextField } from "@heroui/react";
import { router } from "better-auth/api";
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
    console.log(formHookData, "kl");

    // better auth
      await authClient.updateUser({
        image: formHookData.photo,
        name: formHookData.name,
      });
    };

  return (
    <div className="">
      <Card className="mx-auto max-w-md text-center">
        <Card.Header className="space-y-5 pb-5">
          {/* logo icon */}
          <div className="mx-auto p-3.5 rounded-2xl bg-linear-to-br from-orange-300 to-violet-600 w-fit text-white">
            <FaSun className="text-3xl" />
          </div>
          {/*  */}
          <Card.Title className="text-3xl font-black">
            Update Profile Information
          </Card.Title>
          <Card.Description>
            Modify your name and profile image link below.
          </Card.Description>
        </Card.Header>
        <Form onSubmit={handleSubmit(onSubmit)} className="text-left">
          <Card.Content>
            <div className="flex flex-col gap-4 ">
              {/* name */}
              <TextField name="name" type="text">
                <Label>Full Name</Label>
                <Input
                  className=""
                  placeholder="Alex Roy"
                  variant="secondary"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs" role="warning">
                    {errors.name.message}
                  </p>
                )}
              </TextField>
              {/* photo */}
              <TextField name="photo" type="text">
                <Label>Photo URL (Link)</Label>
                <Input
                  className=""
                  placeholder="https://photo.com"
                  variant="secondary"
                  {...register("photo", { required: "Photo Url is required" })}
                />
                {errors.photo && (
                  <p className="text-red-500 text-xs" role="warning">
                    {errors.photo.message}
                  </p>
                )}
              </TextField>
            </div>
          </Card.Content>
          <Card.Footer>
            <section className="mt-4 grid grid-cols-4 gap-2 text-center w-full">
              <Button
                className="col-span-3 w-full rounded-2xl bg-linear-to-br from-orange-300 to-violet-600 border-none"
                type="submit"
              >
                Save Changes
              </Button>
              <Link
                href={"/profile"}
                className="bg-base-200 col-span-1 h-full my-auto rounded-2xl hover:bg-base-300"
              >
                <div className="block my-auto pt-1.5  h-full">Cancel</div>
              </Link>
            </section>
          </Card.Footer>
        </Form>
      </Card>
    </div>
  );
};

export default page;
