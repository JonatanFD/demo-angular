

// interfaces que se usan dentro del response del api

export interface BundleResponse {
  id: string

}


export interface BundlesResponse {
  sources: BundleResponse[];
}


// El flujo seria, fetch => assembler =>
