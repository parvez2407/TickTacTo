

function Square(props){
    return(<>
    <div
    onClick={props.onClick}
    style={{border:'1px solid',height:'100px',width:'100%',alignItems:'center',display:'flex',justifyContent:'center'}}
    className="div-square">
        <h4>{props.value}</h4>
    </div>
    
    </>)
}
export default Square;