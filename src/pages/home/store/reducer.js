


import { fromJS } from 'immutable'


let defaultState = fromJS({
    topicList:[
        {
			id: 1,
			title: "社会热点",
			imgUrl: "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
		},
		{
		
			id: 2,
			title: "手绘",
			imgUrl: "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
		},
		{
			id: 3,
			title: "java",
			imgUrl: "https://upload.jianshu.io/collections/images/2099/6-130122153923351_%E5%89%AF%E6%9C%AC.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"

		},
		{
			id: 4,
			title: "unity",
			imgUrl: "https://upload.jianshu.io/collections/images/232356/f53b97358eb374a5b69071f3f938d861.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"

		},
		{
			id: 5,
			title: "react",
			imgUrl: "https://upload.jianshu.io/collections/images/264146/logo-250x250.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"

		},
		{
			id: 6,
			title: "JavaScript",
			imgUrl: "https://upload.jianshu.io/collections/images/509759/JS.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"

		}
    ]
})
export default (state = defaultState, action) => {



    switch(action.type){
 
        default :
        return state;

    }

 


    
 
}