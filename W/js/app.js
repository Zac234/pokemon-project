function pick_torchic(details){
    let first_json= JSON.stringify(first)
    cookies.set(user,first_json)
    cookies.set(user_health, first["health"])

    let computer_json=Json.stringify(fourth)
    cookies.set(computer_selection, fourth_json)
    cookies.set(computer_health,fourth["health"])
}


let first={
    name:"torchic",
    health:25,
    attacks:["scratch","tackle","ember"],
    image:document.getElementById("torchic")
}

let second ={
    name:"Todadile",
    health:25,
    attacks:["scratch", "water gun", "tackle"],
    image: document.getElementById("todadile")
}
let second_json= JSON.stringify(second)
cookies.set(user,second_json)
let third= {
    name: "bulbasaur",
    health:25,
    attacks:[ "vine whip", "tackle", "scratch"],
    image:document.getElementById("bulbasaur")
}
let third_json=JSON.stringify(third)
cookies.set(user,third_json)


let fourth={
    name:"miltank",
    health:25,
    attacks:["rollout", "tackle", "scratch"],
    image:document.getElementById("miltank")
}
let fourth_json=JSON.stringify(fourth)
cookies.set(user,fourth_json)



let cookies
