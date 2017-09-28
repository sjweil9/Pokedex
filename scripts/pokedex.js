$(document).ready(function(){
    for (var i = 1; i <= 151; i++) {
        var pokeImg = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png" id="${i}" class="click">`;
        $('#wrapper > div:first-child').append(pokeImg);
    }
    $(document).on('click', 'img.click', function(){
        var findurl = "https://pokeapi.co/api/v2/pokemon/" + $(this).attr('id');
        var idnum = $(this).attr('id');
        $.get(findurl, function(result){
            var htmlString = "<h1>" + result.name + "</h1>";
            htmlString += "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + String(idnum) + ".png'>";            
            htmlString += "<h2>Types</h2>";
            htmlString += "<ul>";
            for (var i = 0; i < result.types.length; i++) {
                htmlString += "<li>" + result.types[i].type.name + "</li>";
            }
            htmlString += "</ul><h2>Height</h2><p>" + result.height + "</p><h2>Weight</h2><p>" + result.weight + "</p>";
            $('#wrapper > div:last-child').html('<div></div>');
            $('#wrapper > div:last-child').append(htmlString);
        }, "json");
    });
})

