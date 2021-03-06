//Base
const { Command } = require("discord.js-commando");

//Embed
const { RichEmbed } = require("discord.js");

function msToTimeString(ms) {
	const addZero = (element) => element.toString().padStart(2, 0);
	let d, h, m, s;

	s = Math.floor(ms /1000);
	m = Math.floor(s / 60);
	s = s % 60;
	h = Math.floor(m / 60);
	m = m % 60;
	d = Math.floor(h /24);
	h = h % 24;
	return `${addZero(d)} ${d === 1 ? "Day" : "Days"} ${addZero(h)}:${addZero(m)}:${addZero(s)}`;
}

module.exports = class UptimeCommand extends Command {
	constructor(client) {
		super(client, {
			name: "uptime",
			memberName: "uptime",
			group: "dev",
			description: "Displays the uptime of the bot",
			throttling: {
				usages: 1,
				duration: 3
			},
			aliases: ["upt"],
			examples: [],
		});
	}

	run(msg) {
		let pUptime = process.uptime();
		let cUptime = msg.client.uptime;
		let lastReady = new Date(msg.client.readyTimestamp);

		const embed = new RichEmbed()
			.setColor(msg.guild ? msg.guild.me.displayColor : "DEFAULT")
			.addField("The uptime of the node Processes", msToTimeString(pUptime*1000), true)
			.addField("The uptime of the Bot", msToTimeString(cUptime), true)
			.addField("The last entered `READY` state", lastReady, true);

		return msg.channel.send(embed);
	}
};
