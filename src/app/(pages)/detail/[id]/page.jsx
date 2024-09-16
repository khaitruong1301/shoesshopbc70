import { getProductByIdAction } from '@/app/actions/service/productApi';
import React from 'react'
import Image from 'next/image';
const Detail = async (props) => { 
    //props param của server component
    const {params} = props;
    const prodDetail = await getProductByIdAction(params.id);
    console.log('data',prodDetail);
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-3'>
                <Image width={500} height={500} style={{width:'100%', height:'auto'}} crossOrigin="anonymous" quality={100}  src={prodDetail.image} alt={prodDetail.alias} className='w-100'  />
            </div>
            <div className='col-md-8'>
                <h3>{prodDetail.name}</h3>
                <p>{prodDetail.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Detail;