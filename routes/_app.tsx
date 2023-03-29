import { Head } from '$fresh/runtime.ts'
import { AppProps } from '$fresh/src/server/types.ts'

export default function App({ Component }: AppProps) {
	return (
		<html>
			<Head>
				<title>Fresh</title>
				<link rel='stylesheet' href='/global.css' />
				<link rel='icon' href='/icon.png' type='image/png' />
			</Head>
			<body class='bodyClass'>
				<Component />
			</body>
		</html>
	)
}
