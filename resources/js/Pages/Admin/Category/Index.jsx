import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, router, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import AdminPanelLayout from "../Layouts/AdminPanelLayout";
import DataTable from "../../../components/Datatable";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";

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

    const handleEdit = (category) => {
        if(!category){
            toast.error("Category not found!");
        }
        router.get(route('categories.edit', category?.id));
    }

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 70,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "name",
            headerName: "Category Name",
            width: 280,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "status",
            headerName: "Status",
            width: 180,
            headerAlign: "center",
            align: "center",
            renderCell: (params) =>
                params.value === "active" ? (
                    <HiCheckCircle size={24} className="text-success" />
                ) : (
                    <HiXCircle size={24} className="text-danger" />
                ),
        },
        {
            field: "Action",
            headerName: "Action",
            width: 180,
            headerAlign: "center",
            align: "center",
            sortable: false,
            renderCell: (params) => (
                <div style={{ display: "flex", gap: "8px" }}>
                    <IconButton
                        color="primary"
                        size="small"
                        onClick={() => handleEdit(params.row)}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        color="error"
                        size="small"
                        onClick={() => deleteItem(params.row.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </div>
            ),
        },
    ];

    return (
        <AdminPanelLayout>
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
                                                className="custom_button"
                                                onClick={addCategoryPage} 
                                            >
                                                Add Category
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Table */}
                            <DataTable columns={columns} rows={categories} />
                            {/* <table
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
                                                            deleteItem(
                                                                category.id
                                                            )
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
                                            <td
                                                colSpan="4"
                                                className="text-center"
                                            >
                                                No categories found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table> */}
                        </div>
                    </div>
                </div>
            </div>
        </AdminPanelLayout>
    );
};

export default Index;
