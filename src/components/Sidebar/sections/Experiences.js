import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../../shared/Card';
import TextArea from '../../../shared/TextArea';
import TextField from '../../../shared/TextField';
import ButtonIcon from '../../../shared/ButtonIcon';

import { createExp } from '../../../redux/experience'


const Experiences = () => {
  const dispatch = useDispatch()

  const [exp, setExp] = useState({
    date: {}
  })

  const onChange = (e) => {
    setExp({ ...exp, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createExp(exp))
    
  }

  return (
    <div>
      <Card title="Work Experiences">
        <Card title="Add new experience" collapsed={true} >
          <form onSubmit={handleSubmit}>
            <TextField
              placeholder="Data Engineer"
              value={exp.title}
              name="title"
              label="Title"
              onChange={onChange}
            />
            <TextField
              placeholder="Intern"
              value={exp.type}
              name="type"
              label="Type"
              onChange={onChange}
            />
            <div className="grid grid-cols-2 col-gap-4">
              <TextField
                classname="flex flex-col"
                placeholder="apr. 2019"
                value={exp.date.in}
                name="start_date"
                label="Start date"
                onChange={onChange}
              />
              <TextField
                classname="flex flex-col"
                placeholder="aug. 2019"
                value={exp.date.out}
                name="end_date"
                label="End date"
                onChange={onChange}
              />
            </div>
            <div className="grid grid-cols-2 col-gap-4">
              <TextField
                classname="flex flex-col"
                placeholder="Amazon"
                value={exp.company}
                name="company"
                label="Company"
                onChange={onChange}
              />
              <TextField
                classname="flex flex-col"
                placeholder="Paris, France"
                value={exp.location}
                name="location"
                label="Location"
                onChange={onChange}
              />
            </div>
            <TextArea
              placeholder="Description..."
              value={exp.desc}
              name="description"
              label="Description"
              onChange={onChange} />

            <div className="flex justify-end ">
              <ButtonIcon type="submit" value="Add" color="green" px="4">
               </ButtonIcon>

              <ButtonIcon color="red" px="4">
                <path fill="currentcolor" d="M16.471,5.962c-0.365-0.066-0.709,0.176-0.774,0.538l-1.843,10.217H6.096L4.255,6.5c-0.066-0.362-0.42-0.603-0.775-0.538C3.117,6.027,2.876,6.375,2.942,6.737l1.94,10.765c0.058,0.318,0.334,0.549,0.657,0.549h8.872c0.323,0,0.6-0.23,0.656-0.549l1.941-10.765C17.074,6.375,16.833,6.027,16.471,5.962z"></path>
                <path fill="currentcolor" d="M16.594,3.804H3.406c-0.369,0-0.667,0.298-0.667,0.667s0.299,0.667,0.667,0.667h13.188c0.369,0,0.667-0.298,0.667-0.667S16.963,3.804,16.594,3.804z"></path>
                <path fill="currentcolor" d="M9.25,3.284h1.501c0.368,0,0.667-0.298,0.667-0.667c0-0.369-0.299-0.667-0.667-0.667H9.25c-0.369,0-0.667,0.298-0.667,0.667C8.583,2.985,8.882,3.284,9.25,3.284z"></path>
              </ButtonIcon>
            </div>
          </form>
        </Card>
      </Card>
    </div>
  )
}

export default Experiences;