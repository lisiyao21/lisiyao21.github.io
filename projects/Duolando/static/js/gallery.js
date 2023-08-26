const search = document.querySelector(".search-box input"),
      dances = document.querySelectorAll(".dance-box");
search.addEventListener("keyup", e =>{
    if(e.key == "Enter"){
        let searcValue = search.value,
            value = searcValue.toLowerCase();
            dances.forEach(dance =>{
                dance_genre_name = dance.dataset.name.toLowerCase();
                if(value === dance_genre_name){ //matching value with getting attribute of dances
                    return dance.style.display = "block";
                }
                dance.style.display = "none";
            });
    }
});

search.addEventListener("keyup", () =>{
    if(search.value != "") return;

    dances.forEach(dance =>{
        dance.style.display = "block";
    })
})
