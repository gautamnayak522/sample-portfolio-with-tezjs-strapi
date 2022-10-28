
        import header from "/@/components/header.vue";import footer from "/@/components/footer.vue";import abouttezjs from "/@/components/about-tezjs.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/about-tezjs","slots":{"default":[{"name":"about-tezjs","data":{"componentName":"about-tezjs"},"id":"0-about-tezjs"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","pagination":false,"dynamicSourcePath":"collections/headers"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"About TezJS","canonical":"http://localhost:3000/about-tezjs","metaTag":{"name":{"viewport":"width=device-width, initial-scale=1.0","description":"Brief Insight on TezJS"},"property":{"og:locale":"en_US","og:type":"website"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"footer":footer,"about-tezjs":abouttezjs,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/about-tezjs/post.js")
            })
        }    