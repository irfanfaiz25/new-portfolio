import Index from "../Index";
import RentalImage from "../../../img/projects/relasi1.png";

const Blog = () => {
  return (
    <Index>
      <div className="grid grid-cols-2">
        <div className="h-[400px] bg-secondary-bg dark:bg-dark-secondary-bg transition-all duration-500 hover:-translate-y-1">
          <div className="overflow-hidden">
            <img
              className="w-full h-52 object-cover"
              src={RentalImage}
              alt="foto blog"
            />
          </div>
          <div className="p-3">
            <p className="text-xs font-medium text-secondary-text dark:text-dark-secondary-text">
              May, 31 2020
            </p>
            <h3 className="mt-1 text-xl font-bold text-black dark:text-white">
              Make Your Web Application
            </h3>
            <p className="mt-2 text-xs font-medium text-main-text dark:text-dark-main-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia
              vero, laudantium eligendi debitis impedit dolore praesentium
              voluptatibus laborum quam! Illo laudantium pariatur corrupti
              laboriosam molestiae blanditiis exercitationem minus nesciunt?
            </p>
            <p className="mt-2 text-xs font-medium text-secondary-text dark:text-dark-secondary-text cursor-pointer">
              Read more
            </p>
          </div>
        </div>
      </div>
    </Index>
  );
};

export default Blog;
