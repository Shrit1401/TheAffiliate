import { type ClassValue, clsx } from "clsx";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleError = async (err: any) => {
  console.log("ShritCodeError: ", err);
  const errorMessage =
    err.message || String(err) || "An unexpected error occurred";

  toast.error(errorMessage, {
    style: {
      background: "#333",
      color: "#fff",
    },
  });
};
