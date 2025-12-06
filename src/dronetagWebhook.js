G
Gard's workspace
Dronetag

Production

Dronetag


Search
COMMAND+K

New

Upgrade


H
Environment
Dronetag
Events
Settings
MONITOR
Logs
Metrics
MANAGE
Environment
Shell
Scaling
Previews
Disk
Jobs

Changelog
Invite a friend

Contact support
Render Status
Your free instance will spin down with inactivity, which can delay requests by 50 seconds or more.
Upgrade now

All logs
Search


Last hour
GMT+1

Menu

yarn run v1.22.22
$ node server.js
node:internal/modules/cjs/loader:1423
  throw err;
  ^
Error: Cannot find module '/opt/render/project/src/server.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1420:15)
    at defaultResolveImpl (node:internal/modules/cjs/loader:1058:19)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1063:22)
    at Module._load (node:internal/modules/cjs/loader:1226:37)
    at TracingChannel.traceSync (node:diagnostics_channel:328:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:245:24)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}
Node.js v25.2.1
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
     ==> Deploying...
     ==> No open ports detected, continuing to scan...
     ==> Docs on specifying a port: https://render.com/docs/web-services#port-binding
==> Running 'yarn start'
yarn run v1.22.22
$ node server.js
node:internal/modules/esm/resolve:274
    throw new ERR_MODULE_NOT_FOUND(
          ^
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/opt/render/project/src/src/dronetagWebhook.js' imported from /opt/render/project/src/server.js
    at finalizeResolution (node:internal/modules/esm/resolve:274:11)
    at moduleResolve (node:internal/modules/esm/resolve:864:10)
    at defaultResolve (node:internal/modules/esm/resolve:990:11)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:712:20)
    at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:729:38)
    at ModuleLoader.resolveSync (node:internal/modules/esm/loader:758:52)
    at #resolve (node:internal/modules/esm/loader:694:17)
    at ModuleLoader.getOrCreateModuleJob (node:internal/modules/esm/loader:614:35)
    at ModuleJob.syncLink (node:internal/modules/esm/module_job:143:33)
    at ModuleJob.link (node:internal/modules/esm/module_job:228:17) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///opt/render/project/src/src/dronetagWebhook.js'
}
Node.js v25.2.1
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
Need better ways to work with logs? Try theRender CLI, Render MCP Server, or set up a log stream integration 
0 services selected:

Move

Generate Blueprint

Resume

Suspend
