import React from 'react'

const AdminTemplate = ({children}) => {
  return (
    <div>
        <div style={{display:'flex'}}>
            <div style={{width:'25%',minHeight:'100vh',background:'#000' }}>
                Logo
            </div>
            <div style={{width:'75%',minHeight:'100vh'}}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default AdminTemplate