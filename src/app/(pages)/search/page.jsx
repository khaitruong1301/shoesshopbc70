import { getProductByKeywordAction } from '@/app/actions/service/productApi';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Search = async (props) => {
    const keyword = props.searchParams.keyword || '';
    const data = await getProductByKeywordAction(keyword);
    console.log('keyword',data)
  return (
    <div className='container'>

        <h3>Kết quả tìm kiếm ({data.length})</h3>
        <div className='row'>
            {data.map((prod)=>{
                return <div className='col-md-4 mt-2' key={prod.id}>
                    <div className='card'>
                        <Image src={prod.image} alt={prod.alias} quality={100} crossOrigin={'anonymous'} width={500} height={500} style={{width:'100%', height:'auto'}} />
                        <div className='card-body'>
                            <h3>{prod.name}</h3>
                            <p>{prod.price}</p>
                            <Link href={`/detail/${prod.id}`} className='btn btn-success'>Detail</Link>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Search