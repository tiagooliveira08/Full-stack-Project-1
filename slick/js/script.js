$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  var recipient = button.data('whatever');
 
  var modal = $(this)
  modal.find('.modal-title').text('Trailer ' + recipient);
 	var link = $(button).attr("data-link");
 	var linkSplit = link.match(/(youtube\.com\/watch\?v=)(\w*)/);
 	if(linkSplit !== null) {
 		 	$(".youtubelink").attr("src", `https://www.youtube.com/embed/${linkSplit[2]}`);
 			console.log("if enter");
 			return;
 	}

})

$("a").on("click", function() {
	var link = $(this).attr("data-link");
 	var linkSplit = link.match(/(youtube\.com\/watch\?v=)(\w*)/);
	if(linkSplit == null) {
		window.open(link, "_blank");
	}
})





console.log("script lido com sucesso!!");