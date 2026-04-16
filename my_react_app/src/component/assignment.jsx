import myIMAGE from "../component/hello.jpg"
function New() {
    return (

        <div>
           
            <button onClick="{callfun}">click me</button>
        </div>
    )
}

function callfun() {
    alert("function called")
}
export default New