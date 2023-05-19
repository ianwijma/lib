import host from "./src/utils/host.ts"
import SemVer, * as semver from "./src/utils/semver.ts"
import Path from "./src/utils/Path.ts"
export * as types from "./src/types.ts"

import "./src/utils/misc.ts"
import { flatmap, validate } from "./src/utils/misc.ts"

import * as pkg from "./src/utils/pkg.ts"
import TeaError, { panic } from "./src/utils/error.ts"
import useConfig from "./src/hooks/useConfig.ts"
import useOffLicense  from "./src/hooks/useOffLicense.ts"
import useCache from "./src/hooks/useCache.ts"
import useCellar from "./src/hooks/useCellar.ts"
import useMoustaches from "./src/hooks/useMoustaches.ts"
import usePantry from "./src/hooks/usePantry.ts"
import useFetch from "./src/hooks/useFetch.ts"
import useDownload from "./src/hooks/useDownload.ts"
import useShellEnv from "./src/hooks/useShellEnv.ts"
import useInventory from "./src/hooks/useInventory.ts"
import hydrate from "./src/prefab/hydrate.ts"
import link from "./src/prefab/link.ts"
import install from "./src/prefab/install.ts"
import resolve from "./src/prefab/resolve.ts"
import { validatePackageRequirement } from "./src/utils/hacks.ts"
import useSync from "./src/hooks/useSync.ts"

const utils = {
  pkg, host, flatmap, validate, panic
}

const hooks = {
  useCache,
  useCellar,
  useConfig,
  useDownload,
  useFetch,
  useInventory,
  useMoustaches,
  useOffLicense,
  usePantry,
  useShellEnv,
  useSync,
}

const prefab = {
  hydrate,
  link,
  install,
  resolve
}

const hacks = {
  validatePackageRequirement
}

export { utils, hooks, prefab, hacks, semver }

/// export types
// we cannot add these to the above objects or they cannot be used as types
export { TeaError, Path, SemVer }
export * from "./src/types.ts"
