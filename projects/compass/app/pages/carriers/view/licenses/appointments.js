function showAddAppointmentModal() {
    $("#add-license-appt-modal").modal("show");
}

$(function() {
	$(".js-delete-payees").on("click", function() {
		$(this).closest("tr").remove();
	});

    $(".js-add-appointment-btn").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();

        showAddAppointmentModal();
    });	
});