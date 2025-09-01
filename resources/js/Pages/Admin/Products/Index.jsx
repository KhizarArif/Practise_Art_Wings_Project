import React from "react";
import { Link, router } from "@inertiajs/react";
import Swal from "sweetalert2";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";

const Index = ({ products }) => {
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
                router.delete(route("product.delete", productId), {
                    onSuccess: (page) => {
                        Swal.fire(
                            "Deleted!",
                            page.props.flash.success,
                            "success"
                        );
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
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        {/* Header */}
                        <div className="row d-flex align-items-center justify-content-between">
                            <div className="col-sm-6 col-md-6 col-lg-8">
                                <h4>Products</h4>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4">
                                <div className="button-items">
                                    <Link
                                        href={route("product.create")}
                                        className="btn btn-outline-info waves-effect waves-light float-end"
                                    >
                                        Add Product
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
                                        <th style={{ width: "5%" }}>SR #</th>
                                        <th style={{ width: "10%" }}></th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {products && products.length > 0 ? (
                                        products.map((product) => (
                                            <tr
                                                key={product.id}
                                                className="align-middle"
                                            >
                                                <td>{product.id}</td>

                                                <td>
                                                    {product.productImages
                                                        ?.length > 0 && (
                                                        <img
                                                            src={`/uploads/product/small/${product.productImages[0].image}`}
                                                            className="img-thumbnail"
                                                            width="70"
                                                            alt={product.title}
                                                        />
                                                    )}
                                                </td>

                                                <td>{product.title}</td>
                                                <td>{product.price}</td>
                                                <td>{product.qty}</td>

                                                <td>
                                                    {product.status ===
                                                    "active" ? (
                                                        <HiCheckCircle className="text-success" />
                                                    ) : (
                                                        <HiXCircle className="text-danger" />
                                                    )}
                                                </td>

                                                <td>
                                                    <Link
                                                        href={route(
                                                            "product.edit",
                                                            product.id
                                                        )}
                                                        className="btn btn-info me-2"
                                                        title="Edit"
                                                    >
                                                        <i className="fas fa-user-edit"></i>
                                                    </Link>

                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        title="Delete"
                                                        onClick={() =>
                                                            handleDelete(
                                                                product.id
                                                            )
                                                        }
                                                    >
                                                        <i className="dripicons-document-delete"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="7"
                                                className="text-center"
                                            >
                                                No products found.
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
    );
};

export default Index;
