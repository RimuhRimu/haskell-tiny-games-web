// WARNING: the `deno task start` runs this file with flag `-A` -> --allow-all, be aware
function App(): string {
	return `this is your App running in ${Deno.cwd()}`
}

export function add(a: number, b: number) {
	return a + b
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) console.log(App())
