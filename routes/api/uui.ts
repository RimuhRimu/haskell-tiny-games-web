import { Handlers } from '$fresh/server.ts'

export const handlers: Handlers = {
	GET(req) {
		const uui = crypto.randomUUID()
		return new Response(JSON.stringify(uui), {
			headers: {
				'Content-type': 'application/json',
			},
		})
	},
}
