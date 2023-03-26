import { Handlers } from '$fresh/server.ts'

export const handler: Handlers = {
	async GET(req, ctx) {
		const resp = await ctx.render()
		resp.headers.set('X-Custom-Header', 'Hello')
		return resp
	},
}

export default function Home() {
	return <h1>Hello</h1>
}
