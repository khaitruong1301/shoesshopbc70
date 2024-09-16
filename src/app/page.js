import Image from "next/image";
import styles from "./page.module.css";
import { getAllProductAction } from "./actions/service/productApi";
import Link from "next/link";
export const metadata = {
  title: "Shoes App - Home",
  description: "Explore our wide range of shoes with the best prices and quality.",
  openGraph: {
    title: "Shoes App - Home",
    description: "Explore our wide range of shoes with the best prices and quality.",
    url: "https://shoesshopbc70.vercel.app",
    images: [
      {
        url: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
        width: 800,
        height: 600,
        alt: "Shoes App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoes App - Home",
    description: "Explore our wide range of shoes with the best prices and quality.",
    images: ["https://apistore.cybersoft.edu.vn/images/van-old-school.png"],
  },
  jsonLd:{
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Shoes App",
    "url": "https://yourwebsite.com",
    "description": "Explore our wide range of shoes with the best prices and quality.",
    "image": "https://yourwebsite.com/images/og-image.jpg",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://yourwebsite.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
}
    


//server component 
const Home = async () => {
  const data = await getAllProductAction();
  return (
    <div className="container">
      <h3>Shoes app</h3>
      <div className="row">
        {data?.map((prod) => {
          return <div className="col-4 mt-2" key={prod.id}>
              <div className="card">
                <Image src={prod.image} alt={prod.name} crossOrigin="anonymous" width={500} height={500} className="w-100" />
                <div className="card-body">
                    <h3>  {prod.name}</h3>
                    <p>{prod.price}</p>
                    <p>{prod.shortDescription}</p>
                    <Link className="btn btn-success" href={`/detail/${prod.id}`}>Xem chi tiết</Link>
                </div>
              </div>
          </div> 
        })}
      </div>
    </div>
  )
}
export default Home


//Cách làm sai : vì script gọi api lấy data thực hiện tại client
// export default function Home() {
//   const [arrProduct, setArrProduct] = useState([]);

//   useEffect(() => {
//     getAllProduct();
//   },[])
//   return (
//   const getAllProduct = async() => {
//     const res = await fetch('/api/product');
//     const data = await res.json();
//     console.log(data);
//     setArrProduct(data.content);
//   }
//     <div className={styles.page}>
//         <h3>Shoes shop</h3>
//         {arrProduct.map((prod)=>{
//           return <h3 key={prod.id}>
//               {prod.name}
//           </h3>
//         })}
//     </div>
//   );
// }
