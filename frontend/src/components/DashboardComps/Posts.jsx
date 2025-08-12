import { useNavigate } from "react-router-dom";

export default function Posts() {
    const navigate = useNavigate();
  return (
    <>
      <section className="py-6 mx-5 flex flex-row justify-between gap-2 border-b-2 border-gray-700">
        <div className="flex flex-col gap-2">
          <p className="font-bold">Ever changing languages of the world</p>
          <p className="line-clamp-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero porro ratione doloribus quisquam delectus et nihil illo, fugiat dolorum iusto unde nemo dolores blanditiis sunt reiciendis libero, magni sit assumenda?</p>
        </div>
        <div className="avatar" onClick={() => navigate("/detailed-blog")}>
  <div className="w-32 rounded">
    <img src="https://img.daisyui.com/images/profile/demo/superperson@192.webp" />
  </div>
</div>
      </section>
    </>
  );
}
