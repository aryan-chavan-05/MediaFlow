import {useState , useEffect} from "react"

function App(){
    const [message , setMessage] = useState("Connecting......")
    useEffect(() => {
        fetch("http://localhost:5000/api/connection")
        .then((response) => response.json())
        .then((data) => {
            setMessage(data.message)
        })
        .catch((err) => {
            console.error(err)
            setMessage("Backend connection Failed")
        })
    }, [])
    return(
        <div className="min-h-screen flex item-center justify-center">
            <div className="text-center">
            <h1 className="text-4xl font-bold">
                MediaFlow-Project
            </h1>
            <p className="text-lg">
                {message}
            </p>
            </div>
        </div>
    )
}

export default App;