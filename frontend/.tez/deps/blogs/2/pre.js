
        import header from "/@/components/header.vue";import footer from "/@/components/footer.vue";import blog from "/@/components/blog.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/blogs/2","slots":{"default":[{"name":"blog","data":{"slug":"/blogs/2","title":"Blog 2","description":"This is my Second Blog\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum","componentName":"blog","updatedAt":"2022-10-07T09:13:04.889Z","image":{"name":"image_3.jpg","alternativeText":"image_3.jpg","caption":"image_3.jpg","width":800,"height":533,"formats":{"thumbnail":{"name":"thumbnail_image_3.jpg","hash":"thumbnail_image_3_dc87b76e9e","ext":".jpg","mime":"image/jpeg","width":235,"height":156,"size":8.26,"url":"/uploads/thumbnail_image_3_dc87b76e9e.jpg"},"medium":{"name":"medium_image_3.jpg","hash":"medium_image_3_dc87b76e9e","ext":".jpg","mime":"image/jpeg","width":750,"height":500,"size":49.45,"url":"/uploads/medium_image_3_dc87b76e9e.jpg"},"small":{"name":"small_image_3.jpg","hash":"small_image_3_dc87b76e9e","ext":".jpg","mime":"image/jpeg","width":500,"height":333,"size":26.29,"url":"/uploads/small_image_3_dc87b76e9e.jpg"}},"hash":"image_3_dc87b76e9e","ext":".jpg","mime":"image/jpeg","size":55.14,"url":"/uploads/image_3_dc87b76e9e.jpg","updatedAt":"2022-10-06T10:45:36.293Z"}},"id":"0-blog"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","pagination":false,"dynamicSourcePath":"collections/headers"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Blog","canonical":"http://localhost:3000/blogs/2","metaTag":{"name":{"viewport":"width=device-width, initial-scale=1.0"},"property":{"og:locale":"en_US","og:type":"website"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"footer":footer,"blog":blog,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/blogs/2/post.js")
            })
        }    