import { Handlers, PageProps } from '$fresh/server.ts'
import GameList from '@/islands/games.tsx'
import { game, RepositoryResponse } from '@/types.ts'
import { Header } from '@/components/header.tsx'

const TOKEN = Deno.env.get('API_TOKEN')

const options = {
	headers: {
		Authorization: `Token ${TOKEN}`,
		'Content-Type': 'application/json',
	},
}

/**
 * Handler for GET requests.
 * Retrieves the content of tiny-games-hs and returns information about its games.
 */
export const handler: Handlers = {
	async GET(_, ctx): Promise<Response> {
		const scopes = ['prelude', 'base', 'default', 'hackage']
		const { scope = 'prelude' } = ctx.params
		//check if the url matches a scope
		if (!scopes.some((s) => s === scope)) {
			const resp = ctx.render({ error: true })
			return resp
		}

		const url =
			`https://api.github.com/repos/haskell-game/tiny-games-hs/contents/${scope}`
		// Fetch the content of the scope directory in the tiny-games-hs repository.
		const res: RepositoryResponse[] = await fetch(
			url,
			options,
		)
			.then((res) => res.json())

		// If the response is not an array, an error has occurred, so render an error page and return the response.
		if (!(res instanceof Array)) {
			const resp = await ctx.render({ error: true })
			return resp
		}

		// Map over each file in the response and fetch its content.
		// Construct an array of game objects to be rendered in the final response.
		const games: game[] = await Promise.all(
			res.map(async (file) => {
				const { name, url } = file
				const content: RepositoryResponse[] = await fetch(url, options).then((
					res,
				) => res.json())
				return {
					name,
					url,
					content,
				}
			}),
		)

		// Render the games as a list and return the response.
		const resp = await ctx.render({
			games: games.filter((game) => !game.name.match(/.(hs)$/)),
		})
		return resp
	},
}

export default function Home({ data }: PageProps) {
	const { games, error } = data
	return (
		<main className='app'>
			<Header />
			<h1>Let's play some awesome minimalist games</h1>
			{error ? <h2>Error internal</h2> : <GameList games={games} />}
		</main>
	)
}
