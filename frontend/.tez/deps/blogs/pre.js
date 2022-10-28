
        import header from "/@/components/header.vue";import footer from "/@/components/footer.vue";import blogs from "/@/components/blogs.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/blogs","slots":{"default":[{"name":"blogs","data":{"componentName":"blogs","pagination":true,"dynamicSourcePath":"collections/blogs"},"id":"0-blogs"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","pagination":false,"dynamicSourcePath":"collections/headers"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Blogs","canonical":"http://localhost:3000/blogs","metaTag":{"name":{"viewport":"width=device-width, initial-scale=1.0"},"property":{"og:locale":"en_US","og:type":"website"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"footer":footer,"blogs":blogs,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/blogs/post.js")
            })
        }    