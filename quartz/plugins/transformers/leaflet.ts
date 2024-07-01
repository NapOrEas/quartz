import { QuartzTransformerPlugin } from "../types"

interface Options {
}

export const Leaflet: QuartzTransformerPlugin<Options> = (opts?: Options) => {
    return {
        name: "Leaflet",
        markdownPlugins() {
            return []
        },
        htmlPlugins() {

            return []

        },
        externalResources() {
            return {
                css: [
                    // base css
                    "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
                ],
                js: [
                    {
                        src: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
                        loadTime: "afterDOMReady",
                        contentType: "external",
                    },
                ],
            }

        },
    }
}