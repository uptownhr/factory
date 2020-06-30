import GalleryList from "./GalleryList.vue"
import API from "@/static/db.json"

// Just mocking more items for testing
const manyItems = API.pages
    .concat(API.pages)
    .concat(API.pages)
    .concat(API.pages)
    .concat(API.pages)
    .concat(API.pages)
    .concat(API.pages)
    .concat(API.pages)
    .concat(API.pages)

export default {
    title: "@ibanzajoe / CR11 - GalleryList"
}

export const GalleryListColumns = () => ({
    components: { GalleryList },
    data() {
        return {
            api: API,
            items: manyItems
        }
    },
    template: `<gallery-list
              :items="items"
              variant="column"
              date="01 - 16 2020"
            />`
})

export const GalleryListComma = () => ({
    components: { GalleryList },
    data() {
        return {
            api: API,
            items: API.pages.nodes.concat(API.pages.nodes)
        }
    },
    template: `<gallery-list
              :items="items"
              title="Our Capabilities"
              variant="comma"
            />`
})
