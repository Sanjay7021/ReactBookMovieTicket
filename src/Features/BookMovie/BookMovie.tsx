import { Link, useParams } from "react-router-dom";

const  BookMovie =  ({moviesData,availBox,setAvailable}) => {  
    const params = useParams();
    
    // let element;
    // const chair = (count:any) => {
    //     for(let i=0;i<count;i++){
    //         element = <input type="checkbox" id={i} name={i} value={count} />
    //     }
    // }
    const occupiSeat=(e)=>{
        const {type , name, id} = e.target;
        console.log(id-1,type);
        setAvailable(availBox.map((item,key)=>{
            if(key == id-1){
             availBox[key].packed= true;
             return [...availBox[key]];
            }
        }))
      
        // console.log(availBox);
    }
    return (
        <div>
             {
            moviesData.map((item,key)=> {
                if(item.id == params.id){
                    return (
                    
                        <div>
                        <div key={key}>
                            <strong>{item.name}</strong>
                        </div>
                            {/* {chair(item.totalTickets)}
                            {element} */}
                        </div>
                )
                }
            })
            
         }
         <div style={{display:"flex", width:'20%', justifyContent:"space-between"}}>

         {
            availBox.map((item,key)=>{
                return <div >
                    {item.seat}<input type="checkbox" id={item.seat} name="packed" value={availBox.packed} onChange={occupiSeat}/>
                </div>
            })
         }
         </div>
        </div>
    )
}
export default BookMovie;