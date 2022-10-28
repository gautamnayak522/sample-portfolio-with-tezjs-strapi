
        import header from "/@/components/header.vue";import footer from "/@/components/footer.vue";import projects from "/@/components/projects.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/projects","slots":{"default":[{"name":"projects","data":{"componentName":"projects","pagination":true,"dynamicSourcePath":"collections/projects"},"id":"0-projects"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","pagination":false,"dynamicSourcePath":"collections/headers"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Projects","canonical":"http://localhost:3000/projects","metaTag":{"name":{"viewport":"width=device-width, initial-scale=1.0"},"property":{"og:locale":"en_US","og:type":"website"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"footer":footer,"projects":projects,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/projects/post.js")
            })
        }    