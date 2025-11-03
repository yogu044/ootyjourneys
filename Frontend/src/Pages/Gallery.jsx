import { useState, useEffect } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import "../css/gallery.css";

export default function Gallery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://picsum.photos/v2/list?limit=30")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    768: 2,
    500: 1,
  };

  return (
    <div className="gallery-wrapper">
      <div className="gallery-header">
        <h2>Our Projects</h2>
        <p>The pictures of Customers</p>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="gallery-grid"
        columnClassName="gallery-grid_column"
      >
        {data.map((f) => (
          <div className="gallery-item" key={f.id}>
            <img src={f.download_url} alt={f.author} />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
