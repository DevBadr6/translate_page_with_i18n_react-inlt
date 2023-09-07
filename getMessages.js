const message = {
  en: () => import("./messages/en.json").then(r => r.default),
  fr: () => import("./messages/fr.json").then(r => r.default)
}

export const getMessage = (lang) => {
  return message[lang]();
}