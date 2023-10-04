import { AiFillEye } from "react-icons/ai";
import { FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const NewsCard = ({ card }) => {
  const { _id, rating, total_view, author, image_url, title, details } = card;
  return (
    <div className="border border-gray-300 my-8">
      <div className="flex justify-between items-center bg-[#F3F3F3]  px-4">
        <div className="flex justify-between items-center gap-2">
          <img
            className="w-[80px] h-[80px] rounded-full"
            src={author.img}
            alt="Movie"
          />

          <div className="card-body">
            <h2 className="card-title">{author.name}</h2>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-5">
          <FaBookmark className="text-2xl" />
          <FaShareAlt className="text-2xl" />
        </div>
      </div>
      {/* cards */}
      <div className="card w-full bg-base-100">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <figure>
            <img className="w-full my-5" src={image_url} alt="Shoes" />
          </figure>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link
                to={`/news-details/${_id}`}
                className="text-blue-500 font-bold"
              >
                Read More..
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
          <hr className="mt-10"></hr>
          <div className="flex justify-between items-center my-5">
            <div className="flex gap-2">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
              <p>{rating.number}</p>
            </div>
            <div className="flex items-center gap-2">
              <AiFillEye />
              <p>{total_view}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
