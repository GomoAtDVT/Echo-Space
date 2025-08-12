export default function Person() {
  return (
    <>
      <section className="flex flex-col items-center justify-center m-5">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
        <article className="flex flex-col items-center">
          <p className="font-bold">Username</p>
          <p className="text-sm text-gray-500">Bio</p>
          <div className="flex flex-row gap-4 text-gray-500">
            <p>123 followers</p>
            <p>45 posts</p>
          </div>
        </article>
      </section>
    </>
  );
}
