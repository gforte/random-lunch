var bowls, totalBowls, randomBowls;
$(function () {
	totalBowls = 21;
	for (var i = 1; i <= 9; i++) {
		$('#bowlsNumber').append($('<option/>', {
			value: i,
			text: (i === 1 ? ' 1 bowl' : i + ' bowls')
		}));
	}
	$('.go-btn').click(magic);
	$('.retry').click(function(){
		$('#result').hide();
		$('#selection').show();
	});
});

function magic() {
	var maxBowls = $('#bowlsNumber').val();
	if (maxBowls === '0') {
		return false;
	}
	
	bowls = new Array();
	randomBowls = new Array();
	var bowls = new Array();
	
	for (var i = 1; i <= totalBowls; i++) {
		bowls.push(i);
	}
	
	for (var i = 0; i < $('#bowlsNumber').val(); i++) {
		var random = Math.floor(Math.random() * bowls.length);
		randomBowls.push(bowls[random]);
		if (typeof $('#wb:checked').val() !== 'string') {
			bowls.splice(random, 1);
		}
	}
	populate();
}

function populate() {
	var container = $('#result .bowls');
	$(container).html('');
	$('#selection').hide();
	$.each(randomBowls,function(i,bowl){
		$(container).append('<div class="number">'+bowl+'</div>');
	});
	$('#result').show();
}