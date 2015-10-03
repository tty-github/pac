var black_domains = [
	"astrsk.net"
,	"socdm.com"
,	"adstore.jp"
,	"astrsk.net"
,	"iadsdk.apple.com"
,	"iadc.qwapi.com"
,	"amebaspgame.com"
,       ".media-rep.com"
,       "i.ad-move.jp"
,	"c1.nend.net"
,	"output.nend.net"
,	".i-mobile.co.jp"
,	"googleads.g.doubleclick.net"
];

function FindProxyForURL(url, host) {
	var direct	= "DIRECT";
	var blackhole	= "PROXY 8.8.8.8:53;";

	for (var i = 0, len = black_domains.length; i < len; i++ ) {
		if(dnsDomainIs(host, black_domains[i])) {
			return blackhole;
		}
	}

	return direct;
}
