import React from "react"
import "./header.css";

function Header(props) {

	return (
		<div className="row">
			<div className="col-3"></div>
			<div className="col-6 mt-5">
				<div className="component-1">
					<div className="d-flex">
						<div className="info">
							<p>Обсуждаемое</p>
							<div className="tema"><img src="img/logo1.png" alt="" /><span className="img-info">Маркетинг</span><br /></div>
							<a href="#">
								"Ядекс.Браузер" добавил реклвму на страницу с вкладкаму <br />
                                        в мобилной версии - ползователи приняли её за открытый <br />
                                            сайт
                                </a><br />
							<span >Компания уже пообещала отключит такую рекламу.</span><span className="mx-2"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
							</svg><span className="ml-1 son">252</span></span>
						</div>
						<div className="img">
							<img src="img/img2.png" alt="" />
						</div>
					</div>
					<hr />
					<div className="d-flex">
						<div className="info">
							<p className="text-body">Транспорт</p>
							<div className="tema"><img src="img/logo-2.png" alt="" /><span className="img-info">Маркетинг</span><br /></div>

							<a href="#">
								BMW представила электрокар IX
                </a><br />
							<span >Заявленный запас хода на одном заряде аккумлатора - 600 км. </span><span><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
							</svg><span className="son">213</span></span>
						</div>
						<div className="img">
							<img src="img/img3.png" alt="" />
						</div>
					</div>

					<hr />

					<div className="d-flex">
						<div className="info">
							<p className="text-body">Техника</p>
							<div className="tema"><img src="img/logo3.png" alt="" /><span className="img-info">Маркетинг</span><br /></div>

							<a href="#">
								Что нового в macOS Big Sur: редизайн в стиле IOS, поддержка <br />
                                                                                ARM и Safari с передовчиком  и проверкой паролей
                </a><br />
							<span >Обновление будет доступно с 12 ноября 2020 года .</span><span className="mx-2"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
							</svg><span className="ml-1 son">177</span></span>
						</div>
						<div className="img">
							<img src="img/img4.png" alt="" />
						</div>
					</div>



				</div>

				<div className="component-2">

					<div className="d-flex">
						<div><h6>Вакансии</h6></div>
						<div> <button type="button" className="btn bg-white">Разместить</button></div>
					</div>

					<div className="mb-3">
						<span className="jirni">Руководитель отдела марке...</span><span className="aa"><img src="img/img2.1.png" alt="" />АртАйТи   Санкт-Пе   от 90 000 Р</span> <br />
					</div>
					<div className="mb-3">
						<span className="jirni">Full Stack Developer (Rea...</span><span className="aa"><img src="img/img2.2.png" alt="" />Unimanto Удалённо от 250 000 до 450 000 Р</span> <br />
					</div>
					<div className="mb-3">
						<span className="jirni">PR-менеджер</span><span className="aa"><img src="img/img2.3.png" alt="" />Bi.Zone    Москва</span><br />
            </div>
						<div className="mb-3">
							<span className="jirni">Администратор техничиской поддержки </span><span className="aa"><img src="img/img2.4.png" alt="" />Bidfox    Москва</span><br />
						</div>
						<div className="mb-2">
							<span className="jirni">Senior Full Stack Delevop...</span><span className="aa"><img src="img/img2.5.png" alt="" />iDeals.net Москва от 200 000 до 300 000 Р</span> <br />
						</div>
						<button className="btn pokazat">Показать еще <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
						</svg> </button>

					</div>


					<div className="component-3">

						<div className="nav d-flex">
							<div className="ob">Обьявление на vc.ru</div>
							<div className="otl">Отключить рекламу</div>
						</div>

						<div className="header d-flex">
							<div className="d-flex">
								<div className="telegram"><img src="img/telegram.png" alt="" /></div>
								<div className="teleg-info"><h5 className="m-0">Маркетинг для бизнеса</h5>
									<p>Новый Telegram-канал - @slononru</p>
								</div>
							</div>
							<div><button className="btn bg-white">Перейти</button></div>
						</div>

						<div className="footer">
							<div className="d-flex ">
								<div className="d-flex">
									<div><img src="img/logo3.1.png" alt="" /></div>
									<div><h6>Торговля</h6></div>
									<div className="svet">Светлана Никонова</div>
									<div className="svet">4 часа</div>
								</div>
								<div><button type="button" className="btn"><img src="img/3nuqtaa.png" alt="" /></button></div>
							</div>

							<h4>
								Погоня за скидками, или на чём экономят россияне в
								пандемийный год
            </h4>

							<p style={{fontSize: 15}}>
								Подробно о том какие товары россияне чаще всего покупают со скидкой в <br />
                                                                                                                                            2020 году что заказывают на китайских том какие товары россияне <br />
                                                                                                                                                чаще всего покупают со скидкой.
            </p>
							<div className="d-flex justify-content-between">
								<div>
									<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
									</svg><span style={{fontSize: 12}}>18</span>
									<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bookmark ml-2 mr-1 " fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
									</svg><span style={{fontSize: 12}}>14</span>
									<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-repeat ml-2 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
										<path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
									</svg><span style={{fontSize: 12}}>2</span>
								</div>
								<div>
									<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
									</svg><span style={{color: "#19A949", fontWeight: 500}}>27</span>
									<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
									</svg>
								</div>
							</div>
						</div>

					</div>

					<div className="component-4">
						<div className="p-2">
							<div className="d-flex justify-content-between ">
								<div className="d-flex">
									<div><img src="img/logo4.1.png" alt="" /></div>
									<div><h6>Трибуна</h6></div>
									<div className="svet">Lev Klebenov </div>
									<div className="svet">4 часа</div>
								</div>
								<div><button type="button" className="btn"><img src="img/3nuqtaa.png" alt="" /></button></div>
							</div>

							<h5 style={{fontSize: 17}}>
								"Умный" помошник по поиску жилья HomeBro теперь
								работает и в Петербурге
            </h5>
							<p style={{fontSize: 14}}>
								Самым популяпным вопросом в моей <a href="#">статье</a> про поиску жилья
                <a href="#">HomeBro</a> было "Можно такое в Питере?". Можно! Совсем недавно Бро
                заработал и в СПб, welcome!
            </p>
						</div>

						<img src="img/img40.png" alt="" />

						<div className="px-2">
							<div className="d-flex justify-content-between my-2">
								<div>
									<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat mx-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
									</svg><span style={{fontSize:12}}>105</span>
									<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bookmark ml-2 mr-1 " fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
									</svg><span style={{fontSize:12}}>78</span>
									<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-repeat ml-2 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
										<path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
									</svg><span style={{fontSize:12}}></span>
								</div>
								<div>
									<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
									</svg><span style={{color: "#19A949", fontWeight: 500}}>92</span>
									<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-up mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
									</svg>
								</div>
							</div>
						</div>

					</div>


				</div>
				<div className="col-3"></div>
			</div>
)

}

export default Header;