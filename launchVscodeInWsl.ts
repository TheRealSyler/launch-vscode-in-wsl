import { spawn } from 'bun'
import { parse } from 'ts-command-line-args'

const args = parse({
  vscode: { type: String, alias: 'v' },
  path: { type: String, alias: 'p' },
  distro: { type: String, alias: 'd', defaultValue: 'ubuntu' },
})

spawn({
  windowsHide: false,
  cmd: [
    args.vscode,
    '-n',
    `--remote=wsl+${args.distro}`,
    `${args.path
      .replaceAll('\\', '/')
      .replace(/\/\/wsl\.localhost\/.*?\//, '/')}`,
  ],
})
