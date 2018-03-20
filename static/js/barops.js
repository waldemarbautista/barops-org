/* jQuery event handlers */
function confirmDelete() {
	return confirm("Are you sure you want to delete this?\nWarning: This action cannot be undone!");
}

function showRoommate() {
	var str = $('select#room_type').val();
	var n = 0;

	$('div#roommatex').hide();
	$('div#roommate1').hide();
	$('div#roommate2').hide();

	n = str.search(/double/i);
	if (n != -1) {
		$('div#roommatex').show();
		$('div#roommate1').show();
		$('div#roommate2').hide();
	}

	n = str.search(/triple/i);
	if (n != -1) {
		$('div#roommatex').show();
		$('div#roommate1').show();
		$('div#roommate2').show();
	}
}

/* DOM is ready */
$(document).ready(function () {
	/* Bind handlers to events */
	$('a.confirmDelete').click(confirmDelete);
	$('select.showRoommate').change(showRoommate);

	/* Do effect on first load */
	showRoommate();

	/* Code that aren't bound to events */
	$('#birthdate').datetimepicker({
		locale: 'en',
		format: 'YYYY-MM-DD'
	});
	$('#date_from').datetimepicker({
		locale: 'en',
		format: 'YYYY-MM-DD'
	});
	$('#date_to').datetimepicker({
		locale: 'en',
		format: 'YYYY-MM-DD'
	});
	$("#date_from").on("dp.change", function (e) {
		$('#date_to').data("DateTimePicker").minDate(e.date);
	});
	$("#date_to").on("dp.change", function (e) {
		$('#date_from').data("DateTimePicker").maxDate(e.date);
	});
	$('#graduation_date').datetimepicker({
		locale: 'en',
		format: 'YYYY-MM-DD'
	});


  $('.wysihtml5').each(function() {
    var src = $(this).data('source');
    var txt = $("#"+src).html();
    $(this).html(txt).wysihtml5({
      "toolbar": {
        "font-styles": false,
        "emphasis": true,
        "lists": true,
        "html": false,
        "link": true,
        "image": false,
        "blockquote": false
      }
    });
  });
});
