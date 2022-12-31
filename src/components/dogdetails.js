import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';



function DogDetails(props) {
    console.log(props)
     //  (Navigate : Forward to next page)
    let navigate = useNavigate();

    const [dogs, setDogs] = useState([])
    const [imageView, setImageView] = useState('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then((value) => value.json())
            .then((data) => { setDogs(data && data.message && Object.keys(data.message)); })
    }, [])


//    (using Function : Showing Images)
    function view(id) {
        console.log(id)
        fetch(`https://dog.ceo/api/breed/${dogs[id]}/images/random`)
            .then((value) => value.json())
            .then((data) => {
                console.log(data.message)
                setImageView(data.message)
            }
            )
    } 
    function logout() {
        localStorage.setItem("sign-In", false)
        navigate('/')
    }
    return (

        <div className="container-fluid bg-light">
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home" className="me-5"> <h3><b>Breeds </b></h3> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <button className="bg-dark text-white px-3 py-2" onClick={logout} >Logout</button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="row ">
                <div className="col-md-6  ">
                    <div className="heading d-flex mb-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGMPOoJafeZYY4HOMj4Abv-LHSLHC2DzEneA&usqp=CAU" className="w-25" />
                        <h3 className="mt-5 px-5">See All Dogs Breeds</h3>
                    </div>
                    <div className="scroll1 mt-3">
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Dogs List</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Using Map */}
                            {dogs.map((createEle, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{createEle}</td>
                                        <th><button onClick={() => view(index)} className="view-btn border-0">View</button></th>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </Table>
                   </div>
                </div>
                {/* image show  */}
                <div className="col-md-6 mt-5 pt-5 text-center">
                    <div className="dog-img mt-4">
                        <h1 className=" text-center">Dogs Images</h1>
                        <img src={imageView} alt="Dog_Image" className="w-75 box" />
                    </div>
                </div>
                {/* image1show  */}
            </div>
        </div>
    );

}
export default DogDetails;