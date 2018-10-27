$(function() {
	var conditions = JSON.parse(localStorage.conditions || null);
	var payees = JSON.parse(localStorage.payees || null);

	if (conditions !== null) {
		conditions.forEach(function(ele) {
		    var conditionTemplateScript = $("#conditions-template").html();
		    var conditionTemplate = Handlebars.compile(conditionTemplateScript);
		    var conditionData = conditionTemplate(ele);
		    $('.js-list-of-conditions').append(conditionData);
		});
	}

	if (payees !== null) {
		payees.forEach(function(ele) {
		    var payeesTemplateScript = $("#payees-template").html();
		    var payeesTemplate = Handlebars.compile(payeesTemplateScript);
		    var payeesData = payeesTemplate(ele);
		    $('.js-list-of-payees').append(payeesData);
		});
	}
});