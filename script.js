async function Data() {
    try {

        const display = document.querySelector(".jokes");
        const types = document.getElementById("Type");
        const types2 = types.value;

        const category = document.getElementById("joke");
        const category2 = category.value;
        let url = ``

        if (types2 === "Any" && category2 !== "None") {
            console.log("test 1");
             url = `https://v2.jokeapi.dev/joke/${category2}`;
            
        }
        else if (category2 === "None" && types2 !== "Any") {
            console.log("test 2")
           url = `https://v2.jokeapi.dev/joke/Any?type=${types2}`

        }
        else if (category2 !=="None" && types2 !=="Any") {
            console.log("test 3")
            url = `https://v2.jokeapi.dev/joke/${category2}?type=${types2}`
        }

        else if (category2 === "None" && types2 === "Any") {
            console.log("test 4")
            url = `https://v2.jokeapi.dev/joke/Any`

        }

        const response = await fetch(url);
        const data = await response.json();
        console.log(data.type);
        console.log(category2 + "here we check category");


        if (types2 === "Any") {
            display.innerHTML = `${data.setup} <br> ${data.delivery}`;

        }
        else {
            
            if (data.type === "single") {
                display.innerHTML = `${data.joke}`;
            }
            else if (data.type === "twopart") {
                display.innerHTML = `${data.setup} <br> ${data.delivery} `;
            }
            else {
                display.innerHTML = `OOPS !! Unidentified type of Joke please Try again`
            }
        }

        // if(types2==="Single" && data.type==="single" && data.joke){
        //     display.innerHTML= `${data.joke}`;
        // }
        // else if(types2==="twopart" && data.type==="twopart" && data.setup && data.delivery){
        //     display.innerHTML= `${data.setup} <br> ${data.delivery} `;
        // }
        // else{
        //     display.innerHTML="Sorry , Joke format doesn't exist or Unavailable"
        // }

    }

    catch (error) {
        alert("Try Again !!");
    }

}

document.querySelector("button").addEventListener("click", function () {
    Data();
})

