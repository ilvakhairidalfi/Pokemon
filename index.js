// let judul = document.getElementById("judul");
// let paragrafAja = document.getElementsByTagName("p")[0];
// paragrafAja.style.backgroundColor = "blue";

// let paragrafAja2 = document.querySelector(".list:nth-child(3)")


// judul.onclick = function(){
//     judul.innerHTML = "berubah";
// }
// judul.onclick = function(){
//     judul.style.backgroundColor = "red";
// }

// function berubah(){
//     console.log("tes");
//     let judul = document.getElementById("judul");
//     judul.style.backgroundColor = "red";
//     judul.innerHTML = "beru\bah";
// }

// judul.addEventListener('click',function(){
//     judul.innerHTML = "masuk";
// });
// judul.addEventListener('click',function(){
//     judul.style.backgroundColor = "red";
// });

// $(".list:nth-child(3)").on('click',function(){
//     $(".list:nth-child(3)").html("ini diubah dari Jquery");
// });

console.log("Hello All");

$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/", 
}).done((res)=>{
    // console.log(res.results);
    let temp="";
    $.each(res.results,function(key,val){
        // literal template
        temp += `<tr>
                    <td>${key+1}</td>
                    <td>${val.name}</td>
                    <td><button class="btn btn-primary" onclick="detailPoke('${val.url}')" data-bs-toggle="modal" data-bs-target="#modalDetailPoke">Detail</button></td>
                </tr>`;
    })
    // console.log(temp);
    $("#tablePoke").html(temp);

}).fail((err)=>{
    console.log(err);
});


function detailPoke(url){
    $.ajax({
        url: url
    }).done((res)=>{
        $(".modal-title").html(res.name);
        // $(".img").html(res.spirites.other.dream_world.front_default);
        //     console.log(res.spirites.front_default);
        $(".type").html(res.types[0].type.name);
        $(".ability1").html(res.abilities[0].ability.name);
        $(".ability2").html(res.abilities[1].ability.name);
        $(".hp").html(res.stats[0].base_stat);
        $(".xp").html(res.base_experience);
        $(".weight").html(res.weight);
        $(".height").html(res.height);
        $(".attack").html(res.stats[1].base_stat);
        $(".defense").html(res.stats[2].base_stat);
        $(".special-attack").html(res.stats[3].base_stat);
        $(".special-defense").html(res.stats[4].base_stat);
        $(".speed").html(res.stats[1].base_stat);

        //image
        let image = "";
        image = `
            <img src="${res.sprites.other.dream_world.front_default}" class="d-block w-100" height="200" alt="...">`
        $(".img").html(image);
        console.log(image); 

    });
}

