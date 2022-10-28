
        import header from "/@/components/header.vue";import footer from "/@/components/footer.vue";import contact from "/@/components/contact.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/contact","slots":{"default":[{"name":"contact","data":{"componentName":"contact","pagination":true,"dynamicSourcePath":"collections/contacts"},"id":"0-contact"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","pagination":false,"dynamicSourcePath":"collections/headers"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Contact","canonical":"http://localhost:3000/contact","metaTag":{"name":{"viewport":"width=device-width, initial-scale=1.0"},"property":{"og:locale":"en_US","og:type":"website"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"footer":footer,"contact":contact,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/contact/post.js")
            })
        }    