configData = {
	numChatMax				: 20,
	personalColor			:	/*false*/true,
	badgeVisible			: false,
	themeURI					: "https://tabbyx2.github.io/dcc_chat/theme/default/theme.css",
	theme							: "\theme\default\theme.css",
	themeName					: "",
	msgExistDuration	: 0,
	msgAniDuration		: 0,
	debugLevel				:	2,
	useDisplayName		: true,
	loadCheerImgs			: true,
	loadTwitchCons		: true,
	consRealSubsOnly	: true,
	loadDcCons				: true,
	dcConsURI					: "",
  subMonthsMsg			: "{!0:{months} 개월 }구독 {0: 시작}!!",
  cheersMsg         : "{!0:{bits} 비트 }를 후원!!",
	loadClipPreview		: true,
	clipReplaceMsg		: "[ 클립 ]",
	webSocket					: "wss://irc-ws.chat.twitch.tv:443",
	nick							: "justinfan16831",
	pass							: "foobar",
	channel						: "#tabby_x2",
	retryInterval			: 2,
	allMessageHandle	: /*false*/false,
	muteUser					: ["Nightbot", "Ssakdook", "twipkr"],
	deleteBanMsg			: true,
	commands					: [
		{exe:"clear", msg:"!!clear"},
		{exe:"theme", msg:"!!theme"}
	],
	replaceMsgs				: [
		{orig:/^![a-zA-Z]+/, to:"{no_display}"}			// 봇 호출 영문 메세지 미표시
	]
};