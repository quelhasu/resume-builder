import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../../shared/Card';
import TextArea from '../../../shared/TextArea';
import TextField from '../../../shared/TextField';



const Experiences = () => {
  const dispatch = useDispatch()

  const [exp, setExp] = useState({
    date:{}
  })

  const onChange = (e) => {
    setExp({ ...exp, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <Card title="Work Experiences">
        <Card title="Add new experience" collapsed={true} >
          <form>
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
            placeholder="Paris, France"
            value={exp.location}
            name="location"
            label="Location"
            onChange={onChange}/>

          </form>
        </Card>
      </Card>
    </div>
  )
}

export default Experiences;