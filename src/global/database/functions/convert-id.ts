// Manuary convert objectId -id to id when returning .leean() objects.

export const convertId = (current: any): any => {
  if (!current) return null;

  if (typeof current.toObject === "function")
    current = current.toObject({ getters: false, virtuals: false });

  if (Array.isArray(current)) return current.map(convertId);

  if (typeof current === "object") {
    const result = { ...current };

    if (result._id) {
      result.id = String(result._id);
      delete result._id;
    }

    for (const key in result) {
      if (result.hasOwnProperty(key)) result[key] = convertId(result[key]);
    }

    return result;
  }

  return current;
};
