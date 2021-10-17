export const getToday = () => new Date().toISOString().substring(0, 10);

const DEFAULT_CLASS_PREFIX = 'kirk';

export const prefix = (
  modifiers: Classcat.ClassObject,
  baseClass?: string,
): string => {
  const mods = Object.keys(modifiers).filter((elem) => modifiers[elem]);

  let classPrefix = DEFAULT_CLASS_PREFIX;

  if (baseClass != null) {
    classPrefix = `${classPrefix}-${baseClass}`;
  }

  return mods.map((modifier) => `${classPrefix}-${modifier}`).join(' ');
};
