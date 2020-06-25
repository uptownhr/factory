import BlockWork from "./BlockWork"
import API from "@/static/db.json"

export default {
    title: "Examples / CR1 - BlockWork"
}

export const BlockWorkDefault = () => ({
    components: { BlockWork },
    data() {
        return {
            api: API
        }
    },
    template: `<block-work title="Sample title" :image="api.image"/>`
})