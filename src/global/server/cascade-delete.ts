const ids = new Set<string>();

export function addId(id: string) {
  ids.add(id);
}

export function removeId(id: string) {
  ids.delete(id);
}

export function hasId(id: string) {
  return ids.has(id);
}
