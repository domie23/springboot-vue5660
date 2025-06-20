const base = {
    get() {
        return {
            url : "http://localhost:8080/lajifenleihuishou/",
            name: "lajifenleihuishou",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/lajifenleihuishou/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "垃圾分类回收系统"
        } 
    }
}
export default base
