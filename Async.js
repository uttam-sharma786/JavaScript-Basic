(async function (){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/3");
        // console.log(response);

        const json = await response.json();
        console.log(json);

        if(json.userId == 1 && json.userId == 2 && json.completed == true){
            console.log("ok");
        } else {
            console.log("Not yet");
        }


    } catch(error){
    console.log(error);
}
}) ();