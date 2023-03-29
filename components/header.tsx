export const Header = () => {
	return (
		<>
			<header className='header'>
				<img src='/icon.png' alt='logo' className='logo' />
				<nav className='headerNav'>
					<ul>
						<li>
							<a href='/'>Prelude</a>
						</li>
						<li>
							<a href='/base'>Base</a>
						</li>
						<li>
							<a href='/default'>Default</a>
						</li>
						<li>
							<a href='/hackage'>Hackage</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}
