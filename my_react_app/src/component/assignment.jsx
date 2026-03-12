import myIMAGE from "../component/hello.jpg"
function New() {
    return (

        <div>
            <h1>REACT 1ST Assignment</h1>
            <img src="hello.jpg" alt="" class="photo" height="200px" width="200px" />
            <ul>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, tempore quasi officia a adipisci et.
                </li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi similique, pariatur voluptate id
                    necessitatibus aspernatur!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque accusantium tenetur quas
                    praesentium ducimus?</li>
            </ul>
            <button onClick="{callfun}">click me</button>
        </div>
    )
}

function callfun() {
    alert("function called")
}
export default New