import Image from "next/image";
import styles from "./page.module.css";
import { getAllProductAction } from "./actions/service/productApi";
import Link from "next/link";


//server component 
const Home = async () => {
  const data = await getAllProductAction();
  return (
    <div className="container">
      <h3>Shoes app</h3>
      {data?.map((prod) => {
        return <h3 key={prod.id}>
          {prod.name}
          <Link href={`/detail/${prod.id}`} className="btn btn-success">Xem chi tiết</Link>

        </h3>

      })}

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
