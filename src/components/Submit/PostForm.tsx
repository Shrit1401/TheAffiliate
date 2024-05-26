"use client";

import { handleError } from "@/lib/utils";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaDollarSign } from "react-icons/fa6";
import { PostSchemaPrompts, Categories } from "../../../types";
import Image from "next/image";
import { uploadImage } from "@/lib/upload";
import { insertPost } from "@/lib/posts.actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const PostForm = () => {
  const router = useRouter();
  const [imageFile, setImageFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PostSchemaPrompts>({
    defaultValues: {
      title: "",
      summary: "",
      category: "",
      description: "",
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
      if (!imageFile) throw new Error("No image selected");
      let imageUrl: string | undefined = await uploadImage(
        imageFile,
        fields.title
      );
      if (!imageUrl) throw new Error("Image upload failed");
      const post = { ...fields, imageUrl };
      let res = await insertPost({
        imageUrl: post.imageUrl,
        title: post.title,
        summary: post.summary,
        category: post.category,
        description: post.description,
        price: post.price,
        url: post.url,
      });
      toast.success("Post submitted successfully");

      router.push(`/posts/${res![0].id}`);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
        <div className="flex flex-col gap-5 text-white">
          <input
            className="input input-bordered"
            placeholder="Enter Title"
            type="text"
            {...register("title", { required: "Title is required" })}
          />
          {imageFile && (
            <div className="flex justify-center">
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Uploaded"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}
          <input
            className="file-input file-input-bordered"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />

          {errors.title && (
            <span className="badge badge-error">{errors.title.message}</span>
          )}
          <input
            className="input input-bordered"
            placeholder="Summarize your post in one sentence."
            type="text"
            {...register("summary", { required: "Summary is required" })}
          />
          {errors.summary && (
            <span className="badge badge-error">{errors.summary.message}</span>
          )}
          <select
            className="select select-bordered"
            {...register("category", { required: "Category is required" })}
            defaultValue=""
          >
            <option value="" disabled>
              Select Category
            </option>
            {Categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <span className="badge badge-error">{errors.category.message}</span>
          )}
          <input
            className="input input-bordered"
            placeholder="Enter Description"
            type="text"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <span className="badge badge-error">
              {errors.description.message}
            </span>
          )}
          <label className="input input-bordered flex items-center gap-2">
            <FaDollarSign />
            <input
              placeholder="Enter Price"
              type="text"
              {...register("price", { required: "Price is required" })}
            />
          </label>
          {errors.price && (
            <span className="badge badge-error">{errors.price.message}</span>
          )}
          <input
            className="input input-bordered"
            placeholder="Enter URL"
            type="text"
            {...register("url", { required: "URL is required" })}
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
            <Image src="/images/arrow.svg" width={16} height={16} alt="arrow" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
