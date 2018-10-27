function checkStatementStatus(locationHash) {
	var ReadyToSend = true;
	for (var i=0; i<commissions.commissions.length; i++) {
		if (commissions.commissions[i].checked && !commissions.commissions[i].ReadyToSend) {
			ReadyToSend = false;
		}
	}

	if (!ReadyToSend) {
		$('#not-ready-modal').modal('show');
	}
	else {
		location.hash = locationHash;
	}
}