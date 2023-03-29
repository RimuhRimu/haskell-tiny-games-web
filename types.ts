export type gameTypes = 'base' | 'default' | 'hackage' | 'prelude'
export interface game {
	name: string
	url: string
	content: RepositoryResponse[]
}
export interface RepositoryResponse {
	name: string
	path: string
	sha: string
	size: number
	url: string
	html_url: string
	git_url: string
	download_url: string | null
	type: 'file' | 'dir'
	_links: {
		self: string
		git: string
		html: string
	}
}
