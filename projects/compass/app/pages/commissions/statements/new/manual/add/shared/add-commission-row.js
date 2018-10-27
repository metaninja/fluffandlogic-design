function resetEditor() {
    resetLineItem();
    $('.js-btn-save-existing-line-item').hide();
    $('.js-btn-save-line-item').show();
    $('.js-search-transaction-number').hide();
    $('.js-search-policy-number .type-ahead-input').val('');
    $('.js-transaction-number .type-ahead-input').val('');
    $('.js-btn-save-add-another').show();
    $('.js-search-for-policy').removeClass('hide-content');
    $('.js-enter-line-item').addClass('hide-content');
}

function showTab(activeTab, tabContent) {
    $('.js-tab').hide();
    $(activeTab).parents('.tabs').find('.tab-link').removeClass('active');
    $(activeTab).addClass('active');
    $(tabContent).show();
}

function hideEditor() {
    resetEditor();
    $('.editor').removeClass('show');
}

function showEditor() {
    resetEditor();
    $('.editor').addClass('show');
    $('.js-search-policy-number').find('input').focus();
}

function EnterKeyPressed(event) {
    if (event.keyCode === 13) {
        resetEditor();
        addLineItem();
    }
}

function EscKeyPressed(event) {
    if (event.keyCode === 27) {
        hideEditor();
    }
}

function resetLineItem() {
    $('.js-enter-line-item input[type="text"]').val('');
}

function editLineItem(row) {
    showEditor();
    $('.js-btn-save-existing-line-item').show();
    $('.js-btn-save-line-item').hide();
    $('.js-btn-save-add-another').hide();
    $('.js-search-for-policy').addClass('hide-content');
    $('.js-enter-line-item').removeClass('hide-content');
    $('.js-policy-empty-insured').val($(row).find('.line-item-insured').text());
    $('.js-policy-empty-member-agency input').val($(row).find('.line-item-member-agency').text());
    $('.js-policy-empty-policy-number').val($(row).find('.line-item-policy-number').text());
    $('.js-policy-empty-lob input').val($(row).find('.line-item-lob').text());
    $('.js-policy-empty-transaction-type').val($(row).find('.line-item-trans-type').text());
    $('.js-policy-empty-transaction-date').val($(row).find('.line-item-trans-date').text());
    $('.js-policy-empty-premium').val($(row).find('.line-item-premium').text().substr(1));
    $('.js-policy-empty-expected-commission').val($(row).find('.line-item-expected-commission').text().substr(1));
    $('.js-policy-empty-actual-commission').val($(row).find('.line-item-actual-commission').text().substr(1));
    $('.js-policy-empty-policy-fee').val($(row).find('.line-item-policy-fee').text().substr(1));
    $('.js-policy-empty-inspection-fee').val($(row).find('.line-item-inspection-fee').text().substr(1));
    $('.js-policy-empty-agency-fee').val($(row).find('.line-item-agency-fee').text().substr(1));
}

function saveLineItem(existingItem) {
    if (!existingItem) {
        addLineItem();
    }
    resetEditor();
    hideEditor();
}
function saveAndAddAnother() {
    addLineItem();
    resetEditor();
    resetLineItem();
    $('.js-search-policy-number').find('input').focus();
}

function typeAheadSearch() {
    if (this.value === "") {
        $(this).parents('.type-ahead').find('.type-ahead-results').removeClass('show');
    } else {
        $(this).parents('.type-ahead').find('.type-ahead-results').addClass('show');
    }
}

function typeAheadSearchResult() {
    $(this).parents('.type-ahead').find('.type-ahead-results').removeClass('show');
    $('.js-transaction-number .type-ahead-results').addClass('show');
    $(this).parents('.type-ahead').find('.type-ahead-input').val($(this).text());
}

$('.js-search-policy-number').change(function() {
    $('.js-search-transaction-number').show();
});

function showPolicyInfo() {
    $('.js-transaction-number').hide();
    $('.js-policy-number .type-ahead-input').val('');
    $('.js-transaction-number .type-ahead-input').val('');
    $('.js-search-for-policy').addClass('hide-content');
    $('.js-enter-line-item').removeClass('hide-content');
    $('.js-enter-line-item .form-group:first-child input').focus();
}


function NewLineItem() {
    $(".search-result").hide();
    $(".search-results-transactions").hide();
    $('.js-policy-empty').show();

    $('.type-ahead-results').removeClass('show');
    $('.js-policy-number .type-ahead-input').val('');
    $('.js-transaction-number .type-ahead-input').val('');
    $('.js-add-commission-heading').hide();
}

function addLineItem() {
    var newRow = '<tr onclick="editLineItem(this)" class="highlight-row">';
    var variance = $('.js-policy-empty-actual-commission').val() - $('.js-policy-empty-expected-commission').val();
    newRow += '<td><input type="checkbox"></td>';
    newRow += '<td>' + $('.js-policy-empty-insured').val()              + '</td>';
    newRow += '<td><a href="#/app/pages/agencies/view/">' + $('.js-policy-empty-member-agency input').val()  + '</a></td>';
    newRow += '<td><a href="#/app/pages/policies/view">' + $('.js-policy-empty-policy-number').val()        + '</a></td>';
    newRow += '<td>' + $('.js-policy-empty-lob input').val()            + '</td>'; //find(':selected').text();
    newRow += '<td>' + $('.js-policy-empty-transaction-type').val()     + '</td>'; //find(':selected').text();
    newRow += '<td>' + $('.js-policy-empty-transaction-date').val()     + '</td>';
    newRow += '<td class="text-right">$' + $('.js-policy-empty-premium').val()              + '</td>';
    newRow += '<td class="text-right">$' + $('.js-policy-empty-expected-commission').val()  + '</td>';
    newRow += '<td class="text-right">$' + $('.js-policy-empty-actual-commission').val()    + '</td>';
    newRow += '<td class="text-danger text-right">$' + variance                     + '</td>';
    newRow += '<td class="text-right">$' + $('.js-policy-empty-policy-fee').val()           + '</td>';
    newRow += '<td class="text-right">$' + $('.js-policy-empty-inspection-fee').val()       + '</td>';
    newRow += '<td class="text-right">$' + $('.js-policy-empty-agency-fee').val()           + '</td>';
    newRow += '<td>Matched</td>';
    newRow += '<td></td>';
    newRow += '        <td>\n' +
        '            <div class="dropdown" style="white-space: nowrap;">\n' +
        '                <a href="javascript:void(0);" class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '                    Action\n' +
        '                </a>\n' +
        '                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">\n' +
        '                    <a class="dropdown-item" href="javascript:void(0)" data-toggle="modal" data-target="#approve-commissions-modal">Approve</a></a>\n' +
        '                    <a class="dropdown-item" href="javascript:void(0);" onclick="editLineItem.call(this)">Edit</a>\n' +
        '                    <div class="dropdown-divider"></div>\n' +
        '                    <a class="dropdown-item text-danger" href="javascript:void(0);" data-toggle="modal" data-target="#delete-commissions-modal">Delete</a>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </td>';
    newRow +="</tr>";
    $('#records').prepend(newRow);
    $('#records tbody tr:first-child').click(editLineItem(this));
}

function editRule(rule) {
    $(rule).parents('tr').find('[disabled]').removeAttr('disabled');
    $(rule).parents('.js-btn-group-edit').addClass('hide-content');
    $(rule).parents('td').find('.js-btn-group-save').removeClass('hide-content');
}

function saveRule(rule) {
    $(rule).parents('tr').find('input').attr('disabled', 'disabled');
    $(rule).parents('tr').find('select').attr('disabled', 'disabled');
    $(rule).parents('.js-btn-group-save').addClass('hide-content');
    $(rule).parents('td').find('.js-btn-group-edit').removeClass('hide-content');
    $('.js-alert-overriding-commission-rule').removeClass('hide-content');
}