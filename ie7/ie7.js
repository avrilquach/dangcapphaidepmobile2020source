/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'dcpd\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-coin': '&#xe914;',
		'icon-pay': '&#xe915;',
		'icon-struck': '&#xe916;',
		'icon-thanhtoan1': '&#xe917;',
		'icon-transfer': '&#xe918;',
		'icon-visa': '&#xe919;',
		'icon-wallet': '&#xe91a;',
		'icon-ATM': '&#xe91b;',
		'icon-video': '&#xe913;',
		'icon-arrow-next': '&#xe911;',
		'icon-arrow-pre': '&#xe912;',
		'icon-blog': '&#xe900;',
		'icon-call': '&#xe901;',
		'icon-chat-message': '&#xe902;',
		'icon-checked': '&#xe903;',
		'icon-close': '&#xe904;',
		'icon-coupon': '&#xe905;',
		'icon-edit': '&#xe906;',
		'icon-feed': '&#xe907;',
		'icon-gift': '&#xe908;',
		'icon-heart': '&#xe909;',
		'icon-home': '&#xe90a;',
		'icon-Light': '&#xe90b;',
		'icon-location': '&#xe90c;',
		'icon-search': '&#xe90d;',
		'icon-shopping-bag': '&#xe90e;',
		'icon-thanhtoan': '&#xe90f;',
		'icon-user': '&#xe910;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
