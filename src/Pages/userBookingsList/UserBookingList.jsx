import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const UserBookingList = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/booking?email=${user?.email}`)
            .then(res => {
                setBookings(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleDelete = (id) => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: true
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/api/v1/booking/${id}`)
                    .then(() => {
                        setBookings(bookings.filter(booking => booking._id !== id));
                    })
                    .catch(err => {
                        console.log(err);
                    });
                
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            } else if (

                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                   
                    icon: "error"
                });
            }
        });

    };

    const toggleStatus = (id) => {
        const updatedBookings = bookings.map(booking => {
            if (booking._id === id) {
                // Toggle status for demonstration purposes
                booking.status = booking.status === "Pending" ? "Confirmed" : "Pending";
            }
            return booking;
        });
        setBookings(updatedBookings);
    };

    return (
        <div className="container mt-5">
            <h1>All Booking List</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Service Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Email</th>
                        <th>Customer Name</th>
                        <th>Duration</th>
                        <th>Message</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.length > 0 ? (
                        bookings.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.serviceName}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>{item.email}</td>
                                <td>{item.name}</td>
                                <td>{item.duration}</td>
                                <td>{item.message}</td>
                                <td>{item.status || "Pending"}</td>
                                <td>
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        className="me-2"
                                        onClick={() => toggleStatus(item._id)}
                                    >
                                        {item.status === "Confirmed" ? "Mark Pending" : "Mark Confirmed"}
                                    </Button>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleDelete(item._id)}
                                    >
                                        x
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="10" className="text-center">
                                No bookings available
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default UserBookingList;
