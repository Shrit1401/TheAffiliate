"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import { FaDollarSign } from "react-icons/fa6";

import { handleError } from "@/lib/utils";
import { uploadImage } from "@/lib/upload";
import { PostSchemaPrompts } from "../../../types";
import Card from "../Global/Card";
import { submitPost } from "@/lib/submits.actions";

const PostForm = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    category: "",
    description: "",
    price: "",
    url: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PostSchemaPrompts>({
    defaultValues: {
      name: "",
      email: "",
      title: "",
      summary: "",
      price: "",
      url: "",
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setImageFile(file);
    }
  };

  const onSubmit: SubmitHandler<PostSchemaPrompts> = async (fields) => {
    try {
      if (
        !fields.price ||
        Number(fields.price) < 0 ||
        Number(fields.price) > 100
      )
        throw new Error("Price must be a positive number");
      if (!imageFile) throw new Error("No image selected");
      const imageUrl = await uploadImage(imageFile, fields.title);
      if (!imageUrl) throw new Error("Image upload failed");

      const post = { ...fields, imageUrl };
      const res = await submitPost(post);
      toast.success("Post submitted successfully, we'll get back to you soon!");
    } catch (error) {
      handleError(error);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center md:flex-row">
      <div className="md:w-1/2 md:m-0 mx-10">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
          <div className="flex flex-col gap-5 text-white">
            <input
              className="input input-bordered"
              placeholder="Enter Your Name"
              type="text"
              {...register("name", { required: "Name is required" })}
              onChange={handleChange}
            />
            {errors.name && (
              <span className="badge badge-error">{errors.name.message}</span>
            )}
            <input
              className="input input-bordered"
              placeholder="Enter Your E-Mail"
              type="email"
              {...register("email", { required: "Email is required" })}
              onChange={handleChange}
            />
            {errors.name && (
              <span className="badge badge-error">{errors.email?.message}</span>
            )}
            <input
              className="input input-bordered"
              placeholder="Enter Title"
              type="text"
              {...register("title", { required: "Title is required" })}
              onChange={handleChange}
            />
            {errors.title && (
              <span className="badge badge-error">{errors.title.message}</span>
            )}
            <input
              className="file-input file-input-bordered"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <input
              className="input input-bordered"
              placeholder="Summarize your post in one sentence."
              type="text"
              {...register("summary", { required: "Summary is required" })}
              onChange={handleChange}
            />
            {errors.summary && (
              <span className="badge badge-error">
                {errors.summary.message}
              </span>
            )}
            <label className="input input-bordered flex items-center w-full gap-2">
              <FaDollarSign />
              <input
                placeholder="Enter Price"
                type="number"
                className="w-full"
                inputMode="numeric"
                {...register("price", { required: "Price is required" })}
                onChange={handleChange}
              />
              <span className="badge badge-neutral w-full py-3 px-0 capitalize m-0">
                add in percentage only
              </span>
            </label>
            {errors.price && (
              <span className="badge badge-error">{errors.price.message}</span>
            )}
            <input
              className="input input-bordered"
              placeholder="Enter URL"
              type="text"
              {...register("url", { required: "URL is required" })}
              onChange={handleChange}
            />
            {errors.url && (
              <span className="badge badge-error">{errors.url.message}</span>
            )}
            <button
              type="submit"
              className="btn btn-primary flex items-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
              <Image
                src="/images/arrow.svg"
                width={16}
                height={16}
                alt="arrow"
              />
            </button>
          </div>
        </form>
      </div>
      <div className="md:w-[25rem] md:block hidden">
        <h1 className="text-white text-2xl mb-5">Preview: </h1>
        <Card
          title={formData.title || "Title"}
          summary={formData.summary || "Summary"}
          imageUrl={
            imageFile ? URL.createObjectURL(imageFile) : "./images/creator.png"
          }
          likes={69}
          price={formData.price + "%" || "-"}
          url="nr"
        />
      </div>
    </div>
  );
};

export default PostForm;
