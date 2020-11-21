export const AuthAPI = {
    getAuthUser(){
        return {
            name: "John Doe",
            age: 18,
            role: 2
        }
    }
}
export const PostAPI = {
    getPosts(){
        return {
            messagePost: [
                {
                    createdDate: "17:04",
                    title: "Одноклассники» запустили алгоритм для оценки качества групп на основе контента и отклика аудитории"         
                },
                {
                    createdDate: "16:40",
                    title: "Ozon и «Сбер» уладили конфликт после требования банка выплатить 1 млрд рублей из-за разорванного соглашения"         
                },
                {
                    createdDate: "16:30",
                    title: "Axiom Space подписала контракты с первыми космическими туристами — они отправятся на МКС на корабле SpaceX"         
                },
                {
                    createdDate: "16:30",
                    title: "Axiom Space подписала контракты с первыми космическими туристами — они отправятся на МКС на корабле SpaceX"         
                },
            ]
        }
    }
}