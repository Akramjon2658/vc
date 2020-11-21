import React from "react";

function SideNav(props){
    return <div class="col-3">
    <div class="menu-nav">
        <img src="img/alov.png" alt="" />
        <span>Лента</span>
        <a href="#"> <i class="far fa-clock"></i></a>
    </div>
    <div class="menu-item">
        <a href="#"><i class="far fa-building mr-2 ml-3"></i><span>Компании</span></a>
    </div>
    <div class="menu-item">
        <a href="#"><i class="fas fa-user-md mr-2 ml-3"></i><span>Вакансии</span></a>
    </div>
    <div class="menu-item">
        <a href="#"><i class="fas fa-calendar-week mr-2 ml-3"></i><span>Мероприятия</span></a>
    </div>
    <div class="menu-item">
        <a href="#"><i class="fas fa-retweet mr-2 ml-3"></i><span>Рейтинг vc.ru</span></a>
    </div>
    <div class="menu-item">
        <a href="#"><i class="fas fa-list mr-2 ml-3"></i><span>Подписки</span></a>
    </div>

    <div class="menu-item">

    </div>

    <div class="menu-item">
        <a href="#"><img class="mr-2 ml-3 rounded" src="https://leonardo.osnova.io/6cdffc57-5615-d791-e474-c396dbb18c8e/-/scale_crop/20x20/" alt="" /><span>Личний опыт</span></a>
    </div>
    <div class="menu-item">
        <a href="#"><img class="mr-2 ml-3 rounded" src="https://leonardo.osnova.io/960b64d1-9f1d-3b66-a65f-a4109947a1b9/-/scale_crop/20x20/" alt="" /><span>Маркитинг</span></a>
    </div>
    <div class="menu-item">
        <a href="#"><img class="mr-2 ml-3 rounded" src="https://leonardo.osnova.io/81132c2d-ddb6-0127-19d6-e1d1293194b1/-/scale_crop/20x20/" alt="" /><span>Дизайн</span></a>
    </div>
    <div class="menu-item">
        <a href="#"><img class="mr-2 ml-3 rounded" src="https://leonardo.osnova.io/3e8b2dda-7cf9-8651-c3d2-40a3cedec8d3/-/scale_crop/20x20/" alt="" /><span>Техника</span></a>
    </div>
    <div class="menu-item">
        <a href="#"><img class="mr-2 ml-3 rounded" src="https://leonardo.osnova.io/7586f4dd-34bc-d77c-d4fd-31afac5fdc80/-/scale_crop/20x20/" alt="" /><span>Карьера</span></a>
    </div>
    <div class="menu-item">
        <a href="#"><svg width="1em"  height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down mr-2 ml-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg><span>Еще 1</span></a>
    </div>
</div>
}

export default SideNav;