const name = "dsh-theme-eink-retro";
const inject: string[] = [];

function apply(): void {
  // The theme is client-only. A host entry keeps this package compatible with
  // the standard DSH plugin install/link workflow.
}

export { name, inject, apply };
