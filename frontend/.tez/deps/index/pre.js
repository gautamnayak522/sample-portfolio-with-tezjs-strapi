
        import header from "/@/components/header.vue";import footer from "/@/components/footer.vue";import home from "/@/components/home.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/","slots":{"default":[{"name":"home","data":{"componentName":"home","pagination":true,"dynamicSourcePath":"collections/homes"},"id":"0-home"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","pagination":false,"dynamicSourcePath":"collections/headers"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Home","canonical":"http://localhost:3000/","metaTag":{"name":{"viewport":"width=device-width, initial-scale=1.0"},"property":{"og:locale":"en_US","og:type":"website"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"footer":footer,"home":home,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/index/post.js")
            })
        }    