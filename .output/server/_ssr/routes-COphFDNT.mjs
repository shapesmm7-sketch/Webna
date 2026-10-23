import {
  _ as lazyRouteComponent,
  v as createFileRoute,
} from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-COphFDNT.js
var $$splitComponentImporter = () => import("./routes-BJiD8oNI.mjs");
var Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WebNa Browser — Search, news & downloader" },
      {
        name: "description",
        content:
          "WebNa: fast browser with Google search, worldwide news, saved links and a video downloader.",
      },
      {
        property: "og:title",
        content: "WebNa Browser",
      },
      {
        property: "og:description",
        content:
          "Fast browser with Google search, worldwide news and a video downloader.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
});
var AI_ENGINES = {
  Gemini: {
    name: "Gemini",
    url: "https://gemini.google.com/app",
    domain: "gemini.google.com",
    desc: "Google's smart assistant for writing, search & coding",
    badge: "Google",
  },
  ChatGPT: {
    name: "ChatGPT",
    url: "https://chatgpt.com/?q=",
    domain: "chatgpt.com",
    desc: "OpenAI versatile conversation and smart search",
    badge: "OpenAI",
  },
  Perplexity: {
    name: "Perplexity",
    url: "https://www.perplexity.ai/search?q=",
    domain: "perplexity.ai",
    desc: "Real-time conversational AI search with citations",
    badge: "Search",
  },
  Claude: {
    name: "Claude",
    url: "https://claude.ai/new",
    domain: "claude.ai",
    desc: "Anthropic thoughtful and nuanced AI model",
    badge: "Anthropic",
  },
  Copilot: {
    name: "Copilot",
    url: "https://copilot.microsoft.com/?q=",
    domain: "copilot.microsoft.com",
    desc: "Microsoft AI companion with web grounding",
    badge: "Microsoft",
  },
  DeepSeek: {
    name: "DeepSeek",
    url: "https://chat.deepseek.com",
    domain: "deepseek.com",
    desc: "High-reasoning open AI model for math and code",
    badge: "Reasoning",
  },
  Grok: {
    name: "Grok",
    url: "https://grok.com",
    domain: "x.ai",
    desc: "xAI witty real-time search & chat",
    badge: "xAI",
  },
  Poe: {
    name: "Poe",
    url: "https://poe.com",
    domain: "poe.com",
    desc: "Multi-bot AI platform with top models in one place",
    badge: "Multi-AI",
  },
  Phind: {
    name: "Phind",
    url: "https://www.phind.com/search?q=",
    domain: "phind.com",
    desc: "AI search engine optimized for developers & research",
    badge: "Dev Search",
  },
  "You.com": {
    name: "You.com",
    url: "https://you.com/search?q=",
    domain: "you.com",
    desc: "AI search assistant with multi-source synthesis",
    badge: "Search",
  },
  "Meta AI": {
    name: "Meta AI",
    url: "https://www.meta.ai",
    domain: "meta.ai",
    desc: "Meta's conversational assistant powered by Llama",
    badge: "Meta",
  },
  Mistral: {
    name: "Mistral",
    url: "https://chat.mistral.ai",
    domain: "mistral.ai",
    desc: "Le Chat by Mistral AI, fast and open European model",
    badge: "Mistral",
  },
  HuggingChat: {
    name: "HuggingChat",
    url: "https://huggingface.co/chat",
    domain: "huggingface.co",
    desc: "Open-source community AI models and chat",
    badge: "Open Source",
  },
  "Pi AI": {
    name: "Pi AI",
    url: "https://pi.ai",
    domain: "pi.ai",
    desc: "Supportive and friendly conversational companion",
    badge: "Personal",
  },
};
//#endregion
export { Route as n, AI_ENGINES as t };
