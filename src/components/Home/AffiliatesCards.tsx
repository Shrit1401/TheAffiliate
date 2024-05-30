"use client";
import React, { useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import Card from "../Global/Card";
import { Categories, PostPrompts } from "../../../types";
import { getAllPosts } from "@/lib/posts.actions";
import { handleError } from "@/lib/utils";
import ReactPaginate from "react-paginate";
import toast from "react-hot-toast";

function Items({ currentItems }: { currentItems: PostPrompts[] }) {
  return (
    <>
      {currentItems &&
        currentItems.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            title={post.title}
            summary={post.summary}
            imageUrl={post.imageUrl!}
            upvotes={post.upvotes! || 0}
            price={post.price}
            url={post.url}
          />
        ))}
    </>
  );
}

const AffiliatesCards = () => {
  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = React.useState(0);

  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    []
  );
  const [search, setSearch] = React.useState("");

  const [posts, setPosts] = React.useState<PostPrompts[]>([]);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = posts!.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getAllPosts().catch((error) => handleError(error));
      if (selectedCategories.length > 0) {
        const filteredPosts = posts!.filter((post) =>
          selectedCategories.includes(post.category)
        );
        setPosts(filteredPosts);
        return;
      }
      setPosts(posts as PostPrompts[]);
    };

    const searchPost = async () => {
      const posts = await getAllPosts();
      const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
      if (selectedCategories.length > 0) {
        const categoryFilteredPosts = filteredPosts.filter((post) =>
          selectedCategories.includes(post.category)
        );
        setPosts(categoryFilteredPosts);
        return;
      }
      setPosts(filteredPosts);
    };

    // fetchPosts();
    search.length > 0 ? searchPost() : fetchPosts();
  }, [selectedCategories, search, setPosts]);

  const filterSampleCategories = () => {
    toast.error("We are working on this feature!", {
      icon: "🚧",
      style: {
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <div>
      <div className="flex w-full flex-col md:flex-row gap-5 justify-between px-4">
        <label className="input input-bordered flex items-center md:w-96  md:mx-4 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            className="grow"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search An Affiliate..."
          />
        </label>

        <button onClick={filterSampleCategories} className="btn btn-primary">
          <FaFilter className="invert" />
          Filter Categories
        </button>
        {/* <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-primary m-1">
            <FaFilter className="invert" />
            Filter Categories
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Categories.map((category) => (
              <li key={category}>
                <a href="#" className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => {
                      setSelectedCategories((prev) =>
                        prev.includes(category)
                          ? prev.filter((item) => item !== category)
                          : [...prev, category]
                      );
                    }}
                  />
                  <label htmlFor={category}>{category}</label>
                </a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
      {posts.length === 0 ? (
        <div className="flex justify-center items-center gap-4 h-40">
          <span className="loading loading-spinner loading-md" />
          <p className="text-2xl font-bold">Loading...</p>
        </div>
      ) : (
        <div className="pagination">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-10 p-5 md:p-7 lg:p-10">
            <Items currentItems={currentItems} />
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </div>
      )}
    </div>
  );
};

export default AffiliatesCards;
