interface GameProps {
	name: string
	src: string
}
export const Game = ({ name, src }: GameProps) => {
	return (
		<figure className='gameContainer'>
			<figcaption className='gameTitle'>{name}</figcaption>
			<img src={src} alt={name} loading='lazy' className='gameImg' />
		</figure>
	)
}
