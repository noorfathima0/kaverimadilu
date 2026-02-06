import "./style/Products.css";
import blocks from "../assets/blocks.jpg";
import cubes from "../assets/cubes.jpg";
import powder from "../assets/powder.jpg";

const products = [
  {
    name: "Jaggery Blocks",
    desc: "Pure traditional solid jaggery made from fresh sugarcane.",
    img: blocks
  },
  {
    name: "Jaggery Cubes",
    desc: "Perfectly shaped cubes for daily use and easy storage.",
    img: cubes
  },
  {
    name: "Jaggery Powder",
    desc: "Natural powdered jaggery for quick mixing and cooking.",
    img: powder
  }
];

export default function Products() {
  return (
    <section id="products" className="products">
      <div className="products-container">

        <h2>Our Products</h2>

        <div className="product-grid">
          {products.map((item, index) => (
            <div className="product-card" key={index}>
              <div 
                className="product-img" 
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>

              <div className="product-content">
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}