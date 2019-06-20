configData = {
	numChatMax				: 3,
	personalColor			:	/*false*/true,
	badgeVisible			: false,
	themeURI					: "",
	theme							: "default",
	themeName					: "",
	msgExistDuration	: 0,
	msgAniDuration		: 0,
	debugLevel				:	1,
	useDisplayName		: true,
	loadCheerImgs			: true,
	loadTwitchCons		: true,
	consRealSubsOnly	: true,
	loadDcCons				: true,
	dcConsURI					: "",
  subMonthsMsg			: "",
  cheersMsg         : "",
	loadClipPreview		: true,
	clipReplaceMsg		: "[ 클립 ]",
	webSocket					: "wss://irc-ws.chat.twitch.tv:443",
	nick							: "justinfan16831",
	pass							: "foobar",
	channel						: "#max886",
	retryInterval			: 2,
	allMessageHandle	: /*false*/true,
	muteUser					: ["Nightbot", "Ssakdook"],
	deleteBanMsg			: true,
	commands					: [
		{exe:"clear", msg:"!!clear"},
		{exe:"theme", msg:"!!theme"}
	],
	replaceMsgs				: [
		{orig:/^![a-zA-Z]+/, to:"{no_display}"}			// 봇 호출 영문 메세지 미표시
	]
};