module.exports = {
	name: "ping",
	aliases: ["p"],
	description: "its your normal ping command",
	args: false,
	cooldown: 1,
	async execute(message) {
		const m = await message.channel.send("Ping?");
		m.edit(`Pong! Latency is \`${m.createdTimestamp - message.createdTimestamp}ms\`. API Latency is \`${Math.round(message.client.ping)}ms\``);

	},
};