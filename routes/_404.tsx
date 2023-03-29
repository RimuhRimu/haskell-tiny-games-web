import { UnknownPageProps } from '$fresh/server.ts'

export default function Page404({ url }: UnknownPageProps) {
	return <h1>404 error {url.pathname} does no exists</h1>
}
