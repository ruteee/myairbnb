
function getAcc(){
    let json_rooms;
    const http = new XMLHttpRequest();
    http.open("GET","https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72", true);
    http.send()

    http.onreadystatechange =(e) =>{
        json_rooms = JSON.parse((e.target.responseText));
        console.log(json_rooms[0])
 
        let rooms = []
        for (var i=0; i < json_rooms.length; i++){
            console.log("new json")
            let {photo, property_type, name, price} = json_rooms[i]
            
             div_cards = document.getElementsByClassName("cards");
             console.log(div_cards)
               
            let card_str = `
                <div class="row cards_airbnb">
                    <div class="col-6">
                            <div class="card" style="width: 300px; height: 200px">
                                    <img src=${photo} style="width: 300px; height: 200px" alt="...">
                            </div>
                    </div>
            
                    <div class = "col-6">
                        <sub>${property_type}</sub> 
                        <br>
                        ${name}
                        
                        <p style="text-align:left">$ ${price} /noite</p>
                    </div>
                </div>
                <hr>`

            div_card = document.createElement("div")
            div_card.innerHTML = card_str;

            div_cards[0].appendChild(div_card)
            console.log(div_card)
        }


    }

    
}
