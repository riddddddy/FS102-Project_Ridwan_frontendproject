import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

const About = () => {

  const [name, setName] = useState({ name: '', age: '', hobby: '', bio: '' })

  const staffInfo = [
    {
      name: 'Ridwan',
      age: 30,
      hobby: 'playing football',
      bio: 'As a web developer, I thrive on tackling complex challenges in the digital realm. I combine creativity with technical expertise to craft innovative solutions, ensuring seamless user experiences and functional websites.'
    },
    {
      name: 'Zak',
      age: 22,
      hobby: 'gardening',
      bio: 'Transforming lines of code into visually appealing and interactive websites is my forte. I am adept at weaving together languages like HTML, CSS, and JavaScript, sculpting digital landscapes that not only look good but also function flawlessly.'
    }, {
      name: 'Alex',
      age: 31,
      hobby: 'playing pokemon',
      bio: 'The rapidly evolving tech landscape keeps me on my toes. As a web developer, I embrace constant learning, exploring new frameworks, tools, and techniques. Staying updated is not just a choice but a necessity in this dynamic field.'
    }, {
      name: 'Greg',
      age: 27,
      hobby: 'study A-maths',
      bio: 'Effective communication and collaboration are the keystones of my work. I thrive in team environments, where ideas flow freely, and collective efforts lead to the development of engaging websites. My adaptability and openness make me a valuable asset in any web development team.'
    },
  ]


  const nameHandler = (e) => {

    const abc = staffInfo.filter(item => {
      return e === item.name
    })

    console.log(abc)
    setName(abc)

  }

  return (
    <div className='container'>
      <h1 className='mt-5 mb-5'>Our Story</h1>
      <p className='fs-5'>
        A group of passionate friends embarked on an exciting web development journey, diving into the world of coding and design. Fueled by creativity and collaboration, they ventured into their first ecommerce project, channeling their newfound skills into building an innovative online store. Through dedication and teamwork, these budding developers transformed their ideas into a fully functional platform, marking the beginning of their entrepreneurial adventure and a testament to the power of shared dreams and technical skills.
      </p>

      {/* Card section */}
      <div className='mb-5 row justify-content-center gap-4'>
        <Card onClick={() => nameHandler('Ridwan')} style={{ width: '27rem', cursor:'pointer' }} className='col-lg col-sm-12'>
          <Card.Img variant="top" src="https://robohash.org/ridwan.png" />
          <Card.Body>
            <Card.Title><h3>Ridwan</h3></Card.Title>
            <Card.Text>
              Web Developer
            </Card.Text>
          </Card.Body>
        </Card>

        <Card onClick={() => nameHandler('Zak')} style={{ width: '27rem', cursor:'pointer' }} className='col-lg col-sm-12'>
          <Card.Img variant="top" src="https://robohash.org/zak.png" />
          <Card.Body>
            <Card.Title><h3>Zak</h3></Card.Title>
            <Card.Text>
              Front End Developer
            </Card.Text>
          </Card.Body>
        </Card>

        <Card onClick={() => nameHandler('Alex')} style={{ width: '27rem', cursor:'pointer' }} className='col-lg col-sm-12'>
          <Card.Img variant="top" src="https://robohash.org/alex.png" />
          <Card.Body>
            <Card.Title><h3>Alex</h3></Card.Title>
            <Card.Text>
              Back End Developer
            </Card.Text>
          </Card.Body>
        </Card>

        <Card onClick={() => nameHandler('Greg')} style={{ width: '27rem', cursor:'pointer' }} className='col-lg col-sm-12'>
          <Card.Img variant="top" src="https://robohash.org/siti.png" />
          <Card.Body>
            <Card.Title><h3>Greg</h3></Card.Title>
            <Card.Text>
              Manager
            </Card.Text>
          </Card.Body>
        </Card>

      </div>

      <div>
        <h3 className='text-center text-capitalize'>Information about our awesome staff</h3>
        <p className='text-center mb-5'>(Check us out when you click the card!)</p>

        {name.name !== '' && <div>
          <h4>Name: {name[0].name} </h4>
          <h4>Age: {name[0].age}</h4>
          <h4>Hobby: {name[0].hobby} </h4>
          <h4>Bio: {name[0].bio} </h4>
        </div> }


        




      </div>


    </div>
  )
}

export default About