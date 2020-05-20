import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {userActions} from "../../redux/user/userSlice";
import {useSelector} from "react-redux";
import {cn} from "@bem-react/classname";
import {getUserMarksSelector} from "../../redux/user/userSelectors";
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {RadioButtonGroup} from "../common/RadioButton/RadioButtonGroup";
import {mapMarks, semesters, tableHead} from "./semesters";
import './Rating.scss'
import {Table} from "../common/Table/Table";

const ratingCn = cn('rating')
export const Rating = () => {
  const isDesktop = window.matchMedia("(min-width: 1023px)").matches;
  const dispatch = useDispatch();
  const [mode, setMode] = useState('overview');
  useEffect(() => {
    dispatch(userActions.getMarks())
  }, [dispatch])
  let marks = useSelector(getUserMarksSelector);
  let data = marks.semesters.map((el) => {
    if (el.averageMark > 0) return {name: "S " + el.number || 0, 'Average mark': el.averageMark || 0}
    return {name: "S " + el.number};
  })
const content = (mode === 'overview') ? (<><div> Overall average: {marks.averageMark}</div>    <LineChart
  width={isDesktop? 500 : window.innerWidth - 32}
  height={isDesktop? 400 : window.innerWidth - 32}
  data={data}
  margin={isDesktop? {
    top: 5, right: 30, left: 20, bottom: 5,
  } : {}}
>
  <Line dataKey="Average mark" stroke="#8884d8"/>
  <XAxis domain={[1, 8]} dataKey="name"/>
  <YAxis interval={'preserveStart'} domain={[0, 11]} tickCount={12}/>
  <CartesianGrid style={{opacity: 0.2}} stroke="#ccc" strokeDasharray="5 5"/>
  <Tooltip/>
  <Legend/>
</LineChart></>) : (
  <>
    <div> Average mark: {marks.semesters[mode -1].averageMark}</div>
    <div className={ratingCn('table-container')}>
      <Table data={marks.semesters[mode -1].marks.map(m => mapMarks(m))} head={tableHead}/>

    </div>
  </>)

  return (<div className={ratingCn('container')}>
    <div><RadioButtonGroup check={setMode} checked={mode} name={"ratingOptions"} items={semesters}/>
    </div>
    {content}
  </div>)
}