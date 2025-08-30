import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import { FiDelete } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";

const Index = () => {
    const { categories } = usePage().props; // Get categories passed from Laravel controller

    const addCategoryPage = () => {
        Inertia.visit(route("categories.create"));
    };

    const deleteItem = (categoryId) => {
        const url = route("categories.delete", categoryId);

        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(url, {
                    onSuccess: (page) => {
                        Swal.fire(
                            "Deleted!",
                            page.props.flash?.message || "Category deleted",
                            "success"
                        );
                    },
                    onError: () => {
                        Swal.fire(
                            "Error!",
                            "Failed to delete the Category",
                            "error"
                        );
                    },
                });
            }
        });
    };

    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        {/* Header Row */}
                        <div className="row d-flex align-items-center">
                            <div className="col-sm-6 col-md-6 col-lg-8">
                                <h4>Categories</h4>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4">
                                <div className="button-items">
                                    <Link href={route("categories.create")}>
                                        <button
                                            type="button"
                                            className="btn btn-outline-info waves-effect waves-light float-end"
                                            onClick={addCategoryPage}
                                        >
                                            Add Category
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Table */}
                        <table
                            className="table table-striped table-bordered dt-responsive nowrap"
                            style={{
                                borderCollapse: "collapse",
                                width: "100%",
                            }}
                        >
                            <thead>
                                <tr>
                                    <th>SR #</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories && categories?.length > 0 ? (
                                    categories?.map((category) => (
                                        <tr key={category.id}>
                                            <td>{category.id}</td>
                                            <td>{category.name}</td>
                                            <td>
                                                {category.status ===
                                                "active" ? (
                                                    <HiCheckCircle
                                                        size={26}
                                                        className="text-green-500"
                                                    />
                                                ) : (
                                                    <HiXCircle
                                                        size={26}
                                                        className="text-red-500"
                                                    />
                                                )}
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        Inertia.visit(
                                                            route(
                                                                "categories.edit",
                                                                category.id
                                                            )
                                                        )
                                                    }
                                                    className="btn btn-info"
                                                    title="Edit"
                                                >
                                                    <BiEdit size={26} />
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        deleteItem(category.id)
                                                    }
                                                    className="btn btn-danger ms-2"
                                                    title="Delete"
                                                >
                                                    <FiDelete />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center">
                                            No categories found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
