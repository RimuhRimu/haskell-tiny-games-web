import { PageProps } from '$fresh/server.ts'

export default function Greet(props: PageProps) {
	return <h1>Sup! {props.params.name}</h1>
}
