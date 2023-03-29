import { Handlers, PageProps } from '$fresh/server.ts'
import GameList from '@/islands/games.tsx'
import { Header } from '@/components/header.tsx'
import { handler as hdlr } from '@/routes/index.tsx'

export const handler: Handlers = {
	GET: hdlr.GET,
}

export default function Page({ data }: PageProps) {
	const { games, error } = data
	return (
		<main className='app'>
			<Header />
			<h1>Let's play some awesome minimalist games</h1>
			{error ? <h2>Error internal</h2> : <GameList games={games} />}
		</main>
	)
}
