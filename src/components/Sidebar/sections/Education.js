import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../../shared/Card';
import TextArea from '../../../shared/TextArea';
import TextField from '../../../shared/TextField';
import ButtonIcon from '../../../shared/ButtonIcon';

import { moveEdu, createEdu, deleteEdu, modifyEdu } from '../../../redux/educations'

const Educations = () => {

  const { educations } = useSelector(state => ({
    educations: state.educations
  }))


  return (
    <div>
      <Card title="Educations">
        {educations.map((item, index) => (
          <Form key={item.key} item={item} collapsed={true} modify={true} index={index} arrLength={educations.length} />
        ))}
        <Form collapsed={true} modify={false} />
      </Card>
    </div>
  )
}

const Form = ({ collapsed = false, item = {}, modify = false, index = -1, arrLength = 0 }) => {
  const dispatch = useDispatch()

  const [edu, setEdu] = useState(item)

  const [active, setActive] = useState(collapsed)

  const onChange = (e) => {
    setEdu({ ...edu, [e.target.name]: e.target.value })
  }

  const handleMove = (e, offset) => {
    dispatch(moveEdu(edu, offset))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modify) dispatch(modifyEdu(edu))
    else {
      dispatch(createEdu(edu))
      setEdu({})
    }
  }

  const handleDelete = (e) => {
    dispatch(deleteEdu(edu))
  }

  return (
    <Card title={edu.univ || "Add New Education"} secondary={edu.type || ""} collapsed={active}>
      <form onSubmit={handleSubmit}>
        <TextField
          placeholder="Politecnico di Milano" value={edu.univ}
          name="univ" label="University"
          onChange={onChange}
        />
        <TextField
          placeholder="Master of Science" value={edu.type}
          name="type" label="Type"
          onChange={onChange}
        />
        <div className="grid grid-cols-2 col-gap-4">
          <TextField
            classname="flex flex-col"
            placeholder="2019" value={edu.start_date}
            name="start_date" label="Start date"
            onChange={onChange}
          />
          <TextField
            classname="flex flex-col"
            placeholder="2020" value={edu.end_date}
            name="end_date" label="End date"
            onChange={onChange}
          />
        </div>
        <TextField
          classname="flex flex-col"
          placeholder="Milan, Italie" value={edu.location}
          name="location" label="Location"
          onChange={onChange}
        />
        <TextArea
          placeholder="Description..." value={edu.desc}
          name="desc" label="Description"
          onChange={onChange} />
        <p class="text-gray-600 text-xs italic text-left ">
          You can use <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" className="px-1">
            Markdown syntax </a> to write your description.
        </p>



        {modify ? (
          <div className="flex justify-between ">
            <div className="flex">
              <ButtonIcon type="submit" value="Apply" color="blue" px="4" />
              <ButtonIcon color="red" px="4" onClick={handleDelete}>
                <path fill="currentcolor" d="M16.471,5.962c-0.365-0.066-0.709,0.176-0.774,0.538l-1.843,10.217H6.096L4.255,6.5c-0.066-0.362-0.42-0.603-0.775-0.538C3.117,6.027,2.876,6.375,2.942,6.737l1.94,10.765c0.058,0.318,0.334,0.549,0.657,0.549h8.872c0.323,0,0.6-0.23,0.656-0.549l1.941-10.765C17.074,6.375,16.833,6.027,16.471,5.962z"></path>
                <path fill="currentcolor" d="M16.594,3.804H3.406c-0.369,0-0.667,0.298-0.667,0.667s0.299,0.667,0.667,0.667h13.188c0.369,0,0.667-0.298,0.667-0.667S16.963,3.804,16.594,3.804z"></path>
                <path fill="currentcolor" d="M9.25,3.284h1.501c0.368,0,0.667-0.298,0.667-0.667c0-0.369-0.299-0.667-0.667-0.667H9.25c-0.369,0-0.667,0.298-0.667,0.667C8.583,2.985,8.882,3.284,9.25,3.284z"></path>
              </ButtonIcon>
            </div>
            <div className="flex">
              <ButtonIcon onClick={e => handleMove(e, -1)} color="gray" value="Up" px="4" disabled={index == 0} />
              <ButtonIcon onClick={e => handleMove(e, 1)} color="gray" value="Down" px="4" disabled={index == arrLength - 1} />
            </div>
          </div>
        ) : (
            <div className="flex justify-start ">
              <ButtonIcon className="" type="submit" value="Add" color="green" px="4" />
            </div>
          )
        }

      </form>
    </Card >
  )
}

export default Educations;