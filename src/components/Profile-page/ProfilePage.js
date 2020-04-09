    import React, {useEffect} from 'react';
    import {cn} from "@bem-react/classname";
    import './ProfilePage.scss'
    import {useDispatch, useSelector} from "react-redux";
    import {userActions} from "../../redux/user/userSlice";
    import {getUserSelector} from "../../redux/user/userSelectors";
    import moment from "moment";
    import {authActions} from "../../redux/auth/authSlice";
    import {Spinner} from "../common/Spinner/Spinner";
    import Img from 'react-image';
    import StarRatings from 'react-star-ratings';

    const profilePageCn = cn('user-page');
    export const ProfilePage = props => {
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(userActions.getUser())
        }, [dispatch]);
        const user = useSelector(getUserSelector);
        const skills = user && user.skills && user.skills.map((el) => {
            return <span className={profilePageCn('skill')}>{el.name}</span>
        })
        const links = user && user.references && user.references.map((el) => {
            return <span className={profilePageCn('links')}><a href={el.reference}>{el.name}</a></span>
        })
        return (<div className={profilePageCn('container')}>
            {user && user.firstName &&  <div className={profilePageCn('icon')}>
             <Img
                    src={user.photo}
                    loader={<Spinner/>}
                    unloader={<div>Нет фото</div>}
                    container={children => {
                        return <div className={profilePageCn('photo')}>{children}</div>
                    }}
                />
                <div className={profilePageCn('rating')}>
                    <StarRatings
                    rating={user.rating}
                    starDimension="30px"
                    starSpacing="5px"
                    starRatedColor={'#e9d22d'}
                    /></div>
                <div className={profilePageCn('exit')} onClick={(e) => {
                    localStorage.clear();
                    dispatch(authActions.logout());
                    window.location.reload();
                }}>Выйти
                </div>
            </div>}
            {user.firstName &&
            <div className={profilePageCn('base-info')}>
                <div className={profilePageCn('name')}>{`${user.firstName} ${user.lastName}`}</div>
                <div>Родился {moment(user.birthDay * 1000).format('LLL')}</div>
                <div>{`Студент ${user.educationInfo.course} курса. Факультет ${user.educationInfo.faculty}`}</div>
            </div>}
            {user && user.skills &&
            <div className={profilePageCn('info')}>
                <div className={profilePageCn('skills-container')}>
                    <span className={profilePageCn('capture')}>Ключевые навыки</span>: {skills}</div>
                <div className={profilePageCn('summary')}>
                    <span className={profilePageCn('capture')}>Основная информация:</span> {user.summary}
                </div>
                <div className={profilePageCn('links')}>
                    <span className={profilePageCn('capture')}>Ссылки:</span> {links}
                </div>

            </div>}

        </div>)
    }
    // birthDay: 938779200
    // educationInfo: {faculty: "КСиС", course: 3, speciality: "ПОИТ", group: "751006"}
    // firstName: "Никита"
    // id: 824
    // lastName: "Пилинко"
    // middleName: "Алексеевич"
    // photo: null
    // rating: 0
    // references: []
    // settings: {isShowRating: false, isPublicProfile: false, isSearchJob: false}
    // skills: []
    // summary: null
