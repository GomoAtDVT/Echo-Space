import Header from "../../components/Main_header/Header";
import ReturnHeader from "../../components/Main_header/ReturnHeader";

export default function CreateBlog() {
    return(
        <>
        <ReturnHeader />
        <section>
            <form action="">
          <div className="flex flex-col px-4 mt-4">
            <label htmlFor="title">Title</label>
            <input
              className="w-full bg-gray-100 dark:bg-gray-700 mt-2 p-2 py-3 rounded"
              type="text"
              name="title"
              placeholder="Enter your post title"
            />
          </div>
          <div className="flex flex-col px-4 mt-6">
            <label htmlFor="message">message</label>
            <textarea
              className="w-full bg-gray-100 dark:bg-gray-700 mt-2 p-2 py-3 rounded"
              type="type"
              name="message"
              placeholder="Enter your message"
            ></textarea>
            <button className="bg-blue-400 mt-10 text-white py-2 px-4 rounded-xl">
              Publish
            </button>
          </div>
        </form>
        </section>
        </>
    )
}