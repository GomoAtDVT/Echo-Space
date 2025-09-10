export default function TrendingCarousel({worldNews}) {
  return (
    <>
      <div className="carousel carousel-center rounded-box max-w-md w-90 h-full  space-x-4 p-4">
      {worldNews.length === 0 ? 
        (<><div className="carousel-item w-60 h-30 flex flex-col">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            className="rounded-box w-full h-full object-cover"
          />
          <p className="font-bold">Title</p>
          <p className="text-sm">Description</p>
        </div>
        <div className="carousel-item w-60 h-30 flex flex-col">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            className="rounded-box w-full h-full object-cover"
          />
          <p className="font-bold">Title</p>
          <p className="text-sm">Description</p>
        </div>
        <div className="carousel-item w-60 h-30 flex flex-col">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            className="rounded-box w-full h-full object-cover"
          />
          <p className="font-bold">Title</p>
          <p className="text-sm">Description</p>
        </div>
        <div className="carousel-item w-60 h-30 flex flex-col">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            className="rounded-box w-full h-full object-cover"
          />
          <p className="font-bold">Title</p>
          <p className="text-sm">Description</p>
        </div>
        <div className="carousel-item w-60 h-30 flex flex-col">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            className="rounded-box w-full h-full object-cover"
          />
          <p className="font-bold">Title</p>
          <p className="text-sm">Description</p>
        </div>
        <div className="carousel-item w-60 h-30 flex flex-col">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            className="rounded-box w-full h-full object-cover"
          />
          <p className="font-bold">Title</p>
          <p className="text-sm">Description</p>
        </div>
        <div className="carousel-item w-60 h-30 flex flex-col">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            className="rounded-box w-full h-full object-cover"
          />
          <p className="font-bold">Title</p>
          <p className="text-sm">Description</p>
        {/* </div> */}
      </div></>)
      : 
        // <div  className="carousel carousel-center rounded-box max-w-md w-90 h-20  space-x-4 p-4">
          worldNews.map((blog , indx) => (
        <div key={indx} className="carousel-item w-60 h-30 flex flex-col">
          <img
            src={blog.image || "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"}
            className="rounded-box w-90 h-20 object-cover"
          />
          <p className="font-bold truncate w-50">{blog.title}</p>
          <p className="text-sm truncate w-50">{blog.summary}</p>
      </div>)
    )
    
  }
   </div>
    </>
  );
}
