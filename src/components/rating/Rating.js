import React, {useEffect} from 'react'
import {useDispatch} from "react-redux";
import {userActions} from "../../redux/user/userSlice";
import {useSelector} from "react-redux";
import {cn} from "@bem-react/classname";
import {getUserMarksSelector} from "../../redux/user/userSelectors";
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

const ratingCn = cn('rating')
export const Rating = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.getMarks())
  }, [dispatch])
  let marks = useSelector(getUserMarksSelector);
  let marksArr = marks.semesters.slice().sort((a, b) => a.number > b.number ? 1 : -1);
  let data = marks.semesters.map((el) => {
    return {name: "sem" +  el.number || 0, uv: el.averageMark || 0}
  })
  console.log(data);

  return (<div className={ratingCn('container')}>
    <LineChart
      width={400}
      height={400}
      data={data}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <Line  dataKey="uv" stroke="#8884d8" />
      <XAxis dataKey="name" />
      <YAxis />

      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Tooltip />

      <Legend />
    </LineChart>
  </div>)
}