const ViewTheater = ({availBox}) => {
    return (

        <>
            <div style={{backgroundColor:'black',color:'white',width:'70%',marginLeft:'300px',height:'200px',textAlign:'center'}}>
                    Screen
            </div>
            <div style={{display:"flex",gap:"10px",margin:"5px",justifyContent:"center"}}>
           {
            availBox.map((item)=> {
                return <div style={{ backgroundColor : item.packed==true ? 'red':'gray',width: '15%',height:'100px',marginTop:'100px'}}>
                    {item.packed == true ? "Booked" : "Empty"}
                    
                </div>
            })
           }
        </div>
        
        </>

        
    )
}
export default ViewTheater;