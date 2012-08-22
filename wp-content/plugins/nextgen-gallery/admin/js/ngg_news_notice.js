jQuery(function($){
	$('#wp-admin-bar-ngg-menu').pointer({
		content: nggAdmin.content,
		pointerClass: 'pointer ngg_latest_news_notice',
		close: function(){
<<<<<<< HEAD
			setUserSetting(nggAdmin.setting, 1);
=======
			var data = {
				action: 'hide_news_notice',
				nonce: nggAdmin.nonce
			}
			jQuery.post(ajaxurl, data);
>>>>>>> 71411967e3433ea5a80a41589ba484f0f91adf0b
		}
	}).pointer('open');
});