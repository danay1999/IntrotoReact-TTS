export default function Greeting(props){
    return(
        props.name? (
            <div>
                <h1>Hey {props.name}!</h1>
            </div>
        ) : (
            <div>
                <h1>Hey,</h1>
            </div>
        )  
    )
}
