import { QuartzTransformerPlugin } from "../types"
import { rehypeLeaflet } from "rehype-leaflet"

interface Options {
}

export const Leaflet: QuartzTransformerPlugin = () => {
    return {
        name: "Leaflet",
        markdownPlugins() {
            return []
        },
        htmlPlugins() {

            return [rehypeLeaflet]

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
                        loadTime: "beforeDOMReady",
                        contentType: "external",
                    },
                ],
            }

        },
    }
}