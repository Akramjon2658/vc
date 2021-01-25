import React from "react";
import s from "./content.module.css";

function Content({posts, setItemCount, ...props}){
console.log({posts})
    return (
    <div className="col-6">
        <div className={s.jadval}>
        <span className={s.sana}>12 ноября, четверг </span>
        <div onClick={() => props.setHide(prev => !prev)} className={s.ss}>
            <span className={s.svernut}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                </svg><span className="ml-1">свернут</span> 
            </span>
        </div>
        {
            !props.hide && posts.map(mp => {
                    return <div className="d-flex mt-3">
                    <div className={s.soat}>
                        <p className="mx-2">{mp.createdDate}</p>
                    </div>
                    <div>
                        <div>
                            <a href="#">
                                <h6>{mp.title}</h6>
                            </a>
                        </div>
        
                    </div>
                </div>
            })
        }
        {!props.hide && <div onClick={() => setItemCount(prev => prev + 4)} className="pokazat">
            <span>Показать еще</span>
            <span className="ml-2">
                <svg width="1em"
                    height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
            </span>
        </div>
        }
        </div>
    </div>
)}

export default Content;