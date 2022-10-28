
        import header from "/@/components/header.vue";import footer from "/@/components/footer.vue";import about from "/@/components/about.vue";import skills from "/@/components/skills.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/about","slots":{"default":[{"name":"about","data":{"componentName":"about","pagination":true,"dynamicSourcePath":"collections/abouts"},"id":"0-about"},{"name":"skills","data":{"componentName":"skills","pagination":true,"dynamicSourcePath":"collections/skills"},"id":"1-skills"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","pagination":false,"dynamicSourcePath":"collections/headers"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"About","canonical":"http://localhost:3000/about","metaTag":{"name":{"viewport":"width=device-width, initial-scale=1.0"},"property":{"og:locale":"en_US","og:type":"website"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"footer":footer,"about":about,"skills":skills,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/about/post.js")
            })
        }    