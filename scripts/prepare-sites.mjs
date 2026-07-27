import { mkdir, readdir, rename, writeFile } from 'node:fs/promises'

const distUrl = new URL('../dist/', import.meta.url)
const clientUrl = new URL('../dist/client/', import.meta.url)

await mkdir(clientUrl, { recursive: true })

for (const entry of await readdir(distUrl)) {
  if (entry === 'client' || entry === 'server' || entry === 'wrangler.json') continue
  await rename(new URL(entry, distUrl), new URL(entry, clientUrl))
}

const worker = `export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request)
    if (response.status !== 404) return response

    const url = new URL(request.url)
    if (url.pathname.includes('.')) return response

    url.pathname = '/'
    return env.ASSETS.fetch(new Request(url, request))
  },
}
`

await mkdir(new URL('../dist/server/', import.meta.url), { recursive: true })
await writeFile(new URL('../dist/server/index.js', import.meta.url), worker)

await writeFile(
  new URL('../dist/wrangler.json', import.meta.url),
  JSON.stringify(
    {
      main: 'server/index.js',
      compatibility_date: '2026-07-27',
      assets: {
        directory: 'client',
        binding: 'ASSETS',
        not_found_handling: 'single-page-application',
        run_worker_first: true,
      },
    },
    null,
    2,
  ),
)
