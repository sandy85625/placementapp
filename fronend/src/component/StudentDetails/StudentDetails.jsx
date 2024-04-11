import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { IoMdCloudUpload } from "react-icons/io";
import './StudentDetails.css'
import { FaEdit } from "react-icons/fa";
export default function profile() {
    return (
        <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="10" className="mb-4 mb-lg-0">
                        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                            <MDBRow className="g-0">
                                <MDBCol md="4" className="gradient-custom text-center text-white"
                                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                        alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                                    <MDBTypography tag="h5">Gopika</MDBTypography>
                                    <MDBCardText> Btech-Cse</MDBCardText>
                                    <MDBIcon far icon="edit mb-5" />
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody className="p-4">
                                        <MDBTypography tag="h6">Information</MDBTypography>
                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Email</MDBTypography>
                                                <MDBCardText className="text-muted">info@example.com</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Phone</MDBTypography>
                                                <MDBCardText className="text-muted">123 456 789</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>

                                        <MDBTypography tag="h6">Department Details</MDBTypography>
                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Sem</MDBTypography>
                                                <MDBCardText className="text-muted">6</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Year</MDBTypography>
                                                <MDBCardText className="text-muted">3rd</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBTypography tag="h6">Project Details</MDBTypography>
<hr className="mt-0 mb-4" />
<MDBRow className="pt-1">
    <MDBCol size="6" className="mb-3">
        <MDBTypography tag="h6">Project Title</MDBTypography>
        <MDBCardText className="text-muted">Your Project Title</MDBCardText>
    </MDBCol>
    <MDBCol size="6" className="mb-3">
        <MDBTypography tag="h6">Description</MDBTypography>
        <MDBCardText className="text-muted">Briefly explain the project</MDBCardText>
    </MDBCol>
    

                                           
                                        </MDBRow>
                                        <MDBTypography tag="h6">Internship Details</MDBTypography>
<hr className="mt-0 mb-4" />
<MDBRow className="pt-1">
    <MDBCol size="6" className="mb-3">
        <MDBTypography tag="h6">Company</MDBTypography>
        <MDBCardText className="text-muted">Company Name</MDBCardText>
    </MDBCol>
   
    <MDBCol size="6" className="mb-3">
        <MDBTypography tag="h6">Duration</MDBTypography>
        <MDBCardText className="text-muted">Start Date - End Date</MDBCardText>
    </MDBCol>
    {/* Add more columns as needed for additional details */}
</MDBRow>
<MDBTypography tag="h6">Achievements</MDBTypography>
<hr className="mt-0 mb-4" />
<MDBRow className="pt-1">
    <MDBCol size="6" className="mb-3">
        <MDBTypography tag="h6">Title</MDBTypography>
        <MDBCardText className="text-muted">Achievement Title</MDBCardText>
    </MDBCol>
    <MDBCol size="6" className="mb-3">
        <MDBTypography tag="h6">Date</MDBTypography>
        <MDBCardText className="text-muted">Achievement Date</MDBCardText>
    </MDBCol>
    {/* Add more columns as needed for additional details */}
</MDBRow>

                                        <div className="d-flex justify-content-start">
                                            <button className='me-3' onClick={() =>{alert("edit button")}} style={{ width: '250px', height: '80px' }} color='secondary'>
                                                <FaEdit /> Edit
                                            </button>
                                            <button className='me-1' style={{ width: '250px', height: '80px' }} color='secondary'>
                                                <IoMdCloudUpload /> <input type="file" />
                                            </button>


                                        </div>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}