import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import './FreeRooms.scss'
import {cn} from "@bem-react/classname";
import {MyDropdown} from "../common/Dropdown/Dropdown";
import {Form} from "react-bootstrap";
import {buildingMock} from "./buildingMock";
import {freeAudActions} from '../../redux/freeAud/freeAudSlice';
import {getAudsSelector} from "../../redux/freeAud/freeAudSelectors";
import './FreeRooms.scss';
import {lessons} from "./ClassesTimeMock";
import {MyDatePicker} from "../common/DatePicker/DatePicker";

const roomsCN = cn('free-rooms');
export const FreeRooms = () => {
    const freeLabs = [];
    const freePractice = [];
    useSelector(getAudsSelector).forEach((el) => {
        if (el.type === "LESSON_PRACTICE") freePractice.push((<div className={roomsCN('result-item')}>{el.name}</div>));
        if (el.type === "LESSON_LAB") freeLabs.push((<div className={roomsCN('result-item')}>{el.name}</div>));
    });

    const dispatch = useDispatch();
    const [formData, setForm] = useState({building: 1, floorOptions: buildingMock()[1], floor: null, date: new Date(), time: ''})
    return (<div className={roomsCN('container')}>
        <Form variant="flat" className={roomsCN('form')} onSubmit={(e) => {
            e.preventDefault()
            let form = e.target;
            let building = form.elements[0].value;
            let floor = form.elements[1].value;
            let time = lessons.find((el) => el.name === form.elements[2].value);
            let date = formData.date;
            console.log(form)
            dispatch(freeAudActions.getFreeAuds({building, floor, time: time.value, date}));
        }}>
            <div className={roomsCN('housing-input')}>
                <MyDropdown items={Object.keys(buildingMock())} capture={'Номер корпуса'} onChange={(e) => {
                    setForm({
                        ...formData,
                        building: e.target.value,
                        floorOptions: buildingMock()[e.target.value]
                    })
                }}/>
                <MyDropdown capture={'Этаж'} items={formData.floorOptions}/>
                <MyDropdown capture={'Пара'} items={lessons}/>

            </div>
            <MyDatePicker date={formData.date} setDate={(date) => {
    setForm({
        ...formData,
        date
    })
}}/>

            <input className={roomsCN('find-button')} type='submit' value='Поиск'/>
        </Form>
        <div className={roomsCN('results-container')}>
            {freePractice.length>0 && <div className={roomsCN('free-practice result-type')}>
                <p className={roomsCN('capture')}>Аудитории для практичнских занятий</p>
                {freePractice}
            </div>}
            {freeLabs.length>0 && <div className={roomsCN('free-labs result-type')}>
                <p className={roomsCN('capture')}>Аудитории для лабораторных занятий</p>
                {freeLabs}</div>}
        </div>
    </div>)
}
