$(document).ready(function(){

	var $producto = $("input[type='text']"),
		$precio = $producto.next(),
		$cantidad = $precio.next(),

		btnBorrar = "<button class='borrar'>Eliminar</button>",
		totalArt = 0,
		subTotal = 0,
		total = 0;

		$("button").click(function(){

			$("tbody tr td[colspan='5']").remove();
			totalArt = $precio.val() * $cantidad.val();

			var newRow = "<tr><td>"+$producto.val()
						+"</td><td>"+$precio.val()+"</td><td>"
						+$cantidad.val()+"</td><td>"+totalArt+"</td><td>"+btnBorrar+"</tr>";

			$("tbody").append(newRow);

			subTotal+=totalArt;
			total = parseFloat(subTotal);

			$("tfoot tr").eq(0).children().eq(1).text(subTotal);
 			$("tfoot tr").eq(2).children().eq(1).text(total);

			$producto.val("");
			$precio.val("");
			$cantidad.val("");

		});

	$(document).on("click",".borrar",function(){
		var totalArtBorrar = $(this).parent().prev().text();
		$(this).parentsUntil("tbody").remove();
		subTotal -= totalArtBorrar;
		total = parseFloat(subTotal);

		$("tfoot tr").eq(2).children().eq(1).text(total);

		if(total===0){
			$("tbody").append("<tr><td colspan='5'>Ingresar Articulos</td></tr>");
		}
	});

	$("tfoot button").click(function(){
		$("tbody").empty();
		$("tbody").append("<tr><td colspan='5'>Ingresar Articulos</td></tr>");

		subTotal = 0;
		total = 0;

		$("tfoot tr").eq(0).children().eq(1).text(subTotal);
		$("tfoot tr").eq(2).children().eq(1).text(total);
	})

});
