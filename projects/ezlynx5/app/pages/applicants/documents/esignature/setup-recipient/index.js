var $recipientTableRow;

function addNewRecipient() {
	$(".js-recipients").append($recipientTableRow.clone());
}

function addMe() {
	var $recipient = $recipientTableRow.clone();

	$recipient.find(".js-recipient-name").val("Commercial Downloads");
	$recipient.find(".js-recipient-email").val("ryan.beukema@ezlynx.com")

	$(".js-recipients").append($recipient);
}

function deleteRecipient() {
	$(this).closest("tr").remove();
}

$(function() {
	$recipientTableRow = $(".js-recipients tr").eq(0).clone();
});
