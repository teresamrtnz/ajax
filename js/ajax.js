$("#btnjugadores").click(function(event) {
	$.ajax({
		url: 'http://www.media.formandome.es/phonegap/tutorial/futbolistas.php',
		type: 'GET',
		dataType: 'json'
	})
	.done(function(data) {
		console.log(data);
		$("table").css('display', 'block');
		var listado;
		$.each(data, function(index, futbolista) {

			listado+="<tr><td>"+ futbolista.apellido + "</td><td>" +
			futbolista.equipo + "</td></tr>";

			
		});

		$("#listado").html(listado);

	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	

});