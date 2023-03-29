import { game } from '@/types.ts'
import { Game } from '@/components/game.tsx'

interface GameProps {
	games: game[]
}
export default function GameList({ games }: GameProps) {
	return (
		<div className='gamesGrid'>
			{games.map((game) => {
				const imgSource = game.content.find((val) =>
					val.name.match(/.(png|jpg|gif)$/)
				)!.download_url!
				return <Game name={game.name} src={imgSource} />
			})}
		</div>
	)
}
