import { BackgroundBeams } from "@/components/Global/BackgroundBeams";
import PostForm from "@/components/Submit/PostForm";

const SubmitPage = () => {
  return (
    <main className="mb-8 md:mb-16">
      <BackgroundBeams className="z-[-1]" />
      <div className="text-center h-[20vh] mb-6 flex items-center flex-col justify-center gap-4 md:gap-5">
        <h1 className="heading text">
          Submit Your Affliate
          <br /> Program{" "}
        </h1>
      </div>
      <PostForm />
    </main>
  );
};

export default SubmitPage;
