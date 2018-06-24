var StorageArea = chrome.storage.local;
var cfg = { enabled: false };
var context = document.querySelector('body');
var instance = new Mark(context);
var keywords = '国家级|世界级|最高级|最佳|最大|第一|唯一|首个|首选|最好|最大|精确|顶级|最高|最低|最|最具|最便宜|最新|最先进|最大程度|最新技术|最先进科学|国家级产品|填补国内空白|绝对|独家|首家|最新|最先进|第一品牌|金牌|名牌|优秀|最先|顶级|独家|全网销量第一|全球首发|全国首家|全网首发|世界领先|顶级工艺|最新科学|最新技术|最先进加工工艺|最时尚|极品|顶级|顶尖|终极|最受欢迎|王牌|销量冠军|第一|NO.1|Top1|极致|永久|王牌|掌门人|领袖品牌|独一无二|独家|绝无仅有|前无古人|史无前例|万能|治愈率|有效率|顶级|代言|无副作用|绝对|零风险|稳赚|无效退款|祖传|无事故|无依赖|根治|日减|秘方|保过|填补国内空白|保收益|科学研究发现|15分钟精准检测|3-7天见效|1-3个疗程治愈|40分钟解除疼痛|最权威|公立|甲等|首家|唯一|万例无事故|权威|保证|一次性|仅此|重点|公办|疗效|研究院|研究所|基地|奠基者|专家|教授|全国|国家|十佳|治愈率|诊疗中心|国际|世界前段水平|领域专家|品牌医院|指定|唯一|顶级|最久|最值得信赖|最专业|名医|会诊中心|主任医师|首席|国外专业杂志|二甲|三甲|药到病除|院士'.split('|');
var options = { element: 'marked' };

StorageArea.get(cfg, function(items) {
	if (items.enabled) {
		instance.mark(keywords, options);
	}
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.enabled) {
		instance.mark(keywords, options);
	} else {
		instance.unmark(options);
	}
});
