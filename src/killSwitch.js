/**
 * Kill-switch remoto.
 *
 * Come funziona:
 *  - All'avvio dell'app, fa fetch di un piccolo JSON da un Gist GitHub
 *    che SOLO IL DEV può modificare.
 *  - Se { "enabled": false } -> mostra la KillScreen invece dell'app.
 *  - Cache in localStorage per 30 min (per non bombardare GitHub).
 *  - Fail-open: se la fetch fallisce, il sito resta su.
 *
 * Override locali (utile in dev / per testare):
 *  - URL ?__ks=on   -> forza kill su questo browser
 *  - URL ?__ks=off  -> forza site-up su questo browser
 *  - URL ?__ks=clear-> rimuove ogni override
 *  - Console: slice.kill() / slice.unkill() / slice.status()
 *
 * Per spegnere il sito in PRODUZIONE:
 *  -> apri il Gist, cambia "enabled": true  in  false, salva.
 *     Entro ~30 min (o subito con hard refresh) tutti i visitatori
 *     vedranno la pagina di errore.
 */

import { useEffect, useState } from 'react'

// URL "raw" del Gist SENZA hash di commit -> punta sempre all'ultima versione.
const REMOTE_URL =
  'https://gist.githubusercontent.com/Thommy-String/74534cc10ac5dee8075e63a6fd8dc1e2/raw/slice-status.json'

const CACHE_KEY = '__sn_ks_v1'
const OVERRIDE_KEY = '__sn_ks_override'   // 'on' | 'off' | null
const TTL_MS = 30 * 60 * 1000             // 30 min

/* ------------------------------------------------------------------ */
/* helpers                                                            */
/* ------------------------------------------------------------------ */

const readCache = () => {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const obj = JSON.parse(raw)
    if (Date.now() - obj.t > TTL_MS) return null
    return obj.v
  } catch { return null }
}

const writeCache = (v) => {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), v })) } catch {}
}

const readOverride = () => {
  try { return localStorage.getItem(OVERRIDE_KEY) } catch { return null }
}

const writeOverride = (val) => {
  try {
    if (val === null) localStorage.removeItem(OVERRIDE_KEY)
    else localStorage.setItem(OVERRIDE_KEY, val)
  } catch {}
}

/* ------------------------------------------------------------------ */
/* URL params: ?__ks=on / off / clear                                 */
/* ------------------------------------------------------------------ */

const applyUrlOverride = () => {
  if (typeof window === 'undefined') return
  const p = new URLSearchParams(window.location.search).get('__ks')
  if (!p) return
  if (p === 'on')    writeOverride('on')
  if (p === 'off')   writeOverride('off')
  if (p === 'clear') writeOverride(null)
  // pulisce l'URL così non resta visibile
  const u = new URL(window.location.href)
  u.searchParams.delete('__ks')
  window.history.replaceState({}, '', u.toString())
}

/* ------------------------------------------------------------------ */
/* console API: window.slice.kill() / unkill() / status()             */
/* ------------------------------------------------------------------ */

const installConsoleAPI = () => {
  if (typeof window === 'undefined') return
  if (window.slice) return
  window.slice = {
    kill ()   { writeOverride('on');  location.reload() },
    unkill () { writeOverride('off'); location.reload() },
    clear ()  { writeOverride(null);  localStorage.removeItem(CACHE_KEY); location.reload() },
    status () {
      return {
        override: readOverride(),
        cache: readCache(),
        remote: REMOTE_URL
      }
    }
  }
}

/* ------------------------------------------------------------------ */
/* hook                                                               */
/* ------------------------------------------------------------------ */

export function useKillSwitch () {
  // null = ancora non so / loading
  // true = sito ATTIVO (mostra app)
  // false = sito SPENTO (mostra KillScreen)
  const [enabled, setEnabled] = useState(() => {
    applyUrlOverride()
    installConsoleAPI()

    // 1. override locale ha precedenza assoluta
    const ov = readOverride()
    if (ov === 'on')  return false
    if (ov === 'off') return true

    // 2. cache fresca
    const c = readCache()
    if (c !== null) return c

    // 3. niente: parti come "acceso" e poi verifica in background
    //    (così non blocchiamo il primo paint)
    return true
  })

  useEffect(() => {
    // se c'è un override locale, non serve interrogare il remoto
    const ov = readOverride()
    if (ov === 'on' || ov === 'off') return

    let cancelled = false

    // cache-busting: aggiungiamo timestamp per evitare CDN cache di GitHub
    const url = `${REMOTE_URL}?t=${Date.now()}`

    fetch(url, { cache: 'no-store' })
      .then(r => r.ok ? r.json() : null)
      .then(json => {
        if (cancelled || !json) return
        const isEnabled = json.enabled !== false  // default = true se manca
        writeCache(isEnabled)
        setEnabled(isEnabled)
      })
      .catch(() => {
        // fail-open: lasciamo il sito acceso
      })

    return () => { cancelled = true }
  }, [])

  return enabled
}
