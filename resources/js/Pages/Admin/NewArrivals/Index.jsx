import React from "react";
import { Link, router } from "@inertiajs/react";
import Swal from "sweetalert2";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import { BiEdit } from "react-icons/bi";
import { FaDeleteLeft } from "react-icons/fa6";
import AdminPanelLayout from "../Layouts/AdminPanelLayout";

const Index = ({ newArrivals }) => {
    const handleDelete = (productId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("new_arrival.delete", productId), {
                    onSuccess: (page) => {
                        if (page.props.flash?.success) {
                            Swal.fire(
                                "Deleted!",
                                page.props.flash?.message || "Product deleted",
                                "success"
                            );
                        }
                    },
                    onError: () => {
                        Swal.fire(
                            "Error!",
                            "Failed to delete the product",
                            "error"
                        );
                    },
                    preserveScroll: true,
                });
            }
        });
    };

    return (
        <AdminPanelLayout>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            {/* Header */}
                            <div className="row d-flex align-items-center justify-content-between">
                                <div className="col-sm-6 col-md-6 col-lg-8">
                                    <h4>New Arrivals</h4>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-4">
                                    <div className="button-items">
                                        <Link
                                            href={route("new_arrival.create")}
                                            className="custom_button"
                                        >
                                            Add New Arrival
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="table-responsive">
                                <table
                                    id="datatable-buttons"
                                    className="table table-striped table-bordered dt-responsive nowrap"
                                    style={{
                                        borderCollapse: "collapse",
                                        width: "100%",
                                    }}
                                >
                                    <thead>
                                        <tr>
                                            <th style={{ width: "5%" }}>
                                                SR #
                                            </th>
                                            <th style={{ width: "10%" }}>
                                                {" "}
                                                Image
                                            </th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {newArrivals &&
                                        newArrivals?.length > 0 ? (
                                            newArrivals?.map((product) => {
                                                return (
                                                    <tr
                                                        key={product?.id}
                                                        className="align-middle"
                                                    >
                                                        <td>{product?.id}</td>
                                                        <td>
                                                            {product
                                                                ?.new_arrival_images
                                                                ?.length >
                                                                0 && (
                                                                <img
                                                                    src={`/uploads/NewArrival/${product?.new_arrival_images[0]?.image}`}
                                                                    className="img-thumbnail"
                                                                    width="70"
                                                                    alt={
                                                                        product.title
                                                                    }
                                                                />
                                                            )}
                                                        </td>

                                                        <td>
                                                            {product?.title}
                                                        </td>
                                                        <td>
                                                            {product?.price}
                                                        </td>
                                                        <td>{product?.qty}</td>

                                                        <td>
                                                            {product?.status ===
                                                            "active" ? (
                                                                <HiCheckCircle className="text-success" />
                                                            ) : (
                                                                <HiXCircle className="text-danger" />
                                                            )}
                                                        </td>

                                                        <td>
                                                            <Link
                                                                href={route(
                                                                    "new_arrival.edit",
                                                                    product?.id
                                                                )}
                                                                className="btn btn-info me-2"
                                                                title="Edit"
                                                            >
                                                                <BiEdit />
                                                            </Link>

                                                            <button
                                                                type="button"
                                                                className="btn btn-danger"
                                                                title="Delete"
                                                                onClick={() =>
                                                                    handleDelete(
                                                                        product?.id
                                                                    )
                                                                }
                                                            >
                                                                <FaDeleteLeft />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="7"
                                                    className="text-center"
                                                >
                                                    No newArrivals found.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminPanelLayout>
    );
};

export default Index;
